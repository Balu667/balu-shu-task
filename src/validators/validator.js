const { check } = require("express-validator");

exports.validateUser = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("first name can not be empty!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("last name can not be empty!")
    .bail()
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password name can not be empty!")
    .bail()
    .isLength({ min: 4 })
    .withMessage("Minimum 4 characters required!"),
  check("email")
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .bail(),
];

exports.validatePlace = [
  check("place").trim().not().isEmpty().withMessage("place can not be empty!"),
  check("pin").trim().not().isEmpty().withMessage("pin must be required"),
  check("street").trim().not().isEmpty().withMessage("street can not empty!"),
];
