
import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    idUser: string;
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
    role: number

}