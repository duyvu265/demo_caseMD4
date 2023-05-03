import {orderList} from "../entity/orderList";
import {AppDataSource} from "../data-source";
import {orderDetail} from "../entity/orderDetail";
import {Product} from "../entity/product";

class CartDetailSevice {
    public cartRepository;
    private orderDetailRepository;
    private productRepository;

    constructor() {
        this.cartRepository = AppDataSource.getRepository(orderList);
        this.orderDetailRepository = AppDataSource.getRepository(orderDetail)
        this.productRepository = AppDataSource.getRepository(Product)
    }

    getAllProductInUser = async (idUser) => {
        let cartData = await this.orderDetailRepository.query(`select *
                                                               from order_detail od
                                                                        join order_list ol on ol.orderId = od.orderIdOrderId
                                                                        join product ON product.id = od.orderIdOrderId
                                                               where ol.userIdId = ${idUser}
                                                                 and status = 0`)
        return cartData;
    }


    findById = async (id) => {
        // let [cart] = await this.cartRepository.query(`select *from cart where id=${id};`)
        return (await this.cartRepository.query(`select *
                                                 from cart
                                                 where id = ${id};`))[0]
    }


    findOrderId = async (userId) => {
        let [orderId] = await this.cartRepository.query(`select *
                                                         from order_list
                                                         where userIdId = ${userId}
                                                           and status = 0
                                                         order by orderId DESC limit 1;`);
        return orderId.orderId
    }

    findIdProduct = async (idProduct) => {
        let product = await this.productRepository.find({
            where: {
                id: idProduct
            }
        })
        return product[0]
    }
    changeStatus= async (idProduct)=>{
        await  this.cartRepository.update({
            status:1,
            where:{

            }
        })

    }


}

export default new CartDetailSevice();