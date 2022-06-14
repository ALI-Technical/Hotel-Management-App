const express = require("express");
const { loginController, SignupController, allUser, addHotelController, getHotelsController, updateHotelsController, deleteHotelsController, updateUserStatus } = require("../Controllers/index");
const authMiddlware = require('../Middlewares/authMiddleware')

const router = express.Router();

// Auth Routes
router.post("/api/signup", SignupController);
router.post("/api/login", loginController);

// Admin APIs
router.get("/api/alluser", authMiddlware, allUser);
router.put("/api/user", authMiddlware, updateUserStatus);

// Product APIs
router.post("/api/hotels", addHotelController);
router.get("/api/hotels", getHotelsController);
router.put("/api/hotels/:id", updateHotelsController);
router.delete("/api/hotels/:id", deleteHotelsController);


module.exports = router;