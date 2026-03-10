const Waste = require("../models/Waste");
const Response = require("../models/Response");

exports.calculateDifference = async (req, res) => {

  try {

    const { date, breakfastActual, lunchActual, dinnerActual } = req.body;

    const responses = await Response.find({ date });

    let breakfastExpected = 0;
    let lunchExpected = 0;
    let dinnerExpected = 0;

    responses.forEach(r => {
      if (r.breakfast) breakfastExpected++;
      if (r.lunch) lunchExpected++;
      if (r.dinner) dinnerExpected++;
    });

    const breakfastDiff = breakfastActual - breakfastExpected;
    const lunchDiff = lunchActual - lunchExpected;
    const dinnerDiff = dinnerActual - dinnerExpected;

    const record = await Waste.create({

      date,

      breakfastExpected,
      lunchExpected,
      dinnerExpected,

      breakfastActual,
      lunchActual,
      dinnerActual,

      breakfastDifference: breakfastDiff,
      lunchDifference: lunchDiff,
      dinnerDifference: dinnerDiff

    });

    res.json(record);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};