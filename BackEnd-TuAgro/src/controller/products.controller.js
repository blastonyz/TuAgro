import ProductMongoDbDao from "../dao/products.dao.js";

export default class ProductsController{
   static async get({}){
        const products = await ProductMongoDbDao.get({});
        console.log('Total Products',products.length);
        return products;
    }

    static async getById(pid){
        const product = await ProductMongoDbDao.getById(pid)
        console.log('Product',product);
        
    }
    
    static async create(data){
        const newPorduct = await ProductMongoDbDao.create(data);
        console.log('Product Created',newPorduct);
        
    }

}