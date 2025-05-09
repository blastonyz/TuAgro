import { ProductModel } from "../models/products.model.js";


export default class ProductsDao {
    async get(criteria = {}){
        return await ProductModel.find(criteria);
    }

    async getByCategory(category){
        return await ProductModel.find(category);
    }

    async getById(pid){
        return await ProductModel.findById(pid);
    }
    
    async create(data){ 
        return await ProductModel.create(data);
    }

    async updateById(_id, data){
        return await ProductModel.findByIdAndUpdate(_id, data)
    }

    async delete(pid){
        return await ProductModel.deleteOne({_id: pid})
    }
}
