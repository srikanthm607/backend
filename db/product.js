const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: String,
    shortDescription: String,
    description: String,
    purchasePrice: Number,
    sellingPrice: Number,
    images: Array(string),
    categoryId:{type: Schema.Types.ObjectId, ref:'categories'}
});

const Product = mongoose.model("categories",productSchema);
module.exports = Product;