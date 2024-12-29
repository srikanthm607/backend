const express = require("express");
const router = express.Router();
const Category = require("./../db/category");
const { updateCategory, addCategory,getCategories, deleteCategory, getCategoryById } = require("../handlers/category-handler");

router.post("", async(req,res)=>{
    console.log("here")
    model = req.body; 
    let result = await addCategory(model);
    res.send(result);
});

router.put("/:id",async(req,res)=>{
    let model = req.body;
    let id = req.params['id'];
    await updateCategory(id,model);
    res.send({message:"ok"});
})

router.get("/allcategories", async(req,res)=>{
    let response = await getCategories();
    res.send(response)
});

router.get("/:id", async(req,res)=>{
    let id = req.params['id'];
    let category = await getCategoryById(id);
    res.send(category)
})


router.delete("/:id",async(req,res)=>{
    let id = req.params['id'];
    await deleteCategory(id);
    res.send({message:"successfully delted "+id}) 
})
module.exports = router;
