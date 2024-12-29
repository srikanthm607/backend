const Product = require("./../db/product");

async function addProduct(model){
    let product = new Product({
    //     name: model.name,
    // shortDescription: model.shortDescription,
    // description: model.description,
    // purchasePrice: model.purchasePrice,
    // discount: model.discount,
    // images: Array(string),
    ...model
    })
    await product.save();
    return product.toObject();
}

async function updateProduct(id,model){
    await Product.findByIdAndUpdate(id,model)
}

async function deleteProduct(id){
    await Product.findByIdAndDelete(id);
    return {message:"deleted"}
}

async function getAllProducts(){
    let products = await Product.find();
    return products.map(x=>x.toObject());
}

async function getProduct(id){
    let product = await Product.findById(id);
    return product.toObject();
}

module.exports = {getProduct,getAllProducts,updateProduct,addProduct,deleteProduct}