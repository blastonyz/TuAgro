import MessagesService from "../services/messages.service.js";

export default class MessagesController{
    constructor(){
        this.messagesServices = new MessagesService
    }

    async get(){
        return await this.messagesServices.get()
    }

    async getByEmail(email){
        const message = await this.messagesServices.getByEmail(email)
        return message
    }

    async createMessage(message){
        const newMessage = await this.messagesServices.createMessage(message)
        return newMessage
    }
}