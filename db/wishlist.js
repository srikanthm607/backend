const mongoose = require("mongoose");
const whishListSchema = new mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref:'users'},
    productsId: Array(String),
});

const WishList = mongoose.model("categories",whishListSchema);
module.exports = WishList;