import { Request, Response } from "express";
declare class ProductController {
    private cartSevice;
    private productService;
    constructor();
    findAll: (req: Request, res: Response) => Promise<void>;
    showFormAdd: (req: Request, res: Response) => Promise<void>;
    addProduct: (req: Request, res: Response) => void;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    editProduct: (req: Request, res: Response) => Promise<void>;
    deleteProductByAdmin: (req: Request, res: Response) => Promise<void>;
    showAbout: (req: Request, res: Response) => Promise<void>;
    showCart: (req: Request, res: Response) => Promise<void>;
    addToCart: (req: Request, res: Response) => Promise<void>;
    search: (req: Request, res: Response) => Promise<void>;
    showBougth: (req: Request, res: Response) => Promise<void>;
    showBuy: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
