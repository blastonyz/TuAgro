import GenericRepository from "./generic.repository";

export default class UsersRepository extends GenericRepository{
    constructor(dao){
        super(dao)
    }

    get = (params) => {
        return this.get(params)
    }

    getById = (uid) => {
        return this.getBy({uid})
    }

    getByEmail = (email) => {
        return this.getBy({email})
    }

    create = (data) => {
        return this.create({data})
    }

    update = (uid,data) => {
        return this.update({uid,data})
    }

    delete = (uid) => {
        return this.delete({uid})
    }
}