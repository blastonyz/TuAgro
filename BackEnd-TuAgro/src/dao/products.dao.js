import { ProductModel } from "../models/products.model.js";
import mongoose from "mongoose";

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

    async updateById(pid, data){
        return await ProductModel.findByIdAndUpdate(pid, data)
    }

    async delete(pid){
        return await ProductModel.deleteOne({_id: pid})
    }
}
