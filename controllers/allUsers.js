const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const allUsers = (req, res) => {
  jwt.verify(req.headers.authorization, "boom", async (err, decoded) => {
    if (err) {
      return res.send({ message: "Authorization Failed" });
    } else {
      if (decoded.passCode === "myNameIsKhan") {
        const users = await User.find({}).select({ password: 0 });
        return res.send(users);
      } else {
        res.send({ message: "Unauthorized Entry!" });
      }
    }
  });
};

module.exports = allUsers;
