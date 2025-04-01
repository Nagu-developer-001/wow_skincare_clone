const mongoose = require("mongoose");


const Schema = mongoose.Schema;

categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        default:"A skin Science product!"
    },
});
const categoryModel = new mongoose.model("categoryModel",categorySchema);
module.exports = categoryModel;
