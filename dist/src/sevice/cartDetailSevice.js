"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orderList_1 = require("../entity/orderList");
const data_source_1 = require("../data-source");
const orderDetail_1 = require("../entity/orderDetail");
const product_1 = require("../entity/product");
class CartDetailSevice {
    constructor() {
        this.getAllProductInUser = async (idUser) => {
            let cartData = await this.orderDetailRepository.query(`select *
                                                               from order_detail od
                                                                        join order_list ol on ol.orderId = od.orderIdOrderId
                                                                        join product ON product.id = od.orderIdOrderId
                                                               where ol.userIdId = ${idUser}
                                                                 and status = 0`);
            return cartData;
        };
        this.findById = async (id) => {
            return (await this.cartRepository.query(`select *
                                                 from cart
                                                 where id = ${id};`))[0];
        };
        this.findOrderId = async (userId) => {
            let [orderId] = await this.cartRepository.query(`select *
                                                         from order_list
                                                         where userIdId = ${userId}
                                                           and status = 0
                                                         order by orderId DESC limit 1;`);
            return orderId.orderId;
        };
        this.findIdProduct = async (idProduct) => {
            let product = await this.productRepository.find({
                where: {
                    id: idProduct
                }
            });
            return product[0];
        };
        this.changeStatus = async (idProduct) => {
            await this.cartRepository.update({
                status: 1,
                where: {}
            });
        };
        this.cartRepository = data_source_1.AppDataSource.getRepository(orderList_1.orderList);
        this.orderDetailRepository = data_source_1.AppDataSource.getRepository(orderDetail_1.orderDetail);
        this.productRepository = data_source_1.AppDataSource.getRepository(product_1.Product);
    }
}
exports.default = new CartDetailSevice();
//# sourceMappingURL=cartDetailSevice.js.map