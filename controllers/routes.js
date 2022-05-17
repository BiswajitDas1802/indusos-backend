const express = require("express");
const app = express();
const AddText = require("../models/Text.model");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.post("/text", async (req, res) => {
  try {
    let book = await AddText.insertMany([req.body]);

    res.send(book);
  } catch (error) {
    res.send(error);
  }
});

app.get("/text", async (req, res) => {
  try {
    let text = await AddText.find();
    res.send(text);
  } catch (error) {
    console.log(error);
  }
});

module.exports = app;
