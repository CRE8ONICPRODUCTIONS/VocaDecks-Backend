const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController');

// Routes
// If yuh no longer using signup, yuh can remove dis route. But fi now, mi leave only login, updateProfile, and deleteAccount.
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile);
router.delete('/deleteAccount', authController.deleteAccount);

module.exports = router;
