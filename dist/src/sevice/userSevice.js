"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
const cartDetailSevice_1 = __importDefault(require("./cartDetailSevice"));
class UserSevice {
    constructor() {
        this.addNewUser = async (user) => {
            let newUser = new user_1.User();
            newUser.fullName = user.fullName;
            newUser.email = user.email;
            newUser.password = user.password;
            newUser.address = user.address;
            newUser.phoneNumber = user.phoneNumber;
            console.log(newUser);
            await this.userRepository.save(newUser);
        };
        this.findById = async (id) => {
            let arrUser = await this.userRepository.query(`select *from user where id=${id};`);
            return arrUser[0];
        };
        this.findUser = async (id) => {
            let arrUser = await this.userRepository.query(`select *from user where id=${id};`);
            return arrUser[0];
        };
        this.checkEmail = async (email) => {
            let useremail = await this.userRepository.query(`select user.email from user`);
            useremail.indexOf(email);
        };
        this.checkEmailAndPass = async (email, pass) => {
            let user = await this.userRepository.query(`select * from user where email="${email}" 
                    and password="${pass}"`);
            return user[0];
        };
        this.changeG = async () => {
            let [user] = await this.userRepository.find({
                where: {
                    id: 1
                },
                relations: {
                    carts: true,
                },
            });
            console.log("changeG:", user);
            user.fullName = "TTTT";
            let cart = await cartDetailSevice_1.default.findById(1);
            console.log(cart);
            this.userRepository.save(user);
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserSevice();
//# sourceMappingURL=userSevice.js.map