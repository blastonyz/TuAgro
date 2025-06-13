import OrdersRepository from "../repository/order.repository.js";
import EmailServices from "./email.service.js";

export default class OrdersService{
    constructor(){
        this.ordersRepository = new OrdersRepository()
        this.emailServices = new EmailServices()
    }
    async get(){
        return this.ordersRepository.get()
    }

    async getByEmail(email){
        return this.ordersRepository.getByEmail(email)
    }

    async createOrder(order){
       const newOrder =  this.ordersRepository.createOrder(order)

         const send = await this.emailServices.sendMail(
                `${order.client}`,
                'Gracias por realizar un pedido en TuAgro',
                `<p>Nuestro equipo se pondra en contacto a la brevedad para avanzar en la compra</p>`
            )

             return newOrder
    }

   
}