const mongoose=require('mongoose')

const roomsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    }
    
},{timestamps:true})

module.exports=mongoose.model("rooms",roomsSchema)