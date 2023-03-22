const mongoose = require("mongoose");

const database = () => {
  mongoose
    .connect(
      "mongodb+srv://polashk199:polashk199@cluster0.d3amkkw.mongodb.net/class-55?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("Connected!");
    });
};

module.exports = database;
