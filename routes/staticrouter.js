const express=require("express")
const {Model}=require("../models/user")

const staticRouter=express.Router()
staticRouter.get("/",async (req,res)=>{
    const Allurl=await Model.find({})
    return res.render("home",{
        Urls:Allurl
    })

})

module.exports={staticRouter}
