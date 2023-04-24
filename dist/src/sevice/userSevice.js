"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../entity/user");
const data_source_1 = require("../data-source");
class UserSevice {
    constructor() {
        this.addNewUser = async (user) => {
            console.log('BF DOne');
            await this.userRepository.save(user);
            console.log('DONE');
        };
        this.findById = async (id) => {
            let arrUser = await this.userRepository.find({ _id: id });
            return arrUser[0];
        };
        this.findUser = async (id) => {
            let arrUser = await this.userRepository.find({ _id: id });
            return arrUser[0];
        };
        this.checkEmail = async (email) => {
            let useremail = await this.userRepository.query(`select user.email from user`);
            useremail.indexOf(email);
        };
        this.checkEmailAndPass = async (userData) => {
            console.log(" da check");
            let user = await this.userRepository.find({ email: userData.email, password: userData.password });
            return user[0];
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserSevice();
//# sourceMappingURL=userSevice.js.map