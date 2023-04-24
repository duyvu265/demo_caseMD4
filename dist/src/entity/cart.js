"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("./product");
const user_1 = require("./user");
let Cart = class Cart {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    (0, typeorm_1.ManyToOne)(() => product_1.Product, (product) => product.category),
    __metadata("design:type", Array)
], Cart.prototype, "idProduct", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => user_1.User, (user) => user.idUser),
    __metadata("design:type", Array)
], Cart.prototype, "idUser", void 0);
Cart = __decorate([
    (0, typeorm_1.Entity)()
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map