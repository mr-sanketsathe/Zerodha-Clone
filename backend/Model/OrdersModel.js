const {model}=require('mongoose');
const OrdersSchema=require('../Schemas/OrdersSchema');
const OrdersModel=model('Order',OrdersSchema);
module.exports= OrdersModel;