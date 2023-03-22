const express = require("express");
const allUsers = require("../../controllers/allUsers");
const signUp = require("../../controllers/signUp");
const _ = express.Router();

_.post("/signup", signUp);

_.get("/users", allUsers);

module.exports = _;
