import {Category} from "../entity/category";
import {AppDataSource} from "../data-source";


class CategorySevice {
    private categoryRepository;

    constructor() {
        this.categoryRepository=AppDataSource.getRepository(Category)
    }

    getAll = async () => {
        let category = await  this.categoryRepository.find()
        return category;
    }

}

export default new CategorySevice();