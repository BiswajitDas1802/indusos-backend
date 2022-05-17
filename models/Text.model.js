const mongoose = require("mongoose");

const textSchema = new mongoose.Schema(
  {
    text: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const AddText = mongoose.model("text", textSchema);

module.exports = AddText;
