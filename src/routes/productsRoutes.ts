import { Router } from 'express';
import {
  createCategory,
  findAllCategories,
  findAllProducts,
  findOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController';

const productsRoutes = Router();

// productsRoutes.post('/category', createCategory);
productsRoutes.get('/category', findAllCategories);
productsRoutes.get('/product', findAllProducts);
productsRoutes.get('/product/:id', findOneProduct);
productsRoutes.post('/product', createProduct);
productsRoutes.patch('/product/:id', updateProduct);
productsRoutes.delete('/product:id', deleteProduct);

export default productsRoutes;
