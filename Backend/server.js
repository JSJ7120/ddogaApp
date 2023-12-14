const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const listRouter = require("./api/listRouter");
const bodyParser = require("body-parser");

require("dotenv").config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.json());

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connection successful");
  })
  .catch((e) => {
    console.error(e);
  });

app.use("/service", listRouter);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

// app.use(express.static(path.join(__dirname, "../Frontend/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
});
