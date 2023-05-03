import {User} from "../entity/user";
import {AppDataSource} from "../data-source";
import cartSevice from "./cartDetailSevice";



class UserSevice {
    private  userRepository

    constructor() {
        this.userRepository=AppDataSource.getRepository(User)
    }
     addNewUser = async (user) => {
        let newUser = new User();
        newUser.fullName = user.fullName;
        newUser.email = user.email;
        newUser.password = user.password;
        newUser.address = user.address;
        newUser.phoneNumber = user.phoneNumber;
         console.log(newUser)
        await this.userRepository.save(newUser);

    }
        findById = async (id) => {
        let arrUser = await this.userRepository.query(`select *from user where id=${id};`)
        return arrUser[0];


    }
    findUser = async (id) => {
        let arrUser = await this.userRepository.query(`select *from user where id=${id};`)
        return arrUser[0];

    }
    checkEmail = async (email) => {
        let useremail = await this.userRepository.query(`select user.email from user`)
        useremail.indexOf(email)
    }
    checkEmailAndPass = async (email,pass) => {
        let user = await this.userRepository.query(`select * from user where email="${email}" 
                    and password="${pass}"`)
        return user[0]

    }

    changeG = async () => {
        let [user] = await this.userRepository.find({
            where: {
                id: 1
            },
            relations: {
                carts: true,
            },
        })
        console.log("changeG:", user)
        user.fullName = "TTTT";
        // user.carts =
        let cart = await cartSevice.findById(1);
        console.log(cart);
        // user.carts.push(cart);
        // console.log(user)
        this.userRepository.save(user)

    }
}

export default new UserSevice();