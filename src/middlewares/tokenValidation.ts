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
        return res.status(401).send('token inválido');
      }

      const user = await authRepository.findUserById((<any>decoded).id);

      res.locals.user = user;
      next();
    });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
