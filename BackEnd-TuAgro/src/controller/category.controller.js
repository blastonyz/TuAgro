import CategoriesService from "../services/categories.service.js";

export default class CategoryController{
    constructor() {
        this.categoriesService = new CategoriesService(); 
    }

    async get() { 
        try {
            const categories = await this.categoriesService.get();
           
            return categories
        } catch (error) {
            console.error("Error getting categories:", error);
        }
    }
}