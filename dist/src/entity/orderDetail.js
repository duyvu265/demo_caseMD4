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
exports.orderDetail = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("./product");
const orderList_1 = require("./orderList");
let orderDetail = class orderDetail {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], orderDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => orderList_1.orderList, (orderList) => orderList.orderId),
    __metadata("design:type", orderList_1.orderList)
], orderDetail.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_1.Product, (product) => product.orderDetailId),
    __metadata("design:type", orderDetail)
], orderDetail.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], orderDetail.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], orderDetail.prototype, "priceCurren", void 0);
orderDetail = __decorate([
    (0, typeorm_1.Entity)()
], orderDetail);
exports.orderDetail = orderDetail;
//# sourceMappingURL=orderDetail.js.map