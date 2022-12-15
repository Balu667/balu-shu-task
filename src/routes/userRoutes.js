const {createUser, getUsers} = require("../controllers/userController")
const { check } = require("express-validator");

const express= require("express");
const router=express.Router();

router.get("/users",getUsers);

router.post("/users/signup",[check("email").exists(),check("password").exists(),check("firstName").exists(),check("lastName").exists()],createUser);


module.exports=router;

