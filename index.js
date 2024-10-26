const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Pe8ca

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Pe8ca

mongoose.connect('mongodb://localhost:27017/parking', { useNewUrlParser: true, useUnifiedTopology: true });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

const parkingRoutes = require('./routes/parking');
app.use('/api', parkingRoutes);

app.use(express.static('public')); // P58d1
