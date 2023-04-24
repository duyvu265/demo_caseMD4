"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = __importDefault(require("../controller/productController"));
const userController_1 = __importDefault(require("../controller/userController"));
const adminController_1 = __importDefault(require("../controller/adminController"));
const router = (0, express_1.Router)();
router.get('/index', productController_1.default.findAll);
router.get('/add', productController_1.default.showFormAdd);
router.post('/add', productController_1.default.addProduct);
router.get('/edit/:id', productController_1.default.showFormEdit);
router.post('/edit/:id', productController_1.default.editProduct);
router.get('/delete/:id', productController_1.default.deleteProductByAdmin);
router.get('/about', productController_1.default.showAbout);
router.get('/signup', userController_1.default.showFormSignUp);
router.post('/signup', userController_1.default.addUser);
router.post('/login', userController_1.default.login);
router.get('/login', userController_1.default.showFormSignIn);
router.get('/admin', adminController_1.default.showHomeAdmin);
router.get('/logout', userController_1.default.logout);
router.get('/cart', productController_1.default.showCart);
router.post('/addToCart', productController_1.default.addToCart);
router.get('/bougth', productController_1.default.showBougth);
router.get('/buynow/:id', productController_1.default.showBuy);
exports.default = router;
//# sourceMappingURL=router.js.map