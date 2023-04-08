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

const productsRepository = {
  findAllCategories,
  findAllProducts,
  findOneProduct,
};

export default productsRepository;