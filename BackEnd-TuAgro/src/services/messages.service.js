import MessagesRepository from "../repository/messages.repository.js"

export default class MessagesService{
    constructor(){
        this.messagesRepositoty = new MessagesRepository()
    }

    async get(){
        return this.messagesRepositoty.get()
    }

    async getByEmail(email){
        return this.messagesRepositoty.getByEmail(email)
    }

    async createMessage(message){
        return this.messagesRepositoty.createMessagae(message)
    }
}