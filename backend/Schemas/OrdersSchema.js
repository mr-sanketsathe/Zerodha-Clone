const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  mode: { type: String, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
module.exports = orderSchema;