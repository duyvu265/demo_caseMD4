"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = require("../entity/category");
const data_source_1 = require("../data-source");
class CategorySevice {
    constructor() {
        this.getAll = async () => {
            let category = await this.categoryRepository.find();
            return category;
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_1.Category);
    }
}
exports.default = new CategorySevice();
//# sourceMappingURL=categorySevice.js.map