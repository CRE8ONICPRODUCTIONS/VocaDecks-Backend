// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController');

// Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile);  // If yuh add updateProfile later
router.delete('/deleteAccount', authController.deleteAccount); // If yuh add deleteAccount later

module.exports = router;
