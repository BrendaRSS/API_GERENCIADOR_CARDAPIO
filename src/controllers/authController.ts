import { Request, Response } from "express";
import httpStatus from "http-status";

export async function authLogin(req: Request, res: Response) {
    const body = req.body;

    try{
        console.log(body);
    }catch(error){
        console.log(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
}