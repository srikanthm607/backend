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

async function getNewProducts(){
    let newProducts = await Product.find({
        isNewProduct:true,
    });
    return newProducts.map((x)=> x.toObject());
}

async function getFeaturedProducts(){
    let featuredProducts = await Product.find({
        isFeatured:true,
    });
    return featuredProducts.map((x)=> x.toObject());
}

async function getProductForListing(searchTerm,
    categoryId,
    page,
    pageSize,
    sortBy,
    sortOrder,
    brandId){
    if(!sortBy){
        sortBy='price'
    }
    if(!sortOrder){
        sortOrder=-1
    }
    let queryFilter = {};
    if(searchTerm){
        queryFilter.name = {$regex:'.*' +searchTerm+'*.'};
    }
    if(categoryId){
        queryFilter.categoryId = categoryId;
    }
    if(brandId){
        queryFilter.brandId = brandId;
    }
    console.log(queryFilter)
    const products = await Product.find(queryFilter)
    .sort( { [sortBy]:Number(sortOrder) } )
    .skip((page-1)*pageSize)
    .limit(pageSize);
    return products.map((x)=>x.toObject())
}

module.exports = {getProduct,getAllProducts,updateProduct,addProduct,deleteProduct,getNewProducts,getFeaturedProducts, getProductForListing}