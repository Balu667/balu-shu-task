const {
  createUser,
  getUsers,
  getUserById,
} = require("../controllers/userController");
const { validateUser } = require("../validators/validator");

const express = require("express");
const router = express.Router();

router.get("/users", getUsers);

router.get("/users/:id", getUserById);

router.post("/users/signup", validateUser, createUser);

module.exports = router;
