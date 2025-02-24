import UsersRepository from "../repository/users.repository.js";
import CartService from "./cart.service.js";
import { createHash, isValidPassword } from '../middlewares/isAuth.js'
import { sessionToken } from "../middlewares/jwt.js";

export default class UsersService {
    constructor() {
        this.usersRepository = new UsersRepository()
        this.cartService = new CartService()
    }

    async get(params) {
        return this.usersRepository.get(params)
    }

    async getById(uid) {

        return this.usersRepository.getById(uid)
    }

    async getByEmail(email) {
        return this.usersRepository.getByEmail(email)
    }

    async createUser(data) {
        const newCart = await this.cartService.create()
        const newCartId = newCart._id.toString()
        const planePassword = data.password
        const hashPassword = createHash(planePassword)

        const newUser = { ...data, password: hashPassword, cart: newCartId }

        return this.usersRepository.createUser(newUser)

    }

    async logInUser(email, password) {
        const user = await this.usersRepository.getByEmail(email)
        if (!user) throw new Error("Usuario no encontrado");
        //comparo hash
        const verify = isValidPassword(password, user)
        if (!verify) throw new Error("email o password incorrectos");
        //doy permiso para enviar cookie
        const token = await sessionToken(user)
        return token
    }

    async update(uid, data) {
        return this.usersRepository.updateUserbyEmail({ uid, data })
    }

    async getByIdAndUpdate(sid, data) {
        return this.usersDao.getByIdAndUpdate(sid, data);
    }

    async delete(uid) {
        return this.usersDao.delete(uid)
    }
}