const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('./middleware/bodyParser');
const connectDB = require('./config/database');

const app = express();
app.use(bodyParser);

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const parkingRoutes = require('./routes/parking');
app.use('/api', parkingRoutes);
