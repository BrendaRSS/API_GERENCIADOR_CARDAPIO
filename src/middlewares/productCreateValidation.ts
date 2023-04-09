import { Request, Response, NextFunction } from 'express';
import { productSchema } from '../schemas/schemas';
import httpStatus from 'http-status';
import { ProductBody } from '../protocols';

export default function productCreateValidation(req: Request, res: Response, next: NextFunction) {
  const body = req.body as ProductBody;

  const { error } = productSchema.validate(body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);

    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
  }

  res.locals.body = body;
  next();
}
