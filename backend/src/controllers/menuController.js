const Menu = require("../models/Menu");

// Add menu
exports.createMenu = async (req, res) => {
  try {

    const { date, breakfast, lunch, dinner } = req.body;

    const menu = await Menu.create({
      date,
      breakfast,
      lunch,
      dinner
    });

    res.status(201).json(menu);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all menus
exports.getMenus = async (req, res) => {
  try {

    const menus = await Menu.find();

    res.json(menus);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get today's menu
exports.getMenuByDate = async (req, res) => {
  try {

    const menu = await Menu.findOne({ date: req.params.date });

    res.json(menu);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};