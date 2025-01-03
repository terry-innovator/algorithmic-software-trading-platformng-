const express = require('express');
const router = express.Router();
const Crypto = require('../models/Crypto');

// Get all cryptocurrencies
router.get('/', async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.json(cryptos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new cryptocurrency
router.post('/', async (req, res) => {
  const crypto = new Crypto({
    symbol: req.body.symbol,
    name: req.body.name,
    price: req.body.price,
  });

  try {
    const newCrypto = await crypto.save();
    res.status(201).json(newCrypto);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;

