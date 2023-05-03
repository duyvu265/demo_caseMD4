import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category";
import {orderDetail} from "./orderDetail";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    name: string;
    @Column()
    quantity: number;
    @Column()
    price: number;
    @Column({type: 'text'})
    image: string;
    @ManyToOne(()=>Category,(category)=>category.products)
    category:Category;
    @OneToMany(()=>orderDetail,(orderDetail)=>orderDetail.productId)
    orderDetailId:orderDetail[];

}

