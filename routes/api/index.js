const express = require("express");
const _ = express.Router();
const authRoute = require("./authentication.js");

_.use("/auth", authRoute);

module.exports = _;
