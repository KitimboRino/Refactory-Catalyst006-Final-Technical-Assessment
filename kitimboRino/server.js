// Creating an express server
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Import userRoutes
const userRoutes = require('./routes/userRoutes');

// creates an express app
const app = express();

// DB connection
mongoose.connect(process.env.dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`connection error: ${err.message}`);
  });

// configs
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Instatations for route;
app.use('/', userRoutes);

// Error end point
app.get('*', (req, res) => {
  res.send('Oops error');
});

// Listening for requests on server(3000)
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
