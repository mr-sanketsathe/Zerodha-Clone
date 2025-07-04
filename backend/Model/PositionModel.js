const {model}=require('mongoose');
const PositionSchema=require('../Schemas/PositionSchema');
const Position=model('Position',PositionSchema);
module.exports=Position;