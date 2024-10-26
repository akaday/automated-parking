const mongoose = require('mongoose');

const ParkingSpotSchema = new mongoose.Schema({
  spotNumber: {
    type: Number,
    required: true,
    unique: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('ParkingSpot', ParkingSpotSchema);
