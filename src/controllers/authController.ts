import { Request, Response } from 'express';
import httpStatus from 'http-status';
import authService from '../service/authService';
import { BodyUser } from '../protocols';

export async function signUp(req: Request, res: Response) {
  const body = req.body as BodyUser;

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
  //   const body = req.body as BodyUser;
  //   try {
  //     const user = await authService.signUp(body);
  //     return res.status(httpStatus.CREATED).send(user);
  //   } catch (error) {
  //     console.log(error);
  //     if (error.name === 'ConflictError') {
  //       return res.sendStatus(httpStatus.CONFLICT);
  //     }
  //     if (error.name === 'BadRequestError') {
  //       return res.sendStatus(httpStatus.BAD_REQUEST);
  //     }
  //     return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  //   }
}
