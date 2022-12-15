const userModel = require("../models/userModel");
const { validationResult } = require("express-validator");

const getUsers = async (req, res) => {
  let users;
  try {
    users = await userModel.find({});
    res.status(200).json({
      status: true,
      data: users.map((user) => user.toObject({ getters: true })),
    });
  } catch (err) {
    res.status(404).json({ status: false, data: [], message: "no data found" });
  }
};

const createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ status: false, errors: errors.array() });
  }
  const { firstName, lastName, email, password } = req.body;
  const newUser = {
    firstName,
    lastName,
    email,
    password,
  };

  let user;

  try {
    user = await userModel.create(newUser);
    return res
      .status(201)
      .send({ message: "user created sucessfully", status: true, data: user });
  } catch (err) {
    return res
      .status(500)
      .send({ message: "Internal server error", status: false });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    user = await userModel.findById(id);
    res.status(200).json({
      status: true,
      data: user.toObject({ getters: true }),
    });
  } catch (err) {
    res
      .status(404)
      .json({ status: false, message: "user not found, please check user id" });
  }
};

exports.createUser = createUser;
exports.getUsers = getUsers;
exports.getUserById = getUserById;
