require('dotenv').config()
const bodyParser = require('body-parser');
const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const rooms =require('./models/rooms')

const app=express();
app.use(bodyParser.json())
app.use(cors())

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  })
  .catch((e)=>{
      console.log(e);
      console.log("DB NOT CONNECTED SUCCESFULLY");
  });

  app.get("/getRooms",(req,res)=>{
    rooms.find().exec((err,roomNames)=>{
        if(err){
            return res.json(err)
        }
        res.json(roomNames)
    })
  })
  app.post('/createRooms',(req,res)=>{
      let roomname=new rooms(req.body)
      roomname.save((err,roomName)=>{
        if(err){
            return res.json({err})
        }
        return res.json(roomName)
      })
  })

app.listen(process.env.PORT,(req,res)=>{
    console.log('app is up and running')
})