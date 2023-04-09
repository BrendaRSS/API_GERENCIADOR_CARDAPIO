import Product from "../models/productModel";
import Category from "../models/categoryModel";

async function findAllCategories(){
    return await Category.find();
}

async function findAllProducts(){
    return await Product.find();
}

async function findOneProduct(id){
    return await Product.findById(id);
}

async function createProduct(product){
    return await Product.create(product);
}

const productsRepository = {
  findAllCategories,
  findAllProducts,
  findOneProduct,
  createProduct,
};

export default productsRepository;