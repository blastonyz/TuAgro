
import CategoryDao from '../dao/category.dao.js';

export default class CategoriesRepository{
    constructor() {
        this.categoryDao = new CategoryDao()
      }
    
      async get() {
        return await this.categoryDao.get();
      }
    
      async getBy(params) {
        return await this.categoryDao.get(params);
      }
    
      async create(data) {
        return await this.categoryDao.create(data);
      }
    
      async update(id, data) {
        return await this.categoryDao.update(id, data);
      }
    
      async delete(id) {
        return await this.categoryDao.delete(id);
      }

}