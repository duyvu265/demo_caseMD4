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
exports.orderList = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./user");
const orderDetail_1 = require("./orderDetail");
let orderList = class orderList {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], orderList.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: () => "CURRENT_TIMESTAMP" }),
    __metadata("design:type", Date)
], orderList.prototype, "orderTime", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cost',
        type: 'float',
        default: 0
    }),
    __metadata("design:type", Number)
], orderList.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'status',
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], orderList.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.order),
    __metadata("design:type", user_1.User)
], orderList.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => orderDetail_1.orderDetail, (orderDetail) => orderDetail.orderId),
    __metadata("design:type", Array)
], orderList.prototype, "orderDetail", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'quantity',
        type: 'int',
        default: 1,
    }),
    __metadata("design:type", Number)
], orderList.prototype, "quantity", void 0);
orderList = __decorate([
    (0, typeorm_1.Entity)()
], orderList);
exports.orderList = orderList;
//# sourceMappingURL=orderList.js.map