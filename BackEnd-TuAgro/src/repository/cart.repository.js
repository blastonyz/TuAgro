import CartDao from "../dao/carts.dao.js"


export default class CartRepository {
    constructor(){
        this.cartDao = new CartDao()
    }


    async getCart(cid){
         return this.cartDao.getCart(cid)
    }

    async createCart(data) {
        return this.cartDao.createCart({data})
    }

    async update(id,data) {
        return this.cartDao.create({id,data})
    }

    async getPopulate(_id) {
        return this.cartDao
    }

}