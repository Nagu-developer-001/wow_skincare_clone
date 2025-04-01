const mongoose = require("mongoose");
const category = require("./category.js");

const Schema = mongoose.Schema;

productSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
        min:1
    },
    stock:{
        type:Number,
        required:true,
        min:0
    },ingredients:{
        type:[String],
        required:true
    },
    categories:{
            type:Schema.Types.ObjectId,
            ref:"categoryModel"
    },
    image:{
        type:String,
        default:"https://t4.ftcdn.net/jpg/02/94/36/99/360_F_294369904_vBB6EBtlApUF2I0MX7tDm5diGrtbLUE6.jpg"
    }
}    
);
const ProductModel = new mongoose.model("ProductModel",productSchema);
module.exports = ;