const { Schema, model } = require('mongoose');

const OrderSchema = new Schema({
  order: String,
  user: { type: Schema.Types.ObjectId, ref: 'user' },
  items: [{ type: Schema.Types.ObjectId, ref: 'gifts' }],
});

const orderModel = model('order', OrderSchema);

module.exports = orderModel;
