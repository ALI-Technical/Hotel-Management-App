const ProductModal = require("../../Model/ProductSchema");

const deleteHotelsController = (req, res) => {

    const { id } = req.params;
    // console.log(id);

    ProductModal.deleteOne({ _id: id }, req.body, (err, data) => {
        if (err) {
            res.send("error", err);
            console.log(err);
        } else {
            res.send(data);
        }
    });

}

module.exports = deleteHotelsController