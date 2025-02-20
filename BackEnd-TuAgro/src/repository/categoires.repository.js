import GenericRepository from "./generic.repository";

export default class CategoriesRepository extends GenericRepository{
    constructor(dao){
        super(dao)
    }

    get = () => {
        return this.dao.get()
    }
}