// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const http = require('http');
const path = require('path');
require('dotenv').config();
const User = require('./models/User'); // adjust path if needed


// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();
const MONGO_URI = process.env.MONGO_URI;


// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
        process.exit(1);
    });

// Import routes (only once)
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('You have entered a non-VocaDecks area. Please return to the game.');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Constant ping - ping yourself every 5 minutes (300000 ms)
setInterval(() => {
    // Use a template literal for URL interpolation
    const url = process.env.SELF_URL || `https://vocadecks-backend.onrender.com:${PORT}`;
    console.log(`🔁 Pinging ${url}`);

    // Choose HTTP or HTTPS client based on URL prefix
    const client = url.startsWith('https') ? https : http;
    client.get(url, (res) => {
        console.log(`Ping response: ${res.statusCode}`);
    }).on('error', (err) => {
        console.error('Ping error:', err.message);
    });
}, 300000); // 5 minutes


  
  // Route: Sign Up
  app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
  
    // Check for existing user
    const existing = await User.findOne({ email });
    if (existing) {
      return res.json({ message: 'Email already registered.' });
    }
  
    const user = new User({ username, email, password });
    await user.save();
  
    return res.json({ message: 'Account created successfully.' });
  });
  
  // Route: Delete Account
  app.post('/deleteaccount', async (req, res) => {
    const { username, email, password } = req.body;
  
    const deleted = await User.findOneAndDelete({ username, email, password });
    if (deleted) {
      return res.json({ message: 'Account deleted successfully.' });
    } else {
      return res.json({ message: 'No matching account found.' });
    }
  });
