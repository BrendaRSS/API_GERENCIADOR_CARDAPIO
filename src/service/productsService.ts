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

const productsService = {
  findAllCategories,
  findAllProducts,
  findOneProduct,
};

export default productsService;

