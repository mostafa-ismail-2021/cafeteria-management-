// Require Express 
let express = require('express');
// Require Path
let path = require('path');
// Require Mongoose 
let mongoose = require('mongoose');
// App Express
let app = express();

app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Header", 
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");
    next();
});


/* Require Routers */
// User Router
let userRouter = require('./Routers/userRouter');
// Product Router
let productRouter = require('./Routers/productRouter');
// Order Router 
let orderRouter = require('./Routers/orderRouter');
// Category Router 
let categoryRouter = require('./Routers/categoryRouter');


// Connect To DataBase
mongoose.connect("mongodb://localhost:27017/mycafetriaSystem",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(()=>{
        console.log("DB Connected")
    }).catch((error)=>{
        console.log(error+"");
    });

// App Listen Port
app.listen(5050,()=>{
    console.log("Server Started Well ....");
}); 



app.use((request,response,next)=>{
    console.log(request.url,request.method);
    next();
    // response.send("Welcome to our Website ....");
});

app.use(express.urlencoded({extended:false}));
app.use(express.json({name:"ahmed"}));


app.get("/home",(request,response)=>{
    response.send("HOME PAGE");
    next();
    // response.sendFile(path.join(__dirname,"views","home.html"));
});

/* Use Routers */
// User Router
app.use(userRouter);
// Order Router 
app.use(orderRouter);
// Category Router 
app.use(categoryRouter);
// Product Router 
app.use(productRouter);
// Error MW
app.use((error, request, response, next)=>{
    console.log(error.errmsg);
});
