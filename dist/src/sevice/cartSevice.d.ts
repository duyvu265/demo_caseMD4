declare class CartSevice {
    private categoryRepository;
    constructor();
    getAllProductInUser: (idUser: any) => Promise<any>;
    add: (idUser: any, idProduct: any) => Promise<any>;
}
declare const _default: CartSevice;
export default _default;
