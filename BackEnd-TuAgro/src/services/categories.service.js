import CategoriesRepository from "../repository/categoires.repository"

export default class CategoriesService {
    cosntructor(){
        this.categoriesRepository =  new CategoriesRepository()
    }

    async get(){
        return await this.categoriesRepository.get()
    }
}