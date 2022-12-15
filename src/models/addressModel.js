const mongoose = require("mongoose");  // --> mongoose module is imported
const objectId = mongoose.Schema.Types.ObjectId  // --> syntax to refer an objectId to a key in schema

// to define a format (schema) for creating an intern in the database
const addressSchema = new mongoose.Schema(
  {
    place: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
   
    },
    pin: {
      type: String,
      required: true,
    
    },
   userId: {
        type: objectId,
        ref: "user",
    },
    // isDeleted: {
    //   type: Boolean,
    //   default: false
    // }
  },
   { timestamps: true }
)

module.exports = mongoose.model("address", addressSchema); 