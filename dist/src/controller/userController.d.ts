import { Request, Response } from "express";
declare class userController {
    private userSevice;
    constructor();
    showFormSignUp: (req: Request, res: Response) => void;
    addUser: (req: Request, res: Response) => Promise<void>;
    showFormSignIn: (req: Request, res: Response) => void;
    login: (req: Request, res: Response) => Promise<void>;
    logout: (req: Request, res: Response) => void;
}
declare const _default: userController;
export default _default;
