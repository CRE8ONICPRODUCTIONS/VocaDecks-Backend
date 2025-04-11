const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController');

// Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);

// Check if updateProfile and deleteAccount functions are properly defined in authController
router.put('/updateProfile', authController.updateProfile);
router.delete('/deleteAccount', authController.deleteAccount);

module.exports = router;
