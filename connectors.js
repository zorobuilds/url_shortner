const Mongodb=require("mongoose")

function Startdb(url){
    Mongodb.connect(url)
    .then(()=>{
        console.log('Mongo has started')
    })
}

module.exports={Startdb}