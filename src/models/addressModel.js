const mongoose = require("mongoose"); // --> mongoose module is imported

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
    userId: { type: mongoose.Types.ObjectId, required: true, ref: "user" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("address", addressSchema);
