const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController'); // Correct import

// Routes
router.post('/signup', authController.signup);  // Correct route handler
router.post('/login', authController.login);    // Correct route handler
router.put('/updateProfile', authController.updateProfile); // If defined
router.delete('/deleteAccount', authController.deleteAccount); // If defined

module.exports = router;
