import UsersRepository from "../repository/users.repository.js";
import CartService from "./cart.service.js";
import { createHash, isValidPassword } from '../middlewares/isAuth.js'
import { sessionToken } from "../middlewares/jwt.js";
import { decodedToken } from "../middlewares/jwt.js";


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
            const newCart = await this.cartService.create(data.email)
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
        const { first_name, last_name, email: userEmail, role,cart } = user;
        
        return {token:token,user:{first_name,last_name,email: userEmail,role,cart}}
       
    }

    async googlAauthentication(data){
        try {
            const user = await this.usersRepository.getByEmail(data.email)
            if(user){
                return sessionToken(user)
            }
            const newCart = await this.cartService.create()
            const newCartId = newCart._id.toString()
            const newUserData = {...data,cart:  newCartId}
            const newUser = await this.usersRepository.createUser(newUserData)
            return sessionToken(newUser)
        } catch (error) {
            console.log('error: ',error);
              throw error   
        }
    }

    async createRecoveryLink(email){
        const isValidEmail = await this.usersRepository.getByEmail(email)
        if(!isValidEmail){
            throw new Error('usuario no registrado')
        } 
        const token = await sessionToken(isValidEmail)
        const recoveryLink = `http://localhost:3000/recovery-pass?token=${token}`;  
       return recoveryLink
    }

    async updatePass(token,password){
        
        const tokenData = await decodedToken(token)
        console.log('datos del token: ',tokenData)
        const hashedPass = await createHash(password)
        const updated = await this.usersRepository.getByIdAndUpdate(tokenData.userId,{ password: hashedPass })
        return updated
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