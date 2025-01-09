const express = require('express');
const router = express.Router();
const {getNewProducts, getFeaturedProducts,getProductForListing } = require('./../handlers/product-handler');
const { getCategories } = require('../handlers/category-handler');

router.get("/new-products",async(req,res)=>{
    const products = await getNewProducts();
    res.send(products);
});

router.get("/featured-products",async(req,res)=>{
    const products = await getFeaturedProducts();
    res.send(products);
});

router.get("/categories",async(req,res)=>{
    const categories = await getCategories();
    res.send(categories);
});

router.get("/products",async(req,res)=>{
    const {searchTerm,
        categoryId,
        page,
        pageSize,
        sortBy,
        sortOrder,
        brandId} = req.query;
        console.log(req.query)
    const products = await getProductForListing(
        searchTerm,
        categoryId,
        page,
        pageSize,
        sortBy,
        sortOrder,
        brandId,
        
    );
    res.send(products);
});

module.exports = router;