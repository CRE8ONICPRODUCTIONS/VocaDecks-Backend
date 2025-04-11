// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController');

// Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile); // Make sure you have the updateProfile function in the controller
router.delete('/deleteAccount', authController.deleteAccount); // Make sure you have the deleteAccount function in the controller

module.exports = router;
