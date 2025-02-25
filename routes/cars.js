const express = require("express");
const Car = require("../models/Car");

const router = express.Router();

router.get("/rental-cars", async (req, res) => {
  try {
    const { year, color, steering_type, number_of_seats } = req.query;
    let query = {};

    if (year) query.year = year;
    if (color) query.color = color;
    if (steering_type) query.steering_type = steering_type;
    if (number_of_seats) query.number_of_seats = number_of_seats;

    const cars = await Car.find(query).sort({ price_per_day: 1 });
    res.json(cars);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cars" });
  }
});

module.exports = router;
