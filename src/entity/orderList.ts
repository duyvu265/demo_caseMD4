import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {User} from "./user";
import {orderDetail} from "./orderDetail";


@Entity()
export class orderList {
    @PrimaryGeneratedColumn()
    orderId: number;

    @Column({default: () => "CURRENT_TIMESTAMP"})
    orderTime: Date;

    @Column( {
        name:'cost',
        type:'float',
        default:0
    })
    cost: number;
    @Column({
        name: 'status',
        type: 'boolean',
        default: false,
    })
    status: boolean;

    @ManyToOne(() => User, (user) => user.order)
    userId: User;

    @OneToMany(() => orderDetail, (orderDetail) => orderDetail.orderId)
    orderDetail:orderDetail[] ;

    @Column({
        name: 'quantity',
        type: 'int',
        default: 1,
    })
    quantity:
        number;

}
