import CategoryDao from "../dao/category.dao.js";

export default class CategoryController{
    static async get(){
         const categories = await CategoryDao.get();
        console.log('categories',categories);
        return categories;
    }
}