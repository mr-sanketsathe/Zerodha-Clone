require('dotenv').config();
const Mongoose=require('mongoose');
const express=require('express');
const Holding=require('./Model/HoldingModel');
const Position=require('./Model/PositionModel')
const User=require('./Model/UserModel');
const OrdersModel=require('./Model/OrdersModel');
const cors=require('cors');
const cookieParser = require("cookie-parser");
const url=process.env.MONGO_URL;
const bcrypt=require('bcrypt');
const PORT=process.env.PORT||3002;
const authRoute = require("./Route/userRoute");
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
app.get("/DeleteUser",async (req,res)=>{
    let Res1= await User.deleteMany({});
    let Res2=await OrdersModel.deleteMany({});
    return res.json({user:Res1, Order:Res2});
})

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

app.use('/',authRoute);
