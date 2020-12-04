const express = require('express');
const router = express.Router();
const path = require('path');
const User = require('../models/users');

router.get('/form', (req, res) => {
  res.render('regForm');
});

// saving data
router.post('/form', async (req, res) => {
  res.send('Thank you for submitting');
  try {
    console.log(req.body);
    const items = new User(req.body);
    await items.save();
    res.send('Thanks for submitting');
  } catch (err) {
    res.send('Sorry! Something went wrong');
    console.log(err);
  }
});

module.exports = router;
