"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productSevice_1 = __importDefault(require("../sevice/productSevice"));
const categorySevice_1 = __importDefault(require("../sevice/categorySevice"));
const userSevice_1 = __importDefault(require("../sevice/userSevice"));
const cartSevice_1 = __importDefault(require("../sevice/cartSevice"));
class ProductController {
    constructor() {
        this.findAll = async (req, res) => {
            if (req.session['user']) {
                let id = req.session['user']._id;
                let user = await userSevice_1.default.findUser(id);
                if (user.role === 1) {
                    let listProduct = await productSevice_1.default.getAll();
                    res.render('index', { products: listProduct });
                }
                else {
                    res.redirect(301, '/login');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.showFormAdd = async (req, res) => {
            if (req.session['user']) {
                let id = req.session['user']._id;
                let user = await userSevice_1.default.findUser(id);
                if (user.role === 0) {
                    let listCategory = await categorySevice_1.default.getAll();
                    res.render('product/add', { categoryList: listCategory });
                }
                else {
                    res.redirect(301, '/login');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.addProduct = (req, res) => {
            if (req.session['user']) {
                this.productService.add(req.body);
                res.redirect(301, '/admin');
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.showFormEdit = async (req, res) => {
            if (req.session['user']) {
                let id = req.session['user']._id;
                let user = await userSevice_1.default.findUser(id);
                let idProduct = req.params.id;
                if (user.role === 0) {
                    let data = await this.productService.findByIdProduct(idProduct);
                    let listCategory = await categorySevice_1.default.getAll();
                    res.render('product/edit', {
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        image: data.image,
                        categoryList: listCategory
                    });
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.editProduct = async (req, res) => {
            if (req.session['user']) {
                let id = req.session['user']._id;
                let user = await userSevice_1.default.findUser(id);
                let idProduct = req.params.id;
                if (user.role === 0) {
                    await this.productService.edit(idProduct, req.body);
                    res.redirect(301, '/admin');
                }
                else {
                    res.redirect(301, '/login');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.deleteProductByAdmin = async (req, res) => {
            if (req.session['user']) {
                let id = req.session['user']._id;
                let user = await userSevice_1.default.findUser(id);
                let idProduct = req.params.id;
                console.log(idProduct);
                if (user.role === 0) {
                    await this.productService.deleteProduct(idProduct);
                    res.redirect(301, '/admin');
                }
                else {
                    res.redirect(301, '/login');
                }
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.showAbout = async (req, res) => {
            res.render('about');
        };
        this.showCart = async (req, res) => {
            if (req.session['user']) {
                let idUser = req.session['user']._id;
                let listDataProductInCart = await cartSevice_1.default.getAllProductInUser(idUser);
                let totalPrice;
                listDataProductInCart.forEach(item => {
                    totalPrice += item['IdProduct'].price;
                });
                res.render('user/cart', { cartList: listDataProductInCart, totalPrice: totalPrice });
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.addToCart = async (req, res) => {
            if (req.session['user']) {
                let idUser = req.session['user']._id;
                let { idProduct } = req.body;
                await cartSevice_1.default.add(idUser, idProduct);
            }
        };
        this.search = async (req, res) => {
            if (req.session['user']) {
                let listProduct = await this.productService.findByName(req.body);
            }
        };
        this.showBougth = async (req, res) => {
            if (req.session['user']) {
                res.render('user/bougth');
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.showBuy = async (req, res) => {
            if (req.session["user"]) {
                let id = req.params.id;
                let productData = await this.productService.findById(id);
                res.render('user/buyNow', { product: productData });
            }
            else {
                res.redirect(301, '/login');
            }
        };
        this.productService = productSevice_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=productController.js.map