const express = require("express");
const router = express.Router();

const {
  submitResponse,
  getResponses,
  getUserResponse
} = require("../controllers/responseController");
const { updateResponse } = require("../controllers/responseController");
const { getMealPrediction } = require("../controllers/responseController");

router.post("/", submitResponse);
router.get("/", getResponses);
router.get("/:userId", getUserResponse);
router.put("/", updateResponse);
router.get("/prediction/:date", getMealPrediction);

module.exports = router;