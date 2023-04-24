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
        let product = await this.productRepositori.find({
                relations: {
                    category: true,
                },
                where: {
                    id: id
                }
            }
        )
        return product[0]


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
            where: {
                id: id
            }
        })
        console.log("delete ok")
    }
    findByName = async (name) => {
        let arrProduct = await this.productRepositori.find({name: {$regex: new RegExp(name, 'i')}})
        return arrProduct
    }

}

export default new ProductSevice();