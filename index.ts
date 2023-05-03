import express from 'express';
import bodyParser from "body-parser";
import router from "./src/router/router";
import session = require('express-session');
import {AppDataSource} from "./src/data-source";
import userSevice from "./src/sevice/userSevice";
AppDataSource.initialize().then(()=>{
    console.log("connect Database");
    // userSevice.changeG()
})

const app = express();
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: {maxAge: 60000}
}));


app.use(bodyParser.json());
app.set('views', './src/view');
app.set('view engine', 'ejs');
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use('', router)


app.listen(8080, () => {
    console.log("sever ok")
});


