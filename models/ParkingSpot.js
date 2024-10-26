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
  },
  entryTime: {
    type: Date,
    default: null
  },
  exitTime: {
    type: Date,
    default: null
  },
  price: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('ParkingSpot', ParkingSpotSchema);
