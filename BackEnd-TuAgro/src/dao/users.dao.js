import UsersModel from '../models/users.model.js'

export default class UsersDao {
    static get(){
        return UsersModel.find();
    }

    static getByEmail(email){
        return UsersModel.findOne(email);
    }
    static getById(uid){
        return UsersModel.findById(uid);
    }

    static createUser(newUser){
        return UsersModel.create(newUser);
    }

    static updateUserbyEmail(email,user){
        return UsersModel.updateOne(email,user);
    }
    static getByIdAndUpdate(sid,data){
        return UsersModel.findByIdAndUpdate(sid,data);
    }
    static getByEmailAndDelete(email){
        return UsersModel.findOneAndDelete({email});
    }
}