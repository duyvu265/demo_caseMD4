import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";
import {orderList} from "./orderList";
@Entity()
export class orderDetail {
    @PrimaryGeneratedColumn()
    id:number;
    @ManyToOne(() => orderList, (orderList) => orderList.orderId)
    orderId: orderList
    @ManyToOne(() => Product, (product) => product.orderDetailId)
   productId:orderDetail;
    @Column()
    quantity:number;

    @Column()
    priceCurren:number;

}
