const express = require("express");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get Balance
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.json({
      balance: user.balance,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Add Funds
router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    const user = await User.findById(req.user.id);

    user.balance += Number(amount);

    await user.save();

    res.json({
      balance: user.balance,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Withdraw Funds
router.post("/withdraw", authMiddleware, async (req, res) => {
  try {
    const { amount } = req.body;

    const user = await User.findById(req.user.id);

    if (user.balance < amount) {
      return res.status(400).json({
        message: "Insufficient Balance",
      });
    }

    user.balance -= Number(amount);

    await user.save();

    res.json({
      balance: user.balance,
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;