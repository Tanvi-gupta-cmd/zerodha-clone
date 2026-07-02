const express = require("express");
const Holding = require("../models/Holding");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const holdings = await Holding.find({
  userId: req.user.id,
});
    res.json(holdings);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;