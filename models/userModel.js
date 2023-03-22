const mongoose = require("mongoose");
const { Schema } = mongoose;

const userModel = new Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  contact: String,
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model("User", userModel);
