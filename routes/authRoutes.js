const express = require('express');
const router = express.Router();

// Import only the functions that exist
const {
    login,
    updateProfile,
    deleteAccount
} = require('../controllers/authController');

// Routes
router.post('/login', login);                  // ✅ login exists
router.put('/updateProfile', updateProfile);   // ✅ updateProfile exists
router.delete('/deleteAccount', deleteAccount); // ✅ deleteAccount exists

module.exports = router;
