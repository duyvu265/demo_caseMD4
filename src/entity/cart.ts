import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {Product} from "./product";
import {User} from "./user";



@Entity()
export class Cart {
    @PrimaryGeneratedColumn()

    @ManyToOne(()=>Product,(product)=>product.category)
    idProduct:Product[]
    @OneToMany(()=>User,(user)=>user.idUser)
    idUser:User[]
}
