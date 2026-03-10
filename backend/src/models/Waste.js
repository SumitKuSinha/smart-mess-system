const mongoose = require("mongoose");

const wasteSchema = new mongoose.Schema({

  date: String,

  breakfastExpected: Number,
  lunchExpected: Number,
  dinnerExpected: Number,

  breakfastActual: Number,
  lunchActual: Number,
  dinnerActual: Number,

  breakfastDifference: Number,
  lunchDifference: Number,
  dinnerDifference: Number

});

module.exports = mongoose.model("Waste", wasteSchema);