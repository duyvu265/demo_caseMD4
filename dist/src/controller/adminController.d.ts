import { Request, Response } from "express";
declare class adminController {
    private adminSevice;
    constructor();
    showHomeAdmin: (req: Request, res: Response) => Promise<void>;
}
declare const _default: adminController;
export default _default;
