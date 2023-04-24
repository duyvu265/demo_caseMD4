import {Request, Response} from "express";
import categorySevice from "../sevice/categorySevice";

class CategoryContrller {
    private categorySevice;

    constructor() {
        this.categorySevice = categorySevice;
    }

    findAllCategory = async (req: Request, res: Response) => {
        let listCategory = await categorySevice.getAll();

        res.render('product/add', {categoryList: listCategory})
    }


}

export default new CategoryContrller();