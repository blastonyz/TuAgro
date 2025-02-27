import UsersService from "../services/users.service.js";

export default class UsersController {
    constructor() {
        this.userServices = new UsersService()
    }

    async get() {
        return await this.userServices.find();
    }

    async getById(uid) {
        return await this.userServices.getById(uid)
    }

    async createUser(newUser) {
        try { 
            return await this.userServices.createUser(newUser);
        } catch (error) {
            throw error
        }
       
    }

    async logInUser(email, password) {
        const userAndToken = await this.userServices.logInUser(email, password)
   
        return { token: userAndToken.token,user: userAndToken.user }
    }

}