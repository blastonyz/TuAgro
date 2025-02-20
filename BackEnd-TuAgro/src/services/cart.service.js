import CartRepository from "../repository/cart.repository";

export default class CartRepository{
    constructor(){
        this.cartRepository = new CartRepository()
    }

    async get(){
        return this.cartRepository.get()
    }

    async getCart(cid){
         return await this.cartRepository.getCart(cid)
    }

    async create(data){
        return await this.cartRepository.create(data)
    }

   async  update(id,data){
        return await this.cartRepository.create(id,data)
    }

}