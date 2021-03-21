// Require Express
let express = require('express');
// Require Path
let path = require('path');

// Model Require
    require('../Models/categoryModel')
// Require Mongoose
let mongoose = require('mongoose');
// Category Schema
let categorySchema = new mongoose.model("category");
// Category Router 
let categoryRouter = express.Router();

// get Category get

categoryRouter.get("/Category",(request,response)=>{

    categorySchema.find({})
    .then((allCategories)=>{response.send(allCategories);
    }).catch((error)=>{console.log(error + "");});


});

// Add Category Post
categoryRouter.post("/addCategory", (request, response)=>{
    console.log(request.body);
    let categoryObj = new categorySchema({
        _id: request.body.categoryId,
        name: request.body.categoryName,
        description: request.body.categoryDescription
    });
    console.log(request.body);
    categoryObj.save()
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log(error + "");});
});

//Delete category delete

categoryRouter.delete("/deleteCategory/:categoryId",(request,response)=>{

    categorySchema.deleteOne({_id:request.params.categoryId})
    .then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})
    
});

//Edit Category PUT

categoryRouter.put("/editCategory/:categoryId",(request,response)=>{

    categorySchema.updateOne({_id:request.params.categoryId},{
        $set:{
            _id: request.body.categoryId,
            name: request.body.categoryName,
            description: request.body.categoryDescription
        }
    }).then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})

});

module.exports = categoryRouter;
