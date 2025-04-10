const bcrypt = require('bcrypt');
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

// Other auth functions like updateProfile, deleteAccount etc. would go here...
