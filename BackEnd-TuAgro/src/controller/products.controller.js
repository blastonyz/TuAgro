import ProductsServices from "../services/products.service.js";

export default class ProductsController {
    constructor() {
        this.productsServices = new ProductsServices()
    }

    async get({ }) {
        const products = await this.productsServices.get({});
        return products;
    }

    async getByCategory(category) {
        const products = await this.productsServices.getByCategory(category);
        console.log(`category ${category}`);
        return products;
    }


    async getById(pid) {
        const product = await this.productsServices.getById(pid)
        return product
    }

    async create(data) {
        const newPorduct = await this.productsServices.create(data);
        console.log('Product Created', newPorduct);
        return newPorduct
    }

    async delete(pid){
        return await this.productsServices.delete(pid)
    }
}