const {Holdings,Positions,OrderList,Signup,Login,dashboard,logout,getUser,buyStock,sellStock} = require("../Controllers/userController");
const router = require("express").Router();
const userVerification=require('../Middleware/AuthMiddleware');
//auth routes
router.post("/signup", Signup);
router.post('/login', Login)
router.get("/logout",userVerification,logout);
//user routes
router.post('/buyStock',userVerification,buyStock);
router.get('/dashboard',userVerification,dashboard);
router.get("/getuser",userVerification,getUser);
router.post("/sellStock",userVerification,sellStock);
//app route
router.get('/Holdings',Holdings);
router.get('/Positions',Positions);
router.post('/OrderList',OrderList);
module.exports = router;