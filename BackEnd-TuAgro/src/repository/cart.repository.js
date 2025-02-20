import GenericRepository from "./generic.repository";

export default class CartRepository extends GenericRepository{
    constructor(dao){
        super(dao)
    }

    get = () => {
        return this.get()
    }

    getCart = (cid) =>{
         return this.getBy(cid)
    }

    create = (data) => {
        return this.create({data})
    }

    update = (id,data) => {
        return this.create({id,data})
    }

}