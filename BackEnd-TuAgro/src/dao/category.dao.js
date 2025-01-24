import { CategoryModel } from "../models/categories.model.js";

export default class CategoryDao{
    static get(){
        return CategoryModel.find()
    }
}