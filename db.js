const mongoose=require("mongoose");

var monoURL= 'mongodb+srv://aelish:aelish2000@cluster0.dhzho.mongodb.net/ApniDukaan'

mongoose.connect(monoURL, {useUnifiedTopology:true , useNewUrlParser:true})

var db=mongoose.connection

db.on('connected', ()=>{
    console.log(`database connected successfully`);
})

db.on('error',()=>{
    console.log(`database connection failed`)
})

console.log("connected")

module.exports=mongoose