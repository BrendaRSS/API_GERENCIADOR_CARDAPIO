import Product from '../models/productModel';
import Category from '../models/categoryModel';
import { ProductBody } from '../protocols';

async function findAllCategories() {
  return await Category.find();
}

async function findAllProducts() {
  return await Product.find().sort({ _id: -1 }).populate('categories');
}

async function findOneProduct(id: string) {
  return await Product.findById(id).populate('categories');
}

async function createProduct(product: ProductBody) {
  return await Product.create(product);
}

async function updateProduct(id: string, name: string, qty: number, price: number, categories: Array<string>) {
  return await Product.findOneAndUpdate({ _id: id }, { name, qty, price, categories });
}

async function deleteProduct(id: string) {
  return await Product.findByIdAndDelete({ _id: id });
}

const productsRepository = {
  findAllCategories,
  findAllProducts,
  findOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productsRepository;
