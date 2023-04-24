import {Request, Response} from "express";
import userSevice from "../sevice/userSevice";

class userController {
    private userSevice;

    constructor() {
        this.userSevice = userSevice;
    }

    showFormSignUp = (req: Request, res: Response) => {
        res.render('user/signup')

    }
    addUser = async (req: Request, res: Response) => {
        let user = req.body;
            await this.userSevice.addNewUser(user);
            res.redirect(301, '/login');
    }
    showFormSignIn = (req: Request, res: Response) => {
        res.render('user/login')

    }
    login = async (req: Request, res: Response) => {
        let userData = req.body;
        let user = await this.userSevice.checkEmailAndPass(userData);
        if (!user) {
            res.redirect(301, '/login');
        } else {
            if (user.role === 0) {
                req.session['user'] = user;
                res.redirect(301, '/admin');
            } else {
                req.session['user'] = user;
                res.redirect(301, '/index');
            }
        }


    }
    logout = (req: Request, res: Response) => {
        req.session.destroy(function (err) {
            res.redirect(301, '/login');
            return res.status(200).json({status: 'success', session: 'cannot access session here'})
        })

    }


}

export default new userController();