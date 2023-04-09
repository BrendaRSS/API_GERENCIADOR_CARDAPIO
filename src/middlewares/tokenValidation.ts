import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
import httpStatus from 'http-status';
import authRepository from '../repository/authRepository';

export default async function tokenValidation(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  const token = authorization?.replace('Bearer ', '');
  if (!token) {
    return res.sendStatus(httpStatus.UNAUTHORIZED);
  }

  try {
    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(httpStatus.UNAUTHORIZED).send('invalid token');
      }

      const user = await authRepository.findUserById((<any>decoded).id);
      if (!user) {
        return res.status(httpStatus.UNAUTHORIZED).send('User does not exist');
      }

      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
