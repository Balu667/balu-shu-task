const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const placeRoutes = require("./routes/placeRoutes")
const mongoose = require('mongoose');
const app = express();
// const dotenv=require("dotenv").config()



app.use(express.json()); //express.json();

app.use("/",placeRoutes)
app.use('/', userRoutes);



mongoose.connect("mongodb+srv://mahendra:0XHQbHa045NxY49O@cluster0.wlu0ovk.mongodb.net/doko", {    //process.env.MONGO_URL
  useNewUrlParser: true
})
.then(function(){
  console.log("Mongodb is connected successfully");
})
.catch(function(err){
  console.log(err)
})


app.listen(3000, function(){return console.log(`Express is running on port ${3000}`)});