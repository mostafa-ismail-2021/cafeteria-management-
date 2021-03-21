// Mongoose Require
let mongoose = require('mongoose');

// Order Schema
let orderSchema = new mongoose.Schema({

    date: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    },
    userID: {
        type: Number,
        required: true,
        //ref: "users"
    },
     products: {
         type: [],
         required: true,
         //ref: "products"
     },
     quantity: {
         type: [],
         required: true
     },
     price: {
         type: [],
         required: true
     }
});

// Mapping 
mongoose.model("orders", orderSchema);