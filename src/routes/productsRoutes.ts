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
import tokenValidation from '../middlewares/tokenValidation';
import admValidation from '../middlewares/admValidation';

const productsRoutes = Router();

productsRoutes.use(tokenValidation);
// productsRoutes.post('/category', createCategory);
productsRoutes.get('/category', findAllCategories);
productsRoutes.get('/product', findAllProducts);
productsRoutes.get('/product/:id', findOneProduct);
productsRoutes.post('/product', admValidation, createProduct);
productsRoutes.patch('/product/:id', admValidation, updateProduct);
productsRoutes.delete('/product/:id', admValidation, deleteProduct);

export default productsRoutes;
