import UsersModel from '../models/users.model.js'

export default class UsersDao {
    async get(){
        return UsersModel.find();
    }

    async getByEmail(email){
        return UsersModel.findOne(email);
    }
    async getById(uid){
        return UsersModel.findById(uid);
    }

    async createUser(newUser){
        return UsersModel.create(newUser);
    }

    async updateUserbyEmail(email,user){
        return UsersModel.updateOne(email,user);
    }
    async getByIdAndUpdate(sid,data){
        return UsersModel.findByIdAndUpdate(sid,data);
    }
    async getByEmailAndDelete(email){
        return UsersModel.findOneAndDelete({email});
    }
}