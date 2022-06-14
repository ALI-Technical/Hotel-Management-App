const ProductModal = require("../../Model/ProductSchema");

const updateHotelsController = (req, res) => {

    const { id } = req.params;

    ProductModal.findByIdAndUpdate(id, req.body ,{new: true} ,(err, data) => {

      if (err) {
        res.send("error", err);
      } else {
        res.send(data);
      }
    });

  };
  
module.exports = updateHotelsController



// // we can also update document with delete request but it's not good practice