const express = require('express');
const router = express.Router();
const ParkingSpot = require('../models/ParkingSpot');
const rateLimit = require('express-rate-limit');

// Set up rate limiter: maximum of 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

// Apply rate limiter to all routes
router.use(limiter);

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
