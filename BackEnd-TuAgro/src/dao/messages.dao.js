import MessagesModel from '../models/messages.model.js'

export default class MessagesDao{
    async get(){
        return MessagesModel.find()
    }

    async getByEmail(email){
        return MessagesModel.findOne(email)
    }

    async createMessage(message){
        return MessagesModel.create(message)
    }
}