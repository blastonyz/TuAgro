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
        try {
            const exist = await this.usersRepository.getByEmail(data.email)
            if(exist) throw new Error('user already exist')
            const newCart = await this.cartService.create()
            const newCartId = newCart._id.toString()
            const planePassword = data.password
            const hashPassword = await createHash(planePassword)
    
            const newUser = { ...data, password: hashPassword, cart: newCartId }
    
            return this.usersRepository.createUser(newUser)
        } catch (error) {
              console.log('error: ',error);
              throw error   
        }
   

    }

    async logInUser(email, password) {
        const user = await this.usersRepository.getByEmail(email)
        if (!user) throw new Error("Usuario no encontrado");
       
        const verify =  await isValidPassword(password, user)
        if (!verify) throw new Error("email o password incorrectos");
       
        const token = await sessionToken(user)
        const { first_name, last_name, email: userEmail, role } = user;
        
        return {token:token,user:{first_name,last_name,email: userEmail,role}}
       
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