import CategoriesRepository from "../repository/categories.repository.js"

export default class CategoriesService {
    constructor(){
        this.categoriesRepository =  new CategoriesRepository()
    }

    async get(){
        return await this.categoriesRepository.get()
    }
}