const User = require("../Model/UserModel");
const OrdersModel=require('../Model/OrdersModel');
const createSecretToken = require("../Utils/SecretToken");
const bcrypt = require("bcrypt");

const Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt });
    const token = createSecretToken(user._id);

    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: true,
    });
    return res.status(201).json({
      message: "User signed in successfully",
      success: true,
      user,
    });
  
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
  
};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if(!email || !password ){
      return res.json({message:'All fields are required'})
    }
    const user = await User.findOne({ email });
    if(!user){
      return res.json({message:'Incorrect password or email' }) 
    }
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      return res.json({message:'Incorrect password or email' }) 
    }
     const token = createSecretToken(user._id);
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
     });
     return res.status(201).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error(error);
  }
}
const logout=async (req, res,next) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
  });
  return res.status(200).json({ message: "Logged out successfully" });
}

const getUser = (req, res) => {
   res.json(req.user); 
};


const dashboard= async(req,res,next)=>{
     return res.json({ message: "Welcome to dashboard" });
}

const getOrders=async(req,res,next)=>{
  try{
  let {name,price,qty,mode,userId}=req.body;
   let newOrder=new OrdersModel({
    name:name,
    price:price,
    qty:qty,
    mode:mode
   })
  let newUser= await User.findById(userId);
  newUser.Orders.push(newOrder);
  let OrderRes=await newOrder.save();
  let userRes=await newUser.save();
   return res.status(200).json(`stock ${mode}`);
  }catch(err){
   return res.status(404).json('something went wrong');
  }
  

}
module.exports = {Signup,Login,dashboard,logout,getUser,getOrders};
