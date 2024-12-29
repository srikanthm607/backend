const express = require("express");
const { addProduct, updateProduct, deleteProduct, getAllProducts, getProduct } = require("../handlers/product-handler");
const router = express.Router();

router.post("/",async(req,res)=>{
    let model = req.body;
    let product = await addProduct(model);
    res.send(product);
})

router.put("/:id",async(req,res)=>{
    model = req.body;
    let id = req.params['id'];
    await updateProduct(id,model);
    res.send({message:"updated product"})
})

router.delete("/:id",async(req,res)=>{
    let id = req.params['id'];
    await deleteProduct(id);
    res.send({message:"product deleted"})
})

router.get("/allproducts",async(req,res)=>{
    let products = await getAllProducts();
    res.send(products)
})

router.get("/:id",async(req,res)=>{
    let id = req.params['id']
    let product = await getProduct(id);
    res.send(product)
})
module.exports = router;
