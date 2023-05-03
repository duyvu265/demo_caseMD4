import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import ProductSevice from "./productSevice";
class UserSevice {
    private userRepository

    constructor() {
        this.userRepository=AppDataSource.getRepository(User)
    }

    add = async (user) => {

        await this.userRepository.save(user);

    }
    getAllProduct = async () => {

        let product = await ProductSevice.getAll();

        return product;
    }
    findById = async (id) => {
        let arrUser = await this.userRepository.find({id: id})
        return arrUser[0];

    }

}

export default new UserSevice();