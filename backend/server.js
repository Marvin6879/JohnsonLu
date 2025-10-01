const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const gameRoutes = require('./routes/games');
const userRoutes = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.json());

// Get MongoDB connection string from env
const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost/johnsonlu';
mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/games', gameRoutes);
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`JohnsonLu backend running on port ${PORT}`);
});