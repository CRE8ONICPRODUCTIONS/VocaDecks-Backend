const bcrypt = require('bcryptjs');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Signup function
exports.signup = async (req, res) => {
    const { email, password, username } = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ msg: 'Email already exists' });
    }

    user = new User({ email, password, username });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.status(200).json({ msg: 'User created successfully' });
};

// Login function
exports.login = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
    }

    const payload = { userId: user._id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
        msg: 'Login successful',
        token,
    });
};

// Other functions like updateProfile, deleteAccount, etc. can be here.
