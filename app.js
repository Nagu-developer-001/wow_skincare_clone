const express = require("express");
const app = express();
const port = 5050;
const path = require("path");
const methodOverload = require("method-override");
const ejsMate = require("ejs-mate");
// //TODO FOR EJS TEMPLATING 
app.engine("ejs",ejsMate);
app.set("view engine","ejs");
// TODO SETTING VIEWS AND PUBLIC FOLDER AS DEFAULT THAT RUN EVERY TIME ON WEB
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"/public")));
// TODO USED TO CONVERT JOSN DATA
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// TODO BY-DEFAULT HTML OR EJS SUPPORT GET AND POST REQUEST ONLY
app.use(methodOverload("_method"));





const flash = require("connect-flash");

const session = require("express-session");


const sessionOptions = 
    {secret:"set_your_secret",
    resave:false,
    saveUninitialized:true,
    cookie:{
        expires:Date.now() +7*24*60*60*1000,//TODO 7day each day 24 hrs and each hrs has 60 mins and each min 60 sec - 1000 sec
        maxAge:7*24*60*60*1000,
        httpOnly:true,
    }
};


app.use(session(sessionOptions));
app.use(flash());













const mongoose = require('mongoose');
main().then((res)=>{
    console.log("Connected to DB Successfully!");
}).catch((err) =>{
    console.log(err)
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wow_skinscience');
}

const categoryModel = require('./models/category.js');
const ProductModel = require('./models/products.js');


app.get("/skin",(req,res)=>{
    const images = [
        "/images/0(14).jpg",
        "/images/1(14).jpg",
        "/images/2(12).jpg",
    ];
    const imgIcn = [
        "/images/th.jpeg",
        "/images/th (1).jpeg",
        "/images/th (2).jpeg",
        "/images/th (4).jpeg",
    ]
    console.log(images);
    res.render("index.ejs",{images,imgIcn});
});
app.get("/skin/signup",(req,res)=>{
    res.send(`<h2>Login page</h2>`);
});
app.get("/skin/carting",(req,res)=>{
    res.send(`<b>Carting get METHOD</b>`);
});


app.get('/skin/:category', async(req, res) => {
    const categori = req.params.category;
    let categoriesList = await categoryModel.findOne({name:categori});
    //console.log(categori);
    if(categoriesList){
        let product = await ProductModel.find({categories:categoriesList._id}).populate("categories");
    console.log(product);
    res.render("filter.ejs",{product});
    }else{
        res.send("not found such product");
    }
    
    // if(products[0].categories.name === "categori"){
    //     res.render('filter.ejs',{})
    // }
    //res.send(categori);
    //req.session.catFiler = categori;
    //console.log(category);
    // let categories = {
    //     Trending:"hhegih",
    //     rooms:"kshuff",
    //     Iconiccities:"sdfgb",
    //     Mountains:"cvbn",
    //     Castles:"qwert",
    //     Religion:"cvb",
    //     Camping:"vbn ",
    //     Farms:"xcfvgbh",
    //     Arctic:"khsdgdv",
    //     Waterfall:"hjsbf"
    //};
});

app.listen(port,(req,res)=>{
    console.log(`The server has been started at port - ${port}`);
});

