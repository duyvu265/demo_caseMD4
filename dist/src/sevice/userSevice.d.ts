declare class UserSevice {
    private userRepository;
    constructor();
    addNewUser: (user: any) => Promise<void>;
    findById: (id: any) => Promise<any>;
    findUser: (id: any) => Promise<any>;
    checkEmail: (email: any) => Promise<void>;
    checkEmailAndPass: (email: any, pass: any) => Promise<any>;
    changeG: () => Promise<void>;
}
declare const _default: UserSevice;
export default _default;
