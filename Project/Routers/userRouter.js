// Require Express
let express = require('express');
// Require Path
let path = require('path');

// Model Require
    require('../Models/userModel')
// Require Mongoose
let mongoose = require('mongoose');
// User Schema
let userSchema = mongoose.model("users");
// User Router 
let userRouter = express.Router();


// Get All Users Get
userRouter.get("/getUsers",(request , response)=>{
    userSchema.find({})
    .then((allUsers)=>{response.send(allUsers)})
    .catch((error)=>{console.log(error + "")});
});

// Add User Post
userRouter.post("/addUser",(request , response)=>{
    // console.log(request.body);
    let userObj = new userSchema({
        _id: request.body.userId,
        name: request.body.userName,
        password: request.body.userPassword,
        phone: request.body.userPhone,
        roomNumber: request.body.roomNumber,
        image: request.body.userImage
    });
    userObj.save()
    .then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error + "")})
});

// Delete User Delete
userRouter.delete("/deleteUser/:id",(request,response)=>{
    //console.log(request.param.id);
    userSchema.deleteOne({_id:request.params.id})
    .then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})
})

// Edit User Put
userRouter.put("/updateUser/:id",(request,response)=>{
    userSchema.updateOne({_id:request.params.id},{
        $set:{
            name: request.body.userName,
            password: request.body.userPassword,
            phone: request.body.userPhone,
            roomNumber: request.body.roomNumber,
            image: request.body.userImage
        }
    }).then((data)=>{response.send(data)})
    .catch((error)=>{console.log(error)})
})

// Exports User Router
module.exports = userRouter;
