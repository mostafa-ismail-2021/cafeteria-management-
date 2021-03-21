// Require Express
let express = require('express');
// Require Path
let path = require('path');

// Model Require
    require('../Models/orderModel');
    require('../Models/orderDetailsModel');
// Require Mongoose
let mongoose = require('mongoose');
// Order Schema
let orderSchema = new mongoose.model("orders");
// Order Router 
let orderRouter = express.Router();

// get orders get

orderRouter.get("/Orders",(request,response)=>{

    orderSchema.find({})
    .then((allOrders)=>{response.send(allOrders)})
    .catch((error)=>{console.log(error + "")});

});

//add orders post

orderRouter.post("/addOrder",(request,response)=>{
   // console.log(request.body);
    /*let items = request.body.productsItems;
    let prices = request.body.productsPrices;
    let quantities = request.body.productsQuantity;
    
    let productsItems = items.split(',');
    let productsPrices = prices.split(',');
    let productsQuantity = quantities.split(',');
    */
    // console.log(x);
    // console.log(tempObj);
    let orderObj = new orderSchema({
        date: request.body.realDate,
        notes: request.body.orderNotes,
        userID: request.body.orderUserID,
        products: request.body.productsItems,
        quantity: request.body.productsQuantity,
        price: request.body.productsPrices

    });
    orderObj.save()
    .then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error + "")})

});

//delete orders delete

orderRouter.delete("/deleteOrder/:OrderId",(request,response)=>{


    orderSchema.deleteOne({_id:request.params.OrderId})
    .then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})

});


module.exports = orderRouter;
