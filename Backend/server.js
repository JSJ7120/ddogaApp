const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const listRouter = require("./api/listRouter");
require("dotenv").config();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

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

app.get("/", (req, res) => {
  res.send("success");
});

app.listen(PORT, () => {
  console.log("listening on 8080");
});

//특정 폴더의 파일들 전송 가능
app.use(express.static(path.join(__dirname, "../Frontend/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
});
