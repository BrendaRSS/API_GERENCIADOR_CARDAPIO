import { Request, Response, NextFunction } from 'express';
import { signInSchema } from '../schemas/schemas';
import httpStatus from 'http-status';
import { Login } from '../protocols';

export default function signInValidation(req: Request, res: Response, next: NextFunction) {
  const body = req.body as Login;

  const { error } = signInSchema.validate(body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
  }

  res.locals.body = body;
  next();
}
