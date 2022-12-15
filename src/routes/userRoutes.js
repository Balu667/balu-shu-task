const {
  createUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");
const { validateUser } = require("../validators/validator");
const { check } = require("express-validator");

const express = require("express");
const router = express.Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.post(
  "/users/signup",
  //   [
  //     check("email").exists(),
  //     check("password").exists(),
  //     check("firstName").exists(),
  //     check("lastName").exists(),
  //   ],
  validateUser,
  createUser
);

module.exports = router;
