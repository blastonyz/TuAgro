import CartDao from "../dao/carts.dao.js"



export default class CartRepository {
    constructor(){
        this.cartDao = new CartDao()
    }


    getCart = (cid) =>{
         return this.cartDao.getCart(cid)
    }

    create = (data) => {
        return this.cartDao.create({data})
    }

    update = (id,data) => {
        return this.cartDao.create({id,data})
    }

}