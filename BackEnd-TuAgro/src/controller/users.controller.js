import UsersDao from '../dao/users.dao.js'

export default class UsersController {
        static async get(){
            return UsersDao.find();
        }
    
        static async getByEmail(email){
            return UsersDao.findOne(email);
        }
        static async getById(uid){
            return UsersDao.findById(uid);
        }
    
        static async createUser(newUser){
            return UsersDao.create(newUser);
        }
    
        static async updateUserbyEmail(email,user){
            return UsersDao.updateOne(email,user);
        }
        static async getByIdAndUpdate(sid,data){
            return UsersDao.findByIdAndUpdate(sid,data);
        }
        static async getByEmailAndDelete(email){
            return UsersDao.findOneAndDelete({email});
        }
}