const express=require("express")
const app=express()
const path=require("path")


const {Startdb}=require("./connectors") 
const {routes}=require("./routes/routes")
const {staticRouter}=require("./routes/staticrouter")

Startdb("mongodb://127.0.0.1:27017/url")
app.use(express.json());
app.use(express.urlencoded({extended:false})) 
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))
// app.get("/render",async (req,res)=>{
//     const allurl=await Model.find({});
//     return res.render("home",{
//         urls:allurl,
//     })
// })
app.use("/url",routes)
app.use("/",staticRouter)

app.listen("8001 ", (err,data)=>{console.log('server has started  ')})