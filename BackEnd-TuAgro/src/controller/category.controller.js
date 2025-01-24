import CategoryDao from "../dao/category.dao.js";

export default class CategoryController{
    static async get(){
         const categories = await CategoryDao.get();
        console.log('Total Products',categories);
        return categories;
    }
}