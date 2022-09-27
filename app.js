const express=require('express');
const app=express();
const sequelize=require("./db/connection");
const router=require("./routers/route");

sequelize.authenticate()
.then(()=>{console.log("Connected db...")})
.catch((error)=>{console.log("Error "+error)});


app.use('/',router);

app.listen(4000,()=>{
    console.log("Server started at 4000");
})