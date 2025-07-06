const {Signup,Login,dashboard,logout,getUser,getOrders} = require("../Controllers/AuthController");
const router = require("express").Router();
const userVerification=require('../Middleware/AuthMiddleware');
router.post('/',userVerification)
router.post("/signup", Signup);
router.post('/login', Login)
router.post('/Order',getOrders);
router.get("/logout",logout);
router.get('/dashboard',userVerification,dashboard);
router.get("/getuser",userVerification,getUser);
module.exports = router;