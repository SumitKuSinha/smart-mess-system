const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  date: {
    type: String,
    required: true
  },

  breakfast: {
    type: Boolean,
    default: false
  },

  lunch: {
    type: Boolean,
    default: false
  },

  dinner: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("Response", responseSchema);