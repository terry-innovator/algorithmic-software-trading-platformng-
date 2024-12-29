const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${req.query.symbol}&apikey=${process.env.ALPHA_VANTAGE_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

module.exports = router;
