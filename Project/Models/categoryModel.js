// Mongoose Require
let mongoose = require('mongoose');

// Category Schema
let categorySchema = new mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

// Mapping
mongoose.model("category", categorySchema);
