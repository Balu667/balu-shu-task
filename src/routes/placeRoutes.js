const { createPlace, getPlaces } = require("../controllers/addressController");
const { validatePlace } = require("../validators/validator");
const { check } = require("express-validator");
const express = require("express");
const router = express.Router();

router.get("/places", getPlaces);
router.post("/place", validatePlace, createPlace);

module.exports = router;
