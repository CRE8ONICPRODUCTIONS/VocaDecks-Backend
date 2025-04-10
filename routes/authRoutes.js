// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController');

// Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile);
router.delete('/deleteAccount', authController.deleteAccount);

module.exports = router;
