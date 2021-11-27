const { Schema, model } = require('mongoose');

const giftSchema = new Schema(
  {
    title: { type: String, required: true },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    category: Object,
  },
  { timestamps: true },
);

const giftModel = model('Gifts', giftSchema);

module.exports = giftModel;
