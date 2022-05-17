const mongoose = require("mongoose");

module.exports = () =>
  mongoose.connect(
    "mongodb+srv://biswa:biswa@cluster0.f2hzp.mongodb.net/uniteval"
  );
