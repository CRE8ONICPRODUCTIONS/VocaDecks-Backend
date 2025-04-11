// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const uploadController = require('../controllers/uploadController');
const upload = require('../config/upload');

// Existing routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile);
router.delete('/deleteAccount', authController.deleteAccount);

// New route fi profile picture upload
router.post('/uploadAvatar', upload.single('avatar'), uploadController.uploadProfilePicture);

module.exports = router;
