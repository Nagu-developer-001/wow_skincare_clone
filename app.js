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
    console.log(categori);
    res.render("filter.ejs");
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

