const express=require("express")

const ShortId=require("short-id")
const {Model}=require("../models/user")


ShortId.configure({
    length: 6,          
    algorithm: 'sha1',   
    salt: Math.random   
});

async function CreateShortId(req,res){
    const NewShortUrl=ShortId.generate();
    const body=req.body.url;
    console.log(body)
    if(!body){return res.json({"error":"url is required"})}
    
    const NewUrl=await Model.create({
        GivenUrl:body,
        ShortUrl:NewShortUrl,
        visitHistory:[],

    })
     return res.render("home",{
        id:NewShortUrl
    })
    // return res.status(201).send({
    //     status :"succesfully created new url",
    //     newurl:NewShortUrl,
    // })


}

async function ReadById(req,res){
    console.log('ready by id')
    const id=req.params.id;
    const Url=await Model.findById(id)
    return res.json(Url)
} 

async function Redirect(req,res){
    console.log('redirect by id')
    const Shorturl=req.params.id;
    const container=await Model.findOneAndUpdate({
        ShortUrl: Shorturl,
    },
    {
        $push:{
            visitHistory:{
                timestamp:Date.now(),
            }
        }
    }
    
   
)
   
    return res.redirect(container.GivenUrl)

}

async function AaltyticData(req,res){
    const Short=req.params.shortid
    const Container=await Model.findOne({ShortUrl:Short})
    //return res.send(Container)
    return res.json({Timesclicked:Container.visitHistory.length,
        WholeTimeline:Container.visitHistory
    })
}

module.exports={CreateShortId,ReadById,Redirect,AaltyticData}