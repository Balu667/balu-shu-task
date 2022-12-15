const express = require('express');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const app = express();
// const dotenv=require("dotenv").config()



app.use(express.json()); //express.json();
app.use('/', route);

// require("dotenv").config()

mongoose.connect("mongodb+srv://mahendra:0XHQbHa045NxY49O@cluster0.wlu0ovk.mongodb.net/newtask", {    //process.env.MONGO_URL
  useNewUrlParser: true
})
.then(function(){
  console.log("Mongodb is connected successfully");
})
.catch(function(err){
  console.log(err)
})


app.listen(process.env.PORT || 3000, function(){return console.log(`Express is running on port ${process.env.PORT || 3000}`)});