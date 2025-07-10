const User = require("../Model/UserModel");
const OrdersModel = require('../Model/OrdersModel');
const Holding = require("../Model/HoldingModel");
const Position = require("../Model/PositionModel");
const bcrypt = require("bcrypt");
const createSecretToken = require("../Utils/SecretToken");
//app controllers
const Holdings = async (req, res) => {
  try {
    let holdings = await Holding.find({});
    res.status(200).json(holdings);
  } catch (err) {
    console.log(err);
  }
}

const Positions = async (req, res) => {
  try {
    let Positions = await Position.find({});
    res.json(Positions);
  } catch (err) {
    console.log(err);
  }

}

const OrderList = async (req, res) => {
  let { id } = req.body;
  try {
    if (id) {
      let currUser = await User.findById(id).populate('Orders');
      return res.json(currUser);
    }
    return res.status(400).json({ message: 'id is required' });
  } catch (err) {
    return res.status(404).json('user not found');
  }

}

// auth controllers
const Signup = async (req, res, next) => {
  const { email, password, username, createdAt } = req.body;
  try {
    if (username && email && password) {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
      }
      let hashPassword = await bcrypt.hash(password, 12);
      const user = await User.create({ email, hashPassword, username, createdAt });
      const token = createSecretToken(user._id);
      console.log("user info:",user);
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
    } else {
      return res.status(400).json({ message: "all field are required" });
    }
  } catch (error) {
    console.error(error);
  }

};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: 'Incorrect password or email' })
      }
      const auth = await bcrypt.compare(password, user.hashPassword);
      if (!auth) {
        return res.status(404).json({ message: 'Incorrect password or email' })
      }
      const token = createSecretToken(user._id);
      res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        path: "/",
      })
      res.status(201).json({
        message: "User logged in successfully", success: true, user,
        token,
      });
      next()
    } else {
      res.status(404).json({ message: "User not found" });
    }

  } catch (error) {
    return  res.status(400).json({message:error});
  }
}


const logout = async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
  });
  return res.status(200).json({ message: "Logged out successfully" });
}


//user controllers
const getUser = (req, res) => {
  res.json(req.user);
};

const dashboard = async (req, res) => {
  const user = req.user;
  const token = createSecretToken(user._id);
  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    path: "/",
  })
  return res.status(200).json({
    message: "Welcome to dashboard", user,
    token,
  });
}

const buyStock = async (req, res) => {
  try {
    let { name, price, qty, mode, userId } = req.body;
    if (name && price && qty && mode && userId) {
      let newUser = await User.findById(userId).populate('Orders');
      if (newUser) {
        if (newUser.Orders.length > 0) {
          for (order of newUser.Orders) {
            if (order.name == name) {
              order.qty += Number(qty);
              order.price += Number(price);
              await order.save();
              return res.status(201).json({message: 'you bought new stock which you own' });
            }
          }
        } else {
          let newOrder = new OrdersModel({
            name: name,
            price: price,
            qty: qty,
            mode: mode
          })
          newUser.Orders.push(newOrder);
          await newOrder.save();
          await newUser.save();
          return res.status(201).json({message: "stock buy success" });

        }
      }
    }else{
      return res.status(400).json({message:"all field are required"});
    }

  } catch (err) {
    return res.status(400).json({ message:err});
  }

}


const sellStock = async (req, res, next) => {
  try {
    let { qty, userId, stock } = req.body;
    if(!qty || !userId || !stock){
      return res.status(400).json({message:"all fields required"});
    }
    let user = await User.findById(userId).populate('Orders');
    if(!user){
      return res.status(404).json({message:"user not found"});
    }
    if (user.Orders.length > 0) {
      for (Order of user.Orders) {
        if (Order.name == stock) {
          if (Order.qty < qty) {
            return res.json({ message: `Your max limit to sell is <${Order.qty}` });
          }
          Order.qty -= Number(qty);
          if (Order.qty == 0) {
            user.Orders.pop(Order);
            await user.save();
          }
           await Order.save();
          return res.status(200).json({ qty: Order.qty, message: 'stock sell successfully' });
        }
      }
    }
    return res.status(404).json({ message: "you are not hold that stock"});
  } catch (err) {
    res.status(400).json({  message: err});
  }
}
module.exports = { Holdings, Positions, OrderList, Signup, Login, dashboard, logout, getUser, buyStock, sellStock };
