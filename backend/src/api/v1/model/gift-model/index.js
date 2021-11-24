const { Schema, model } = require('mongoose');

const giftSchema = new Schema(
  {
    title: String,
    description: String,
    price: Number,
    img: String,
    category: Object,
  },
  { timestamps: true },
);

const giftModel = model('Gifts', giftSchema);

module.exports = giftModel;
