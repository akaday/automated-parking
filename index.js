const express = require('express');
const mongoose = require('mongoose');
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

mongoose.connect('mongodb://localhost:27017/parking', { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 5000;

const parkingRoutes = require('./routes/parking');
app.use('/api', parkingRoutes);

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
