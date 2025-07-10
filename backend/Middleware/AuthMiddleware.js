require("dotenv").config();
const User = require("../Model/UserModel");
const jwt = require("jsonwebtoken");
const userVerification = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id).select("username email Orders");
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next(); 
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = userVerification;
