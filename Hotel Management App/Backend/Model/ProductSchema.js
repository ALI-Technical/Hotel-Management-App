const mongoose = require("mongoose");


const ProductSchema = new mongoose.Schema({
    hotel_name: {
        type: String,
        required: true
    },
    hotel_city: {
        type: String,
        required: true
    },
    hotel_rent: {
        type: Number,
        required: true
    },
    services: {
        type: [String],
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
})

const ProductModal = mongoose.model("products", ProductSchema);

module.exports = ProductModal;