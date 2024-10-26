const express = require('express');
const router = express.Router();
const ParkingSpot = require('../models/ParkingSpot');

// Get all parking spots
router.get('/spots', async (req, res) => {
  try {
    const spots = await ParkingSpot.find();
    res.json(spots);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new parking spot
router.post('/spots', async (req, res) => {
  const spot = new ParkingSpot({
    spotNumber: req.body.spotNumber,
    isAvailable: req.body.isAvailable
  });

  try {
    const newSpot = await spot.save();
    res.status(201).json(newSpot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
