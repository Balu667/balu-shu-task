const{createPlace,getPlaces} = require("../controllers/addressController");
const { check } = require("express-validator");
const express= require("express");
const router=express.Router();



router.get("/places",getPlaces)
router.post("/place",[check("place").exists(),check("street").exists(),check("pin").exists()], createPlace);

module.exports = router;