const bcryptjs = require("bcryptjs");
const jwt = require('jsonwebtoken')
const UserModel = require("../../Model/UserSchema");

const loginController = (req, res) => {
  // console.log("hittttttttt");
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ message: "Required field are missing" });
  }

  UserModel.findOne({ email }, async (error, user) => {
    if (error) {
      res.send(error);
    } else if (user) {
      try {
        const checkPass = await bcryptjs.compare(password, user.password)
            if (checkPass) {

              const token = jwt.sign(
                { userID: user._id, role: user.role },
                process.env.JWT_SECRET_KEY,
              )
              res.cookie("acces_token", token, {
                httpOnly: true,
              });
              res.json({message: "Login Sucessfully"})

            } else {
              res.json({ error: "Invalid User" });
            }
        } catch (err) {
          res.send(err);
      }
    } else {
      res.json({ error: "Invalid User" });
    }
  });
};

module.exports = loginController;