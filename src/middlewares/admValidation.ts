import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";
import authRepository from "../repository/authRepository";

export default async function admValidation(req: Request, res: Response, next: NextFunction){
    const user = res.locals.user;

    try{
        const userIsAdm = await authRepository.findUserById(user._id)
        if(userIsAdm.adm === false){
            return res.status(httpStatus.UNAUTHORIZED).send({ message: 'you are not an administrator' });
        }
        
        next();
    } catch (error){
        console.log(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}