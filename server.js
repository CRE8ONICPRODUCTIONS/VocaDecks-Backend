// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const https = require('https');
const http = require('http');

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
const PORT = process.env.PORT || 5000;
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

const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');

app.use(express.json());
app.use('/api/auth', authRoutes);

mongoose.connect('mongodb://localhost:27017/your-db-name')
  .then(() => {
    console.log("MongoDB connected");
    app.listen(3000, () => console.log("Server running on port 3000"));
  })
  .catch(err => console.error(err));


