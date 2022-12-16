const mongoose = require("mongoose"); // --> mongoose module is imported

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    places: [{ type: Object, required: true, ref: "address" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
