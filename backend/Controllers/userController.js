const User = require("../Model/UserModel");
const OrdersModel=require('../Model/OrdersModel');
const Holding=require("../Model/HoldingModel");
const Position=require("../Model/PositionModel");
const bcrypt = require("bcrypt");
const createSecretToken = require("../Utils/SecretToken");
const Holdings=async(req,res)=>{
    try{
        let holdings= await Holding.find({});
        res.status(200).json(holdings);
    }catch(err){
        console.log(err);
    } 
}

const Positions=async(req,res)=>{
    try{
        let Positions= await Position.find({});
        res.json(Positions);
    }catch(err){
        console.log(err);
    }
    
}

const OrderList=async(req,res)=>{
    try{
    let{id}=req.body;
    let currUser= await User.findById(id).populate('Orders');
    return res.json(currUser);
    }catch(err){
        return res.status(404).json('user not found');
    }
    
}
const Signup = async (req, res,next) => {
  try {
    const { email, password, username, createdAt } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);
     res.cookie("token", token, {
      httpOnly: true,               
      secure: true,                
      sameSite: "None",         
      path: "/",    
     })
    res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
      token,
    });
  next();
  } catch (error) {
    console.error(error);
  }
  
};

const Login = async (req, res, next) => {
try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
      
    }
    const user = await User.findOne({ email });
     console.log(user);
    if(!user){  
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    console.log(auth);
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
      httpOnly: true,               
      secure: true,                
      sameSite: "None",         
      path: "/",    
     })
     res.status(201).json({ message: "User logged in successfully", success: true,user,
      token,});
     next()
  } catch (error) {
    console.error(error);
  }
}


const logout=async (req, res,next) => {
  res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "None",
  path: "/", 
});
  return res.status(200).json({ message: "Logged out successfully" });
}

const getUser = (req, res) => {
   res.json(req.user); 
};


const dashboard= async(req,res,next)=>{
    const user=req.user;
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
      httpOnly: true,               
      secure: true,                
      sameSite: "None",         
      path: "/",    
     })
     return res.json({ message: "Welcome to dashboard" ,user,
      token,});
}

const buyStock=async(req,res,next)=>{
  try{
  let {name,price,qty,mode,userId}=req.body;
  let newUser= await User.findById(userId).populate('Orders');
  if(newUser.Orders.length>0){
    for(order of newUser.Orders){
      if(order.name==name){
        order.qty+=Number(qty);
        order.price+=Number(price);
        await order.save();
        return res.json({msg:'you bought new stock which you own'});
      }
    }
  }
    let newOrder=new OrdersModel({
    name:name,
    price:price,
    qty:qty,
    mode:mode
   })
  newUser.Orders.push(newOrder);
  let OrderRes=await newOrder.save();
  let userRes=await newUser.save();
  return res.json({msg:"stock buy success"});
  }catch(err){
   return res.json({msg:"something went wrong"});
  }

}
//this is current

const sellStock=async(req,res,next)=>{
  try{
    let {qty,userId,stock}=req.body;
    let user= await User.findById(userId).populate('Orders');
    if(user.Orders.length>0){
      for(Order of user.Orders ){
      if(Order.name==stock){
         if(Order.qty<qty){
          return res.json({message:`Your max limit to sell is <${Order.qty}`});
         }
         Order.qty-=Number(qty); 
         if(Order.qty==0){
          user.Orders.pop(Order);
          await user.save();
         }
        const updatedStock=await Order.save();
        return res.status(200).json({qty:Order.qty, message:'stock sell successfully'});
      }
    }
  } 
  return res.status(404).json({msg:"not buy"});
  }catch(err){
     res.status(400).json({msg:'stock not bought'});
  }
}
module.exports = {Holdings,Positions,OrderList,Signup,Login,dashboard,logout,getUser,buyStock,sellStock};
