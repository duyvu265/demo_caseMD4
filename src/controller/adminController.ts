import {Request, Response} from "express";
import adminSevice from "../sevice/adminSevice";
import userSevice from "../sevice/userSevice";
import {User} from "../entity/user";
import productSevice from "../sevice/productSevice";


class adminController {
    private adminSevice;

    constructor() {
        this.adminSevice = adminSevice;
    }

    showHomeAdmin = async (req: Request, res: Response) => {
        if (req.session['user']) {
            let id = req.session['user'].id
            let user: User = await userSevice.findUser(id)
            if (user.role === 0) {
                let listProducts = await productSevice.getAll();

                res.render('admin/admin', {products: listProducts})
            } else {
                res.redirect(301, '/login')
            }
        } else {
            res.redirect(301, '/login')
        }

    }


}

export default new adminController();