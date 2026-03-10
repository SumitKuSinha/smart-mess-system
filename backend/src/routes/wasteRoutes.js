const express = require("express");
const router = express.Router();

const { calculateWaste } = require("../controllers/wasteController");

router.post("/", calculateWaste);

module.exports = router;