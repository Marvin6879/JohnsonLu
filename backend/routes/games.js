const express = require('express');
const Game = require('../models/Game');
const router = express.Router();

router.get('/', async (req, res) => {
  const games = await Game.find();
  res.json(games);
});

router.post('/', async (req, res) => {
  const { title, genre, description, image, addedBy } = req.body;
  const game = new Game({ title, genre, description, image, addedBy });
  await game.save();
  res.status(201).json(game);
});

module.exports = router;