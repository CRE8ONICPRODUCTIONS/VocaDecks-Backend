const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Ensure di file path matches exactly
const jwt = require('jsonwebtoken');

// Signup function
exports.signup = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!email || !password || !username) {
            return res.status(400).json({ msg: 'Email, password, and username are required' });
        }
        // Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'Email already exists' });
        }
        // Create new user and hash password
        user = new User({ email, password, username });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        res.status(200).json({ msg: 'User created successfully' });
    } catch (err) {
        console.error("Signup error: ", err);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Login function
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request body:", req.body); // Log di incoming data

        if (!email || !password) {
            return res.status(400).json({ msg: 'Email and password required' });
        }

        let user = await User.findOne({ email });
        if (!user) {
            console.log("User not found for email:", email);
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the plain password with di hashed password stored in di database
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password comparison result:", isMatch);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Generate JWT token
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Return success response along with user details
        res.status(200).json({
            msg: 'Login successful',
            token: token,
            username: user.username,
            email: user.email,
            deleted: user.deleted
        });
    } catch (err) {
        console.error("Login error: ", err);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Update profile function (stub implementation)
exports.updateProfile = async (req, res) => {
    try {
        const { userId, username, email } = req.body;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        user.username = username || user.username;
        user.email = email || user.email;
        await user.save();
        res.status(200).json({ msg: 'Profile updated successfully' });
    } catch (err) {
        console.error("Update profile error: ", err);
        res.status(500).json({ msg: 'Server error' });
    }
};

// Delete account function (stub implementation)
exports.deleteAccount = async (req, res) => {
    try {
        const { userId } = req.body;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }
        await user.remove();
        res.status(200).json({ msg: 'Account deleted successfully' });
    } catch (err) {
        console.error("Delete account error: ", err);
        res.status(500).json({ msg: 'Server error' });
    }
};
