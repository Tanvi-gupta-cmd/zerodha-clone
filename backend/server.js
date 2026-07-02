const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const holdingRoutes = require("./routes/holdingRoutes");
const positionRoutes = require("./routes/positionRoutes");
const orderRoutes = require("./routes/orderRoutes"); 
const fundRoutes = require("./routes/fundRoutes");
const userRoutes = require("./routes/userRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/holdings", holdingRoutes);     
app.use("/api/positions", positionRoutes);   
app.use("/api/order", orderRoutes);     
app.use("/api/funds", fundRoutes);     
app.use("/api/user", userRoutes);
app.use("/api/watchlist", watchlistRoutes);

// Home route
app.get("/", (req, res) => {
  res.send("Zerodha Clone API Running");
});

console.log(process.env.MONGO_URI);

// MongoDB connect
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));