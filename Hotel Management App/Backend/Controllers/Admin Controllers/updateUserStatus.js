const UserModel = require("../../Model/UserSchema")


const updateUserStatus = async (req, res) => {

    const { id, status } = req.body;
    const role = req.body.decoded.role
    if (role === "admin") {
        try {
            const updatedUser = await UserModel.findByIdAndUpdate(id, { $set: { status: status } }, { new: true },)

            res.json({ message: `User Successfully ${status}` })
            // console.log(updatedUser);
        } catch (error) {
            res.json({ message: error })
        }
    }
    else{
        res.json({message: "UnAuthorized"})
    }

}

module.exports = updateUserStatus