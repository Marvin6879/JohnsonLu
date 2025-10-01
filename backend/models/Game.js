const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: String,
  genre: String,
  description: String,
  image: String,
  addedBy: String,
});

module.exports = mongoose.model('Game', gameSchema);