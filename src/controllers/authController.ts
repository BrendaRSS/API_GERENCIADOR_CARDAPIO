import { Request, Response } from 'express';
import httpStatus from 'http-status';
import authService from '../service/authService';
import { BodyUser, Login } from '../protocols';

export async function signUp(req: Request, res: Response) {
  const body = res.locals.body as BodyUser;

  try {
    const user = await authService.signUp(body);

    return res.status(httpStatus.CREATED).send(user);
  } catch (error) {
    console.log(error);
    if (error.name === 'ConflictError') {
      return res.sendStatus(httpStatus.CONFLICT);
    }
    if (error.name === 'BadRequestError') {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function signIn(req: Request, res: Response) {
  const body = res.locals.body as Login;
  try {
    const userToken = await authService.signIn(body);

    return res.status(200).send(userToken);
  } catch (error) {
    console.log(error);
    if (error.name === 'UnauthorizedError') {
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
