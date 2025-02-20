import GenericRepository from "./generic.repository";

export default class ProductsRepository extends GenericRepository{
    constructor(dao){
        super(dao)
    }

    get = () => {
        return this.get()
    }

    getByCategory = (categorie) => {
        return this.getBy({categorie})
    }

    getById = (pid) => {
        return this.getBy({pid})
    }

    create = (data) => {
        return this.create({data})
    }

    update = (id,data) =>{
        return this.update({id,data});
    }

    delete = (id) =>{
        return this.delete({id});
    }

}