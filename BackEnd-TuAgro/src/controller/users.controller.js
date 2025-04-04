import UsersService from "../services/users.service.js";
import EmailServices from "../services/email.service.js";

export default class UsersController {
    constructor() {
        this.userServices = new UsersService()
        this.emailServices = new EmailServices()
    }

    async get() {
        return await this.userServices.find();
    }

    async getById(uid) {
        return await this.userServices.getById(uid)
    }

    async getByEmail(email) {
        return this.userServices.getByEmail(email)
    }
    //incluir logica para dividir email para google auth y para registro por app
    async createUser(newUser) {
        try {
            const register = await this.userServices.createUser(newUser);

            const send = await this.emailServices.sendMail(
                `${newUser.email}`,
                'Gracias por registrarte en TuAgro',
                `<p>Bienvenido </p><h2>${newUser.first_name} ${newUser.last_name} </h2></p>`
            )
            return register
        } catch (error) {
            throw error
        }

    }

    async logInUser(email, password) {
        try {
            const userAndToken = await this.userServices.logInUser(email, password)

            return { token: userAndToken.token, user: userAndToken.user }
        } catch (error) {
            throw error
        }

    }

    async googleUser(data) {
        const token = await this.userServices.googlAauthentication(data)
        return token
    }

    async createRecoveryLink(email) {
        try {
            const link = await this.userServices.createRecoveryLink(email)
            console.log('controller link: ', link)
            const result = await this.emailServices.sendMail(
                `${email}`,
                'Enlace de recuperacion de password',
                `<h2>Ingresa al siguiente enlace para restablecer tu contraseña:</h2> <a href=${link}>Link</a>`)
            return result
        } catch (error) {
            console.log('error: ', error);

        }
    }

    async updatePass(token,password){
        return await this.userServices.updatePass(token,password)
    }
}