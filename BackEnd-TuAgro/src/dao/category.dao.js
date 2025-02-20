import { CategoryModel } from "../models/categories.model.js";

export default class CategoryDao{
    async get(){
        return await CategoryModel.find()
    }
}