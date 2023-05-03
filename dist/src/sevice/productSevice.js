"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entity/product");
const data_source_1 = require("../data-source");
class ProductSevice {
    constructor() {
        this.getAll = async () => {
            let product = await this.productRepositori.find({
                relations: {
                    category: true
                }
            });
            return product;
        };
        this.add = async (product) => {
            await this.productRepositori.save(product);
        };
        this.findByIdProduct = async (id) => {
            let product = await this.productRepositori.query(`select * from order_detail od join order_list ol on ol.orderId = od.orderIdOrderId 
                join product ON product.id=od.orderIdOrderId
                where ol.userIdId=${id} and status=0`);
            return product;
        };
        this.edit = async (id, data) => {
            await this.productRepositori.update({ id: id }, {
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                image: data.image
            });
        };
        this.deleteProduct = async (id) => {
            await this.productRepositori.delete({
                id: id
            });
            console.log("delete ok");
        };
        this.findByName = async (name) => {
            let arrProduct = await this.productRepositori.find({ name: { $regex: new RegExp(name, 'i') } });
            return arrProduct;
        };
        this.productRepositori = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new ProductSevice();
//# sourceMappingURL=productSevice.js.map