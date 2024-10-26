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

// Update entry and exit times for a parking spot
router.put('/spots/:id/times', async (req, res) => {
  try {
    const spot = await ParkingSpot.findById(req.params.id);
    if (!spot) {
      return res.status(404).json({ message: 'Parking spot not found' });
    }

    spot.entryTime = req.body.entryTime;
    spot.exitTime = req.body.exitTime;

    // Calculate price based on entry and exit times
    const entryTime = new Date(spot.entryTime);
    const exitTime = new Date(spot.exitTime);
    const duration = (exitTime - entryTime) / (1000 * 60 * 60); // duration in hours
    const pricePerHour = 5; // example price per hour
    spot.price = duration * pricePerHour;

    await spot.save();
    res.json(spot);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
