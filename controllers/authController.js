const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Adjust according to your model path
const jwt = require('jsonwebtoken');

// Signup function (existing function)
exports.signup = async (req, res) => {
    const { email, password, username } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
    }

    // Create new user and hash password
    user = new User({ email, password, username });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save the new user
    await user.save();
    res.status(200).json({ msg: 'User created successfully' });
};

// Login function (added function)
exports.login = async (req, res) => {
    const { email, password } = req.body;

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Generate a JWT token (if you are using JWT for sessions)
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
        msg: 'Login successful',
        token,  // Sending token if you're using JWT
    });
};

// Update profile function (new function)
exports.updateProfile = async (req, res) => {
    const { userId, username, email } = req.body;

    // Find the user by ID
    let user = await User.findById(userId);
    if (!user) {
        return res.status(400).json({ msg: 'User not found' });
    }

    // Update the user's details
    user.username = username || user.username;
    user.email = email || user.email;

    // Save the updated user
    await user.save();
    res.status(200).json({ msg: 'Profile updated successfully' });
};

// Delete account function (new function)
exports.deleteAccount = async (req, res) => {
    const { userId } = req.body;

    // Find the user by ID
    let user = await User.findById(userId);
    if (!user) {
        return res.status(400).json({ msg: 'User not found' });
    }

    // Delete the user account
    await user.remove();
    res.status(200).json({ msg: 'Account deleted successfully' });
};

// Other auth functions can go here as needed...
