declare class UserSevice {
    private userRepository;
    constructor();
    add: (user: any) => Promise<void>;
    getAll: () => Promise<any>;
    findById: (id: any) => Promise<any>;
}
declare const _default: UserSevice;
export default _default;
