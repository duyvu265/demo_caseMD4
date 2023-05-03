import {Product} from "../entity/product";
import {AppDataSource} from "../data-source";

class ProductSevice {
    private productRepositori;

    constructor() {
        this.productRepositori = AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let product = await this.productRepositori.find({
                relations: {
                    category: true
                }
            }
        )
        return product;
    }
    add = async (product) => {
        await this.productRepositori.save(product)
    }
    findByIdProduct = async (id) => {
        let product = await this.productRepositori.query(`select * from order_detail od join order_list ol on ol.orderId = od.orderIdOrderId 
                join product ON product.id=od.orderIdOrderId
                where ol.userIdId=${id} and status=0`
        )
        return product
    }
    edit = async (id, data) => {
        await this.productRepositori.update({id: id}, {
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            image: data.image
        })
    }
    deleteProduct = async (id) => {
        await this.productRepositori.delete({
                id: id
        })
        console.log("delete ok")
    }
    findByName = async (name) => {
        let arrProduct = await this.productRepositori.find({name: {$regex: new RegExp(name, 'i')}})
        return arrProduct
    }

}

export default new ProductSevice();