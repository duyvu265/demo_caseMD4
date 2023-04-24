import {Request, Response} from "express";
import ProductSevice from "../sevice/productSevice";
import categorySevice from "../sevice/categorySevice";
import userSevice from "../sevice/userSevice";
import cartSevice from "../sevice/cartSevice";
import {User} from "../entity/user";
import {Cart} from "../entity/cart";


class ProductController {
    private cartSevice;
    private productService;

    constructor() {
        this.productService = ProductSevice;
    }

    findAll = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user']._id
            let user: User = await userSevice.findUser(id)
            if (user.role === 1) {
                let listProduct = await ProductSevice.getAll();
                res.render('index', {products: listProduct})
            } else {
                res.redirect(301, '/login');
            }

        } else {
            res.redirect(301, '/login');
        }

    }
    showFormAdd = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user']._id;
            let user: User = await userSevice.findUser(id)
            if (user.role === 0) {
                let listCategory = await categorySevice.getAll();
                res.render('product/add', {categoryList: listCategory})
            } else {
                res.redirect(301, '/login');
            }
        } else {
            res.redirect(301, '/login');
        }

    }
    addProduct = (req: Request, res: Response) => {
        if (req.session['user']) {

            this.productService.add(req.body);

            res.redirect(301, '/admin');
        } else {
            res.redirect(301, '/login');
        }
    }
    showFormEdit = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user']._id;
            let user: User = await userSevice.findUser(id)
            let idProduct=req.params.id
            if (user.role === 0) {
                let data = await this.productService.findByIdProduct(idProduct);
                let listCategory = await categorySevice.getAll()
                res.render('product/edit',
                    {
                        name: data.name,
                        price: data.price,
                        quantity: data.quantity,
                        image: data.image,
                        categoryList: listCategory
                    }
                );
            }
        } else {
            res.redirect(301, '/login');
        }


    }
    editProduct = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user']._id
            let user: User = await userSevice.findUser(id)
            let idProduct=req.params.id
            if (user.role===0) {

                await this.productService.edit(idProduct, req.body);

                res.redirect(301, '/admin')
            } else {
                res.redirect(301, '/login')
            }

        } else {
            res.redirect(301, '/login')
        }

    }
    deleteProductByAdmin = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user']._id
            let user: User = await userSevice.findUser(id);
            let idProduct= req.params.id;
            console.log(idProduct)
            if (user.role === 0) {
                await this.productService.deleteProduct(idProduct);
                res.redirect(301, '/admin')
            } else {
                res.redirect(301, '/login')
            }

        } else {
            res.redirect(301, '/login')
        }


    }
    showAbout = async (req: Request, res: Response) => {
        res.render('about')
    }
    showCart = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let idUser = req.session['user']._id;
            let listDataProductInCart: Array<Cart> = await cartSevice.getAllProductInUser(idUser);
                let totalPrice:number ;
                listDataProductInCart.forEach(item => {
                    totalPrice += item['IdProduct'].price
                })
            res.render('user/cart', {cartList: listDataProductInCart, totalPrice: totalPrice});

        } else {
            res.redirect(301, '/login')
        }

    }
    addToCart = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let idUser = req.session['user']._id;
            let {idProduct} = req.body;
            await cartSevice.add(idUser, idProduct)
        }
    }
    search = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let listProduct = await this.productService.findByName(req.body);

        }
    }
    showBougth = async (req: Request, res: Response) => {
        if (req.session['user']) {
            res.render('user/bougth')
        } else {
            res.redirect(301, '/login')
        }
    }
    showBuy = async (req: Request, res: Response) => {
        if (req.session["user"]) {
            let id = req.params.id;
            let productData = await this.productService.findById(id)
            res.render('user/buyNow', {product: productData})
        } else {
            res.redirect(301, '/login')
        }
    }


}

export default new ProductController();