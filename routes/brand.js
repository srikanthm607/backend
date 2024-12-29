const express = require("express");
const router = express.Router();
const { addBrand, updateBrand, getBrands, deleteBrand, getBrandById } = require("../handlers/brand-handler");

router.post("", async(req,res)=>{
    let model = req.body;
    let result = await addBrand(model);
    res.send(result);
})

router.put("/:id",async(req,res)=>{
    let model = req.body;
    let id = req.params['id'];
    await updateBrand(id,model);
    res.send({message:"updated"});
})

router.delete("/:id",async(req,res)=>{
    let id = req.params['id'];
    await deleteBrand(id);
    res.send({message:"deleted"})
})

router.get("/allBrands",async(req,res)=>{
    let brands = await getBrands();
    res.send(brands)
})

router.get("/:id", async(req,res)=>{
    let id = req.params['id'];
    let brand = await getBrandById(id);
    res.send(brand)
})

module.exports = router;