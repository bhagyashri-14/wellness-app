const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/wellness');

app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/sessions'));

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));