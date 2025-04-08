import OrdersDao from "../dao/orders.dao.js";

export default class OrdersRepository{
    constructor(){
        this.ordersDao = new OrdersDao
    }

    async get(){
        return this.ordersDao.get()
    }

    async getByEmail(email){
        return this.ordersDao.getByEmail(email)
    }

    async createOrder(order){
        return this.ordersDao.createOrder(order)
    }
}

