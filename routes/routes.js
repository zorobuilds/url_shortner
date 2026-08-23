const express= require("express")
const app=express()
const {CreateShortId,ReadById,Redirect,AaltyticData}=require("../controllers/controller")
const routes=express.Router()

routes.route("/")
.post(CreateShortId)

routes.route("/:id")
.get(Redirect)

routes.route("/analytic/:shortid")
.get(AaltyticData)



module.exports={routes}