import UsersDao from "../dao/users.dao.js"

export default class UsersRepository{
    constructor(){
      this.usersDao = new UsersDao()
    }

    async get(params) {
        return this.usersDao.get(params)
    }

    async getById(uid){
        return this.usersDao.getById(uid)
    }

    async getByEmail(email){
        return this.usersDao.getByEmail({email})
    }

    async createUser(data){
        return this.usersDao.createUser(data)
    }

    async update(uid,data){
        return this.usersDao.updateUserbyEmail({uid,data})
    }

    async getByIdAndUpdate(sid,data){
            return  this.usersDao.getByIdAndUpdate(sid,data);
    }

    async delete(uid){
        return this.usersDao.delete({uid})
    }
}