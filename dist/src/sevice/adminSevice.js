"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
const productSevice_1 = __importDefault(require("./productSevice"));
class UserSevice {
    constructor() {
        this.add = async (user) => {
            await this.userRepository.save(user);
        };
        this.getAllProduct = async () => {
            let product = await productSevice_1.default.getAll();
            return product;
        };
        this.findById = async (id) => {
            let arrUser = await this.userRepository.find({ id: id });
            return arrUser[0];
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserSevice();
//# sourceMappingURL=adminSevice.js.map