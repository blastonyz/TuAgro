import CategoriesService from "../services/categories.service.js";

export default class CategoryController{
    constructor() {
        this.categoriesService = new CategoriesService(); // ✅ Instancia del servicio
    }

    async get() { 
        try {
            const categories = await this.categoriesService.get();
            console.log('categories', categories);
            return categories
        } catch (error) {
            console.error("Error getting categories:", error);
        }
    }
}