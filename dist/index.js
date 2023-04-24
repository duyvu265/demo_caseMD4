"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const router_1 = __importDefault(require("./src/router/router"));
const session = require("express-session");
const data_source_1 = require("./src/data-source");
data_source_1.AppDataSource.initialize().then(() => {
    console.log("connect Database");
});
const app = (0, express_1.default)();
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 60000 }
}));
app.use(body_parser_1.default.json());
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('', router_1.default);
app.listen(8080, () => {
    console.log("sever ok");
});
//# sourceMappingURL=index.js.map