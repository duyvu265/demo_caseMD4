import {Cart} from "../entity/cart";
import {AppDataSource} from "../data-source";
import {Category} from "../entity/category";




class CartSevice {
    private categoryRepository;
    constructor() {
        this.categoryRepository=AppDataSource.getRepository(Category)
    }

    getAllProductInUser = async (idUser) => {
        let iduser=idUser.ObjectId
        let cartData = await this.categoryRepository.find(iduser)
        return cartData;
    }
    add = async (idUser,idProduct)=>{
       return  await  this.categoryRepository.save({ IdProduct: idProduct,IdUser:idUser})

    }

}

export default new CartSevice();