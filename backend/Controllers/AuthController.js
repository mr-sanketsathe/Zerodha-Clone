const User = require("../Model/UserModel");
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
    console.log(user);
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
module.exports = {Signup,Login,dashboard,logout,getUser};
