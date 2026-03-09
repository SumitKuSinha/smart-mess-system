const express = require("express");
const router = express.Router();

const {
  createMenu,
  getMenus,
  getMenuByDate
} = require("../controllers/menuController");

router.post("/", createMenu);
router.get("/", getMenus);
router.get("/:date", getMenuByDate);

module.exports = router;