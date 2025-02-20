
export default class GenericRepository{
    constructor(dao){
        this.dao = dao;
    }

    get = (params) =>{
        return this.dao.get(params);
    }

    getBy = (params) =>{
        return this.dao.getBy(params);
    }

    create = (data) => {
        return this.dao.create(data)
    }

    update = (id,data) =>{
        return this.dao.update(id,data);
    }

    delete = (id) =>{
        return this.dao.delete(id);
    }
}