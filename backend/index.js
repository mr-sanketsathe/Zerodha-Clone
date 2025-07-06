require('dotenv').config();
const Mongoose=require('mongoose');
const express=require('express');
const Holding=require('./Model/HoldingModel');
const Position=require('./Model/PositionModel')
const User=require('./Model/UserModel');
const cors=require('cors');
const cookieParser = require("cookie-parser");
const url=process.env.MONGO_URL;
const bcrypt=require('bcrypt');
const PORT=process.env.PORT||3002;
const authRoute = require("./Route/AuthRoute");
const app=express();
async function main() {
    await Mongoose.connect(url);
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);
app.get('/Holdings',async(req,res)=>{
    try{
        let holdings= await Holding.find({});
        res.json(holdings);
    }catch(err){
        console.log(err);
    }
    
})
app.get('/Positions',async(req,res)=>{
    try{
        let Positions= await Position.find({});
        res.json(Positions);
    }catch(err){
        console.log(err);
    }
    
})
app.post('/OrderList',async(req,res)=>{
    try{
    let{id}=req.body;
    let currUser= await User.findById(id).populate('Orders');
    return res.json(currUser);
    }catch(err){
        return res.status(404).json('user not found');
    }
    
})
app.use('/',authRoute);
app.listen(PORT,()=>{
    console.log('app started on',PORT);
    main()
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.log('something went wrong',err);
    })
})

