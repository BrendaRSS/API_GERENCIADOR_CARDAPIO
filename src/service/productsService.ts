import productsRepository from "../repository/productsRepository"
import badRequestError from "../errors/badRequestError";
import notFoundError from "../errors/notFoundError";
import { ObjectId } from "mongoose";

async function findAllCategories(){
    return await productsRepository.findAllCategories();
}

async function findAllProducts(){
    return await productsRepository.findAllProducts();
}

async function findOneProduct(id: string){
    const product = await productsRepository.findOneProduct(id);
    if(!product){
        throw notFoundError();
    }

    return product;
}

async function createProduct(product){
    const productCreated = await productsRepository.createProduct(product);
    if (!productCreated) {
        throw badRequestError();
    }

    return productCreated;
}

async function updateProduct(id: string, name: string, qty: number, price: number, categories: Array<string>) {
  const productExist = await findOneProduct(id);

  const update = await productsRepository.updateProduct(id, name, qty, price, categories);
  if(!update){
    throw badRequestError();
  }

  return update;
}

async function deleteProduct(id: string){
  const productDeleted = await productsRepository.deleteProduct(id);

  return productDeleted;
}

const productsService = {
  findAllCategories,
  findAllProducts,
  findOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};

export default productsService;

