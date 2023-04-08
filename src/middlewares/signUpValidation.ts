import { NextFunction, Request, Response } from 'express';
import { signUpSchema } from '../schemas/schemas';
import httpStatus from 'http-status';
import bcrypt from 'bcrypt';
import { BodyUser } from '../protocols';

export default function signUpValidation(req: Request, res: Response, next: NextFunction) {
  const body = req.body as BodyUser;

  const { error } = signUpSchema.validate(body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(errors);
  }

  const hashPassword = bcrypt.hashSync(body.password, 12);
  const bodyHashPassword = {...body, password: hashPassword};

  res.locals.body = bodyHashPassword;
  next();
}
