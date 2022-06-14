const UserModel = require("../../Model/UserSchema");


const allUser = async (req , res) =>{
// console.log('hittttttttttt');
  const role = req.body.decoded.role
      if(role === "admin"){
        try {
          const users = await UserModel.find({ 
            $or: [ 
              { role: "vendor" }, { role: "user" },] }).sort({role: "1"});
  
          res.send({
            users,
            currentUser:req.body.decoded
          })
          // console.log(users);
      } catch (error) {
          res.json({message: `${error}`})
      }
      }
      else{
        res.json({message: "UnAuthorized"})
      }

}


module.exports = allUser