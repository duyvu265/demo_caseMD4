"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const category_1 = require("../entity/category");
class CartSevice {
    constructor() {
        this.getAllProductInUser = async (idUser) => {
            let iduser = idUser.ObjectId;
            let cartData = await this.categoryRepository.find(iduser);
            return cartData;
        };
        this.add = async (idUser, idProduct) => {
            return await this.categoryRepository.save({ IdProduct: idProduct, IdUser: idUser });
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CartSevice();
//# sourceMappingURL=cartSevice.js.map