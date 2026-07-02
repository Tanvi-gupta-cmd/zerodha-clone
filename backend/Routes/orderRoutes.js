const express = require("express");
const router = express.Router();
const Holding = require("../models/Holding");
const Order = require("../models/Order");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

// BUY ORDER
router.post("/buy", authMiddleware, async (req, res) => {
  try {
    const { stockName, quantity, price } = req.body;
    const user = await User.findById(req.user.id);

const totalCost = quantity * price;

if (user.balance < totalCost) {
  return res.status(400).json({
    message: "Insufficient Balance",
  });
}

user.balance -= totalCost;
await user.save();

    const newHolding = new Holding({
       userId: req.user.id,
      stockName,
      quantity,
      avg: price,
      price,
    });

    await newHolding.save();
    await Order.create({
       userId: req.user.id,
  stockName,
  quantity,
  price,
  type: "BUY",
});

    res.json({ message: "Stock bought successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// SELL ORDER
router.post("/sell", authMiddleware, async (req, res) => {
  try {
    const { stockName, quantity = 1 } = req.body;
    const user = await User.findById(req.user.id);

    const holding = await Holding.findOne({
  stockName,
  userId: req.user.id,
});

    if (!holding) {
      return res.status(404).json({ message: "Stock not found" });
    }

user.balance += holding.price * quantity;

await user.save();

    holding.quantity -= quantity;

    if (holding.quantity <= 0) {
      await Holding.deleteOne({ stockName });
    } else {
      await holding.save();
    }
    
    await Order.create({
       userId: req.user.id,
  stockName,
  quantity,
  price: holding.price,
  type: "SELL",
});

    res.json({ message: "Stock sold successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL ORDERS
router.get("/", authMiddleware, async (req, res) => {
  try {
    const orders = await Order.find({
       userId: req.user.id,
    }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;