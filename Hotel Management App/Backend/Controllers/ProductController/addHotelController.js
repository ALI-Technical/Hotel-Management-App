const ProductModal = require('../../Model/ProductSchema')

const addHotelController = (req, res) => {
    const { hotel_name, hotel_city, hotel_rent } = req.body;

    if (!hotel_name || !hotel_city || !hotel_rent) {
      return res.json({ message: "Required field are missing" });
    }
    else {
    ProductModal.create(req.body, (err, data) => {
      if (err) {
        res.json({message: `${err}`});
      } else {
        res.send(data);
      }
    });}
}

module.exports =  addHotelController
