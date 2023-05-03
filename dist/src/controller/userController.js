"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userSevice_1 = __importDefault(require("../sevice/userSevice"));
class userController {
    constructor() {
        this.showFormSignUp = (req, res) => {
            res.render('user/signup');
        };
        this.addUser = async (req, res) => {
            let user = req.body;
            await this.userSevice.addNewUser(user);
            res.redirect(301, '/login');
        };
        this.showFormSignIn = (req, res) => {
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let userData = req.body;
            let email = userData.email;
            let pass = userData.password;
            let user = await this.userSevice.checkEmailAndPass(email, pass);
            if (user != undefined) {
                if (user['role'] === 0) {
                    req.session['user'] = user;
                    res.redirect(301, '/admin');
                }
                else {
                    req.session['user'] = user;
                    res.redirect(301, '/index');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.logout = (req, res) => {
            req.session.destroy(function (err) {
                res.redirect(301, '/login');
                return res.status(200).json({ status: 'success', session: 'cannot access session here' });
            });
        };
        this.userSevice = userSevice_1.default;
    }
}
exports.default = new userController();
//# sourceMappingURL=userController.js.map