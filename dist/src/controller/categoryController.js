"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categorySevice_1 = __importDefault(require("../sevice/categorySevice"));
class CategoryContrller {
    constructor() {
        this.findAllCategory = async (req, res) => {
            let listCategory = await categorySevice_1.default.getAll();
            res.render('product/add', { categoryList: listCategory });
        };
        this.categorySevice = categorySevice_1.default;
    }
}
exports.default = new CategoryContrller();
//# sourceMappingURL=categoryController.js.map