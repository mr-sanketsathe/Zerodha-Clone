const mongoose=require('mongoose');
const HoldingSchema=require('../Schemas/HoldingSchema');
const Holding=mongoose.model('Holding',HoldingSchema);
module.exports=Holding;