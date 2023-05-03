import {Request, Response} from "express";
import ProductSevice from "../sevice/productSevice";
import categorySevice from "../sevice/categorySevice";
import userSevice from "../sevice/userSevice";
import cartSevice from "../sevice/cartDetailSevice";
import {User} from "../entity/user";
import {orderDetail} from "../entity/orderDetail";
import {AppDataSource} from "../data-source";
import {orderList} from "../entity/orderList";


class ProductController {
    private cartSevice;
    private productService;
    private orderDetail;
    private orderList;

    constructor() {
        this.orderList = AppDataSource.getRepository(orderList)
        this.productService = ProductSevice;
        this.orderDetail = AppDataSource.getRepository(orderDetail)
    }

    findAll = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user'].id;

            let user: User = await userSevice.findById(id)
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
            let id = req.session['user'].id;
            let user: User = await userSevice.findUser(id);
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
            let id = req.session['user'].id;
            let user: User = await userSevice.findUser(id);
            let idProduct = req.params.id
            if (user['role'] === 0) {
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
            let id = req.session['user'].id
            let user: User = await userSevice.findUser(id)
            let idProduct = req.params.id
            if (user.role === 0) {

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
            let id = req.session['user'].id
            let user: User = await userSevice.findUser(id);
            let idProduct = parseInt(req.params.id);

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
            let idUser = req.session['user'].id;
            let listDataProductInCart = await cartSevice.getAllProductInUser(idUser);
            let totalPrice = 0;
            listDataProductInCart.forEach(item => {
                totalPrice += item.priceCurren
            })


            res.render('user/cart', {cartList: listDataProductInCart, totalPrice: totalPrice});

        } else {
            res.redirect(301, '/login')
        }

    }
    addToCart = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let idUser = req.session['user'].id;
            let {idProduct} = req.body;
            let orderId: number = await cartSevice.findOrderId(idUser);
            if (!orderId) {
                orderId = await cartSevice.cartRepository.save({userId: idUser})
            }
            let product = await cartSevice.findIdProduct(idProduct);
            let currenPrice = product.price;
            await this.orderDetail.save({
                quantity: 1,
                priceCurren: currenPrice,
                orderId: orderId,
                productId: product
            })
        }
    }
    search = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let listProduct = await this.productService.findByName(req.body);

        }
    }
    showBougth = async (req: Request, res: Response) => {
        if (req.session['user']) {
            // await this.orderList.changeStatus(idProduct);


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
    deleteProductByUser = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let idUser = req.session['user'].id;
            let {idProduct} = req.body;
            let orderId: number = await cartSevice.findOrderId(idUser);
            let product = await cartSevice.findIdProduct(idProduct);
            let currenPrice = product.price;
            await this.orderDetail.delete({
                quantity: 1,
                priceCurren: currenPrice,
                orderId: orderId,
                productId: product
            })
        }
        else {
            res.redirect(301, '/login')
        }


    }

}

export default new ProductController();