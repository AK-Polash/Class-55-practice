const express = require("express");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const database = require("./config/database");
const app = express();
dotenv.config();
const _ = require("./routes");

app.use(express.json());

app.use(_);

database();

app.listen(8000, () => {
  console.log("PORT IS RUNNING");
});

// const token = jwt.sign({ passCode: "myNameIsKhan" }, "boom");
// console.log(token);
