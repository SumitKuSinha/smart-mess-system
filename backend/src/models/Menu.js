const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
    unique: true
  },

  breakfast: [String],
  lunch: [String],
  dinner: [String],

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }

}, { timestamps: true });

module.exports = mongoose.model("Menu", menuSchema);