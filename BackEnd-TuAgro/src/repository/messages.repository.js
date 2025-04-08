import MessagesDao from "../dao/messages.dao.js"

export default class MessagesRepository{
    constructor(){
        this.messagesDao = new MessagesDao()
    }

    async get(){
        return this.messagesDao.get()
    }

    async getByEmail(email){
        return this.messagesDao.getByEmail(email)
    }

    async createMessagae(message){
        return this.messagesDao.createMessage(message)
    }
}