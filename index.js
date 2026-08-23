const express=require("express")
const app=express()
const mongoDb=require("mongoose")
const {Startdb}=require("./connectors")
const {routes}=require("./routes/routes")

Startdb("mongodb://127.0.0.1:27017/url")
app.use(express.json());

app.use("/url",routes)

app.listen("8001 ", (err,data)=>{console.log('server has started  ')})