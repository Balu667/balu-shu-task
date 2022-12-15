const {createuser}=require("../controllers/userController")
const{createaddress}=require("../controllers/addressController")

console.log(createuser)

const express= require("express");

const router=express.Router()

router.post("/signup",createuser)

module.exports=router

