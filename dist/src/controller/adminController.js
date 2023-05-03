"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const adminSevice_1 = __importDefault(require("../sevice/adminSevice"));
const userSevice_1 = __importDefault(require("../sevice/userSevice"));
const productSevice_1 = __importDefault(require("../sevice/productSevice"));
class adminController {
    constructor() {
        this.showHomeAdmin = async (req, res) => {
            if (req.session['user']) {
                let id = req.session['user'].id;
                let user = await userSevice_1.default.findUser(id);
                if (user.role === 0) {
                    let listProducts = await productSevice_1.default.getAll();
                    res.render('admin/admin', { products: listProducts });
                }
                else {
                    res.redirect(301, '/login');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.adminSevice = adminSevice_1.default;
    }
}
exports.default = new adminController();
//# sourceMappingURL=adminController.js.map