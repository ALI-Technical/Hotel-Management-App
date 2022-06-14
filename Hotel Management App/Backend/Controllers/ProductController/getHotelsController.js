const ProductModal = require("../../Model/ProductSchema")

const getHotelsController = async (req,res) => {
    
    try {
        const hotels = await ProductModal.find({}).sort({
            hotel_rent: "1",
          });
        res.send(hotels)
        // console.log(hotels);
    } catch (error) {
        res.send(error)
    }
  
    // ProductModal.find( {} , (err, hotels) => {
    //     if(err){
    //         res.json({message: `${err}`})
    //     }
    //     else{
    //         res.send(hotels)
    //         console.log(hotels);
    //     }
    // })
}

module.exports = getHotelsController
