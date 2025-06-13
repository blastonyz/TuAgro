import CartDao from "../dao/carts.dao.js"


export default class CartRepository {
    constructor(){
        this.cartDao = new CartDao()
    }


    async get(){
        return this.cartDao.get()
    }

    async getCart(cid){
         return this.cartDao.getPopulate(cid)
    }

    async createCart(email) {
        console.log('repo: ',email);
        
        return this.cartDao.createCart(email)
    }

    async updateCart(id,data) {
        return this.cartDao.update(id,data)
    }

    async resetCart(cid){
        return this.cartDao.resetCart(cid)
    }

}