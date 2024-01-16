const express = require('express');
const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 8080;

const EmployeeRouter = require('./router/employee_route');

app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect(`mongodb+srv://respons_api:tGYmVRBWQSM8xexz@cluster0.bcaen6z.mongodb.net/ResponseAPI?retryWrites=true&w=majority`);

const db= mongoose.connection;

db.on("error",(error)=>{
    console.log(error);
});

db.once('open',()=>{
    console.log('Database Conncetion Successful');
})


app.use('/api/employee',EmployeeRouter);



app.get('/',(req,res)=>{
    res.send("Server Running");
});

app.listen(port,()=>{
    console.log('My Server Port:',port);
});



// userId :respons_api

// userpass: tGYmVRBWQSM8xexz