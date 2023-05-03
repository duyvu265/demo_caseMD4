import { User } from "./user";
import { orderDetail } from "./orderDetail";
export declare class orderList {
    orderId: number;
    orderTime: Date;
    cost: number;
    status: boolean;
    userId: User;
    orderDetail: orderDetail[];
    quantity: number;
}
