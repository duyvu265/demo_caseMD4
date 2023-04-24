import {Router} from "express";
import productController from "../controller/productController";
import userController from "../controller/userController";
import adminController from "../controller/adminController";
const router = Router();
router.get('/index', productController.findAll);
router.get('/add', productController.showFormAdd);
router.post('/add', productController.addProduct);
router.get('/edit/:id', productController.showFormEdit);
router.post('/edit/:id', productController.editProduct);
router.get('/delete/:id', productController.deleteProductByAdmin);
router.get('/about', productController.showAbout);
router.get('/signup', userController.showFormSignUp)
router.post('/signup', userController.addUser)
router.post('/login', userController.login)
router.get('/login', userController.showFormSignIn)
router.get('/admin',adminController.showHomeAdmin)
router.get('/logout',userController.logout)
router.get('/cart',productController.showCart)
router.post('/addToCart',productController.addToCart)
// router.get('/search',userController)
router.get('/bougth',productController.showBougth)
router.get('/buynow/:id',productController.showBuy)


export default router;