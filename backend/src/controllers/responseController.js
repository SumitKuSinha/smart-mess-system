const Response = require("../models/Response");

// submit response
exports.submitResponse = async (req, res) => {
  try {

    const { user, date, breakfast, lunch, dinner } = req.body;

    const existing = await Response.findOne({ user, date });

    if (existing) {
      return res.status(400).json({ message: "Response already submitted for this date" });
    }

    const response = await Response.create({
      user,
      date,
      breakfast,
      lunch,
      dinner
    });

    res.status(201).json(response);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get all responses
exports.getResponses = async (req, res) => {
  try {

    const responses = await Response.find().populate("user","name email");

    res.json(responses);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get response by user
exports.getUserResponse = async (req, res) => {
  try {

    const response = await Response.find({ user: req.params.userId });

    res.json(response);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//update response by user
exports.updateResponse = async (req, res) => {
  try {

    const { user, date } = req.body;

    const response = await Response.findOneAndUpdate(
      { user, date },     // find response
      req.body,           // new data
      { new: true }       // return updated data
    );

    if (!response) {
      return res.status(404).json({ message: "Response not found" });
    }

    res.json(response);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//meal prediction 
exports.getMealPrediction = async (req, res) => {
  try {

    const date = req.params.date;

    const responses = await Response.find({ date });

    let breakfast = 0;
    let lunch = 0;
    let dinner = 0;

    responses.forEach(r => {
      if (r.breakfast) breakfast++;
      if (r.lunch) lunch++;
      if (r.dinner) dinner++;
    });

    res.json({
      date,
      breakfast,
      lunch,
      dinner
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};