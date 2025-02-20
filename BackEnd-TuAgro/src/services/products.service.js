import ProductsRepository from "../repository/products.repository";

export default class ProductsServices {
    constructor(){
        this.productsRepository = new ProductsRepository()
    }

    async get(){
        return await this.productsRepository.get()
    }

    async getByCategorie(categorie){
        return this.productsRepository.getByCategorie(categorie)
    }

    async getById(pid){
       return await this.productsRepository.getById(pid)  
    }
       
    async create(data){
        return await this.productsRepository.create(data)
    }

    async delete(pid){
        return await this.productsRepository.delete(pid)
    }
}