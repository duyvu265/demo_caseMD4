import {User} from "../entity/user";
import {AppDataSource} from "../data-source";


class UserSevice {
    private  userRepository

    constructor() {
        this.userRepository=AppDataSource.getRepository(User)
    }

    addNewUser = async (user) => {
        console.log('BF DOne')
        await this.userRepository.save(user);
        console.log('DONE')

    }
    findById = async (id) => {
        let arrUser = await this.userRepository.find({_id: id})
        return arrUser[0];


    }
    findUser = async (id) => {
        let arrUser = await this.userRepository.find({_id: id})
        return arrUser[0];
    }
    checkEmail = async (email) => {
        let useremail = await this.userRepository.query(`select user.email from user`)
        useremail.indexOf(email)
    }
    checkEmailAndPass = async (userData) => {
        console.log(" da check")
        let user = await this.userRepository.find({email: userData.email, password: userData.password})
        return user[0]
    }

}

export default new UserSevice();