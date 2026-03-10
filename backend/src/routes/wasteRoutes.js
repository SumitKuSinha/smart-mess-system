const express = require("express");
const router = express.Router();

const { calculateDifference } = require("../controllers/wasteController");


router.post("/", calculateDifference);

module.exports = router;