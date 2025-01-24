import ProductDao from "../dao/products.dao.js";

export default class ProductsController{
   static async get({}){
        const products = await ProductDao.get({});
        console.log('Total Products',products.length);
        return products;
    }

    static async getById(pid){
        const product = await ProductDao.getById(pid)
        console.log('Product',product);
        return product
    }
    
    static async create(data){
        const newPorduct = await ProductDao.create(data);
        console.log('Product Created',newPorduct);
        
    }

}