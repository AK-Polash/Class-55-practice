const User = require("../models/userModel");

const signUp = async (req, res) => {
  const { name, email, password, gender, contact } = req.body;
  const user = new User({
    name,
    email,
    password,
    gender,
    contact,
  });

  if (!name) {
    return res.send({ message: "Username Required" });
  } else if (!email) {
    return res.send({ message: "Email Required" });
  } else if (!password) {
    return res.send({ message: "Password Required" });
  } else if (!gender) {
    return res.send({ message: "Gender Required" });
  } else if (!contact) {
    return res.send({ message: "Contact Required" });
  } else {
    const users = await User.find({ email });
    if (users.length < 1) {
      return user
        .save()
        .then(() => {
          res.send({ message: "Registration Successful!" });
        })
        .catch((err) => {
          res.send({ message: err.code });
        });
    } else {
      res.send({ message: "User Already Exist" });
    }
  }
};

module.exports = signUp;
