require('dotenv').config();
const Mongoose=require('mongoose');
const express=require('express');
const Holding=require('./Model/HoldingModel');
const Position=require('./Model/PositionModel')
const app=express();
const url=process.env.MONGO_URL;
const PORT=process.env.PORT||3002;
async function main() {
    await Mongoose.connect(url);
}


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