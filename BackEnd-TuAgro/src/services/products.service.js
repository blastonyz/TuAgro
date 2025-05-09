import ProductsRepository from "../repository/products.repository.js";

export default class ProductsServices {
    constructor(){
        this.productsRepository = new ProductsRepository()
    }

    async get(){
        return await this.productsRepository.get()
    }

    async getByCategory(category){
        return await this.productsRepository.getByCategory(category)
    }

    async getById(pid){
       return await this.productsRepository.getById(pid)  
    }
       
    async create(data){
        return await this.productsRepository.create(data)
    }

    async update(pid,data){
        return await this.productsRepository.update(pid,data)
    }

    async delete(pid){
        return await this.productsRepository.delete(pid)
    }
}