import { Category } from "./category";
import { orderDetail } from "./orderDetail";
export declare class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
    category: Category;
    orderDetailId: orderDetail[];
}
