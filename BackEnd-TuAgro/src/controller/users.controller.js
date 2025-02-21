import UsersService from "../services/users.service.js";

export default class UsersController {
    constructor(){
        this.userServices = new UsersService()
    }

         async get(){
            return this.userServices.find();
        }
    
         async getByEmail(email){
            return this.userServices.findOne(email);
        }
         async getById(uid){
            return this.userServices.findById(uid);
        }
    
         async createUser(newUser){
            console.log(newUser);
            
            return this.userServices.createUser(newUser);
        }
    
         async updateUserbyEmail(email,user){
            return this.userServices.update(email,user);
        }
         async getByIdAndUpdate(sid,data){
            return this.userServices.findByIdAndUpdate(sid,data);
        }
         async getByEmailAndDelete(email){
            return this.userServices.findOneAndDelete({email});
        }
}