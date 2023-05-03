declare class CartDetailSevice {
    cartRepository: any;
    private orderDetailRepository;
    private productRepository;
    constructor();
    getAllProductInUser: (idUser: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    findOrderId: (userId: any) => Promise<any>;
    findIdProduct: (idProduct: any) => Promise<any>;
    changeStatus: (idProduct: any) => Promise<void>;
}
declare const _default: CartDetailSevice;
export default _default;
