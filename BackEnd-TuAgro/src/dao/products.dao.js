import { ProductModel } from "../models/products.model.js";

export default class ProductMongoDbDao {
    static get(criteria = {}){
        return ProductModel.find(criteria);
    }

    static getById(pid){
        return ProductModel.findById(pid);
    }
    
    static create(data){
        return ProductModel.create(data);
    }

    static updateById(pid, data){
        return ProductModel.findByIdAndUpdate(pid, data)
    }

}
