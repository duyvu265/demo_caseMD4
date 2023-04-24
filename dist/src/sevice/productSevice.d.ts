declare class ProductSevice {
    private productRepositori;
    constructor();
    getAll: () => Promise<any>;
    add: (product: any) => Promise<void>;
    findByIdProduct: (id: any) => Promise<any>;
    edit: (id: any, data: any) => Promise<void>;
    deleteProduct: (id: any) => Promise<void>;
    findByName: (name: any) => Promise<any>;
}
declare const _default: ProductSevice;
export default _default;
