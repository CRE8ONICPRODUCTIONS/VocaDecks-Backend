const User = require('../models/user');  // Ensure this points to your User model
const bcrypt = require('bcryptjs');  // Ensure bcrypt is being used for password comparison
const jwt = require('jsonwebtoken');  // Use JWT for authentication tokens

// Handle the login request
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required.' });
    }

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Compare password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password.' });
        }

        // Check if the account is deleted
        if (user.deleted) {
            return res.status(400).json({ message: 'Account is deleted.' });
        }

        // Generate a JWT token for the user (optional, can be used for further sessions)
        const token = jwt.sign(
            { userId: user._id, email: user.email },
            process.env.JWT_SECRET,
            { expiresIn: '1h' } // Token expires in 1 hour
        );

        // Send the response with user details and token
        res.status(200).json({
            username: user.username,
            email: user.email,
            token: token, // You may choose to include this if you're using JWT for further authentication
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
console.log("Login request body: ", req.body);
