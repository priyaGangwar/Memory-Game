const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;
const Score = require('./models/Score');

const Score = require('./Score');

app.use(cors());
app.use(express.json());

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://https://priyagangwar.github.io/Memory-Game/', { useNewUrlParser: true, useUnifiedTopology: true });

// Define routes here

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});

// Save a new score
app.post('/api/scores', async (req, res) => {
  try {
    const newScore = new Score(req.body);
    await newScore.save();
    res.status(201).json(newScore);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get top 10 scores
app.get('/api/leaderboard', async (req, res) => {
  try {
    const topScores = await Score.find().sort({ score: -1 }).limit(10);
    res.json(topScores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Handling Game State (Server-Side)
//You might want to manage certain parts of the game state, like user scores or multiplayer interactions, on the server.
//In server.js
app.use(express.json());

let highScores = [];

app.post('/api/score', (req, res) => {
    const { score } = req.body;
    highScores.push(score);
    res.json({ message: "Score saved!", highScores });
});
