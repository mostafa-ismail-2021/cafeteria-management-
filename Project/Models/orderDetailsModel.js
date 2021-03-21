// Mongoose Require
let mongoose = require('mongoose');

// Order Details Schema
let orderDetailsSchema = new mongoose.Schema({
    _id: {
        type: Number,
        ref: "orders"
    },
    productID: {
        type: Number,
        required: true,
        ref: "products"
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Mapping 
mongoose.model("orderDetails", orderDetailsSchema);