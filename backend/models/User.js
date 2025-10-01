const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String // NOTE: In production, hash passwords!
});

module.exports = mongoose.model('User', userSchema);