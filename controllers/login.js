const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Ensure bcrypt is required

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        // Find user by email
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare provided password with stored hash using comparePassword method
        const isMatch = await user.comparePassword(password); // Use the method defined above
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // If successful, return a response (you can send a JWT token here or user data)
        return res.status(200).json({ message: "Login successful", user: user });

    } catch (error) {
        console.error("Error logging in user: ", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = login;
