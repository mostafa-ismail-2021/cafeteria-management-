// Mongoose Require 
let mongoose = require('mongoose');

// User Schema 
let userSchema = new mongoose.Schema({
     _id: Number,
    name: {
        type: String,
        //required: true,
        unique: true,
        minlength: 3
    },
    password: {
        type: String,
        minlength: 4
    },
    phone:{
        type: Number,
        minlength: 5
    },
    roomNumber:{
        type: Number,
       // required: true,
    },
    image: String,
});

// Mapping 
mongoose.model("users", userSchema);