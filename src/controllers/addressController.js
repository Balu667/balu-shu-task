const addressModel = require("../models/addressModel");
const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");


const getPlaces = async (req,res) => {
    let places;
    try{
        places = await addressModel.find({});
        res.status(200).json({status: true, data: places.map((user) => user.toObject({ getters: true })) });
    }catch(err){
      res.status(404).json({status:false,data : [], message:"no data found"})
    }  
}

const createPlace = async (req,res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({status:false,message:"Invalid inputs, please check"})
      return next(new HttpError("Invalid input fields, Please Check", 422));
    }
    const {place,street,pin} = req.body;
    console.log(req.headers.userid,"userid")
    const newPlace = new addressModel({
        place,
        street,
        pin,
        creator:req.headers.userid
    });

    let user;
      try{
        user = await userModel.findById(req.headers.userid);
    
      }
      
    catch(err){
        return res.status(500).json({status:false,message:"something went wrong, please try again"})
    }
    if(!user){
        return res.status(400).json({status:false, message:"user was not found, please provide the correct id"})
    } 
        user.places.push(newPlace);
        user.save()
        console.log(user)
    let address = addressModel.create(newPlace);
    return res.status(201).send({ message:"place created sucessfully", status: true, data: newPlace })  // --> 
}

module.exports = {
    createPlace,
    getPlaces
}
