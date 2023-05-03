import { orderList } from "./orderList";
export declare class User {
    id: number;
    fullName: string;
    email: string;
    password: string;
    phoneNumber: number;
    address: string;
    role: number;
    order: orderList[];
}
