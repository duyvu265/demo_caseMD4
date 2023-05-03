
import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";

import {orderList} from "./orderList";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({type: 'varchar', length: 255})
    fullName: string;
    @Column()
    email: string;
    @Column()
    password: string;
    @Column({type: 'text'})
    phoneNumber: number
    @Column()
    address: string;
    @Column({
        name:'role',
        type: 'int',
        default: 1,
    })
    role: number;
    @OneToMany(()=>orderList,(orderList)=>orderList.userId)
    order:orderList[]

}