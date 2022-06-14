const loginController = require("./AuthController/login");
const allUser = require("./Admin Controllers/allUser");
const SignupController = require("./AuthController/signup");
const addHotelController = require('./ProductController/addHotelController');
const getHotelsController = require('./ProductController/getHotelsController');
const updateHotelsController = require('./ProductController/updateHotelsController');
const deleteHotelsController = require('./ProductController/deleteHotelsController');
const updateUserStatus = require("./Admin Controllers/updateUserStatus");

module.exports = {
    loginController: loginController,
    SignupController: SignupController,
    allUser: allUser,
    addHotelController: addHotelController,
    getHotelsController: getHotelsController,
    updateHotelsController: updateHotelsController,
    deleteHotelsController: deleteHotelsController,
    updateUserStatus: updateUserStatus,
}