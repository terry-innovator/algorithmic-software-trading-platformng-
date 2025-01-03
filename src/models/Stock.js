const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Stock', stockSchema);
