import { Request, Response } from 'express';
import httpStatus from 'http-status';
import Category from '../models/categoryModel';
import productsService from '../service/productsService';
import mongoose from 'mongoose';

export async function createCategory(req: Request, res: Response) {
  const body = req.body;

  try {
    await Category.create(body);

    return res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findAllCategories(req: Request, res: Response) {
  try {
    const categories = await productsService.findAllCategories();

    res.status(httpStatus.OK).send(categories);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findAllProducts(req: Request, res: Response) {
  try {
    const products = await productsService.findAllProducts();

    res.status(httpStatus.OK).send(products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function findOneProduct(req: Request, res: Response) {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Invalid id');
  }

  try {
    const product = await productsService.findOneProduct(id);

    res.status(httpStatus.OK).send(product);
  } catch (error) {
    console.log(error);
    if (error.name === 'NotFoundError') {
      return res.status(httpStatus.NOT_FOUND).send('Could not perform the request');
    }
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function createProduct(req: Request, res: Response) {
  const body = req.body;
  //verificar body em um joi

  try {
    const product = await productsService.createProduct(body);

    res.status(httpStatus.OK).send(product);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function updateProduct(req: Request, res: Response) {
  const { name, qty, price, categories } = req.body;
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Invalid id');
  }
  //verificar body em um joi
  try {
    const update = await productsService.updateProduct(id, name, qty, price, categories);

    res.status(httpStatus.OK).send(update);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}

export async function deleteProduct(req: Request, res: Response) {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send('Invalid id');
  }

  try {
    const productDeleted = await productsService.deleteProduct(id);

    res.status(httpStatus.OK).send(productDeleted);
  } catch (error) {
    console.log(error);
    return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
  }
}
