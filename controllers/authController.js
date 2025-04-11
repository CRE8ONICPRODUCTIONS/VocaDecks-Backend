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

    // Log the incoming data for debugging
    console.log("Received login request with email:", email, "and password:", password);

    // Check if user exists
    let user = await User.findOne({ email });
    if (!user) {
        console.log("User not found");
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Log if user is found
    console.log("User found:", user);

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log("Password does not match");
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    // Log if password match
    console.log("Password matched");

    // Generate a JWT token (if you are using JWT for sessions)
    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send the token as the response
    res.status(200).json({
        msg: 'Login successful',
        token,  // Sending token if you're using JWT
    });
};
