import productsRepository from "../repository/productsRepository"
import badRequestError from "../errors/badRequestError";
import notFoundError from "../errors/notFoundError";

async function findAllCategories(){
    return await productsRepository.findAllCategories();
}

async function findAllProducts(){
    return await productsRepository.findAllProducts();
}

async function findOneProduct(id){
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

const productsService = {
  findAllCategories,
  findAllProducts,
  findOneProduct,
  createProduct,
};

export default productsService;

