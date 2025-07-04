require('dotenv').config();
const Mongoose=require('mongoose');
const express=require('express');
const Holding=require('./Model/HoldingModel');
const Position=require('./Model/PositionModel')
const cors=require('cors');
const BodyParser=require("body-parser");
const url=process.env.MONGO_URL;
const PORT=process.env.PORT||3002;
const app=express();
app.use(cors());
app.use(BodyParser.json());
async function main() {
    await Mongoose.connect(url);
}
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

app.listen(PORT,()=>{
    console.log('app started');
    main()
    .then(()=>{
        console.log('db connected');
    })
    .catch((err)=>{
        console.log('something went wrong',err);
    })
})