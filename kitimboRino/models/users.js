const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  surName: String,
  givenName: String,
  dateOfBirth: Date,
  placeOfResidence: String,
  occupation: String,
  nationality: String,
  category: String,
  gender: String,
});
module.exports = mongoose.model('User', userSchema);
