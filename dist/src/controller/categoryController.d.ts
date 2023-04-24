import { Request, Response } from "express";
declare class CategoryContrller {
    private categorySevice;
    constructor();
    findAllCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryContrller;
export default _default;
