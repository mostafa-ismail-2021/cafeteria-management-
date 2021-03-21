// Require Express
let express = require('express');
// Require Path
let path = require('path');

// Model Require
    require('../Models/productModel')
// Require Mongoose
let mongoose = require('mongoose');
// Product Schema
let productSchema = new mongoose.model("product");
// Product Router 
let productRouter = express.Router();

// Get All Products Get
productRouter.get("/getProducts", (request, response)=>{
    productSchema.find({})
    .then((allProducts)=>{response.send(allProducts);
    }).catch((error)=>{console.log(error + "");});
})

// Add Product Post
productRouter.post("/addProduct", (request, response)=>{
    let productObj = new productSchema({
        _id: request.body.productId,
        name: request.body.productName,
        price: request.body.productPrice,
        img: request.body.productImg,
        categoryID: request.body.categoryId
    });
    productObj.save()
    .then((data)=>{response.send(data);})
    .catch((error)=>{console.log(error + "");});
});

// Delete Product Delete
productRouter.delete("/deleteProduct/:productId", (request, response)=>{
    productSchema.deleteOne({_id:request.params.productId})
    .then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})
});

// Update Product Put
productRouter.put("/editProduct/:productId", (request, response)=>{
    productSchema.updateOne({_id:request.params.productId},{
        $set:{
            name: request.body.productName,
            price: request.body.productPrice,
            img: request.body.productImg,
            categoryID: request.body.categoryId
        }
    }).then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})
})
module.exports = productRouter;
