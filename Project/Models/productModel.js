// Mongoose Require
let mongoose = require('mongoose');

// Product Schema
let productSchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    img: String,
    categoryID: {
        type: Number,
        required: true,
        ref: "category"
    }
});

// Mapping
mongoose.model("product", productSchema);