import ProductsDao from "../dao/products.dao.js"

export default class ProductsRepository{
    constructor(){
        this.productsDao = new ProductsDao()
    }

    async get ()  {
        return await this.productsDao.get()
    }

    async getByCategory (category)  {
        return await this.productsDao.getByCategory({category})
    }

    async getById (pid)  {
        return await this.productsDao.getById(pid)
    }

    async create (data)  {
        return await this.productsDao.create(data)
    }

    async update (id,data) {
        return await this.productsDao.update({id,data});
    }

    async delete (id) {
        return await this.productsDao.delete(id);
    }

}