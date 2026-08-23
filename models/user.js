const mongoose=require("mongoose")

const Urlschema=new mongoose.Schema({
    GivenUrl:{
        type:String,
        required:true,
        unique:true,
    },
    ShortUrl:{
        type:String,
        required:true,

    },
    visitHistory:[{timestamp:{type:Number}}],

},{timestamps:true})

const Model=mongoose.model("short",Urlschema)


module.exports={Model}; 






