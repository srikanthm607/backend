const Category = require("./../db/category");

async function addCategory(model){
    let category = new Category({
        name:model.name
    });
    await category.save();
    return category.toObject();
}

async function updateCategory(id,model){
    await Category.findOneAndUpdate({_id:id},model);
    return;
};

async function deleteCategory(id,model){
    await Category.findOneAndDelete({_id:id});
    return;
};

async function getCategories(){
    let response = await Category.find();
    return response.map(c=>c.toObject());
};

async function getCategoryById(id){
    let category = await Category.findById(id);
    return category.toObject();
};

module.exports = {addCategory, updateCategory, getCategories, deleteCategory, getCategoryById}