const express = require("express");
const Watchlist = require("../models/Watchlist");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Get Watchlist
router.get("/", auth, async (req, res) => {
  try {
    const watchlist = await Watchlist.find({
      userId: req.user.id,
    });

    res.json(watchlist);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

// Add Stock
router.post("/", auth, async (req, res) => {
  try {
    const { stockName, price, change } = req.body;

    const stock = await Watchlist.create({
      userId: req.user.id,
      stockName,
      price,
      change,
    });

    res.status(201).json(stock);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

module.exports = router;