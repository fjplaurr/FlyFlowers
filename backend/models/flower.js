const mongoose = require('mongoose');

const flowerSchema = new mongoose.Schema({
  title: String,
  longDescription: String,
  shortDescription: String,
  colors: [String],
  price: Number,
  occasions: [String],
  url: String,
  trending: Boolean,
  recommended: Boolean
})

module.exports = mongoose.model('Flower', flowerSchema);
