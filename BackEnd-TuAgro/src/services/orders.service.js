import OrdersRepository from "../repository/order.repository.js";

export default class OrdersService{
    constructor(){
        this.ordersRepository = new OrdersRepository()
    }
    async get(){
        return this.ordersRepository.get()
    }

    async getByEmail(email){
        return this.ordersRepository.getByEmail(email)
    }

    async createOrder(order){
        return this.ordersRepository.createOrder(order)
    }
}