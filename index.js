const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('./middleware/bodyParser');
const connectDB = require('./config/database');

const app = express();
app.use(bodyParser);
=======
const bodyParser = require('body-parser');
const cors = require('cors');
const rateLimit = require('express-rate-limit');  // Importing the module
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set up rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});
app.use(limiter);


connectDB();

const port = process.env.PORT || 5002;

const parkingRoutes = require('./routes/parking');
app.use('/api', parkingRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

// Handle invalid routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' });
=======
// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server running on port ${port}`);

});
