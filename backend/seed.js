const mongoose = require("mongoose");
require("dotenv").config();

const Holding = require("./models/Holding");

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Holding.insertMany([
      {
        stockName: "TCS",
        quantity: 10,
        avgPrice: 3500,
        price: 3600,
      },
      {
        stockName: "Infosys",
        quantity: 5,
        avgPrice: 1500,
      },
      {
        stockName: "Reliance",
        quantity: 8,
        avgPrice: 2500,
      },
    ]);

    console.log("Data inserted successfully");
    process.exit();
  })
  .catch((err) => console.log(err));