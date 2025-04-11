const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile);
router.delete('/deleteAccount', authController.deleteAccount);

module.exports = router;
