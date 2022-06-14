const bcryptjs = require("bcryptjs");
const UserModel = require("../../Model/UserSchema");

const SignupController = async (req, res) => {

  // console.log("hitttttttttttt", req.body);
  const { username, email, password, contact, role } = req.body;

  if (username && email && password && contact && role) {
    const hashPass = await bcryptjs.hash(password, 10);

    const userObj = {
      ...req.body,
      password: hashPass,
    };
    console.log(userObj);

    UserModel.findOne({ email }, (error, user) => {
      if (error) {
        res.json({message: error});
      } else if (user) {
        console.log(user);
        res.json({ message: "email address is already exist" });
      } else {
        UserModel.create(userObj, (err, _) => {
          if (err) {
            res.json({message: err});
          } else {
            res.json({ message: "user successfully signup" });
          }
        });
      }
    });
  } else{
    return res.json({ message: "Required field are missing" });
  }
}

module.exports = SignupController;