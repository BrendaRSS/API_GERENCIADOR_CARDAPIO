import { Request, Response } from "express";
import httpStatus from "http-status";

export async function findAllCategories(req: Request, res: Response) {
  try {
    res.status(httpStatus.OK).send('Requisições aqui');
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findAllProducts(req: Request, res: Response){
  try {
    res.status(httpStatus.OK).send('Requisições aqui');
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findOneProduct(req: Request, res: Response) {
      try {
        res.status(httpStatus.OK).send('Requisições aqui');
      } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
}

export async function createProduct(req: Request, res: Response) {
      try {
        res.status(httpStatus.OK).send('Requisições aqui');
      } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
}

export async function updateProduct(req: Request, res: Response) {
      try {
        res.status(httpStatus.OK).send('Requisições aqui');
      } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
}

export async function deleteProduct(req: Request, res: Response) {
      try {
        res.status(httpStatus.OK).send('Requisições aqui');
      } catch (error) {
        console.log(error);
        return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }
}