const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users'},
    productsId: Array(String),
});

const Cart = mongoose.model("carts",cartSchema);
module.exports = WishList;