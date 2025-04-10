// controllers/authController.js

const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Helper function to remove the password field from a user object.
const sanitizeUser = (user) => {
    // If user is a Mongoose document, convert it to a plain JS object
    const userObj = user.toObject ? user.toObject() : user;
    delete userObj.password;
    return userObj;
};

// Signup - Register new user
exports.signup = async (req, res) => {
    const { username, email, password, firstName, lastName } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ message: "Username, email, and password are required" });
    }
    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: "User with this email already exists" });
        }

        // Create the user (password gets hashed by the pre-save hook in the User model)
        user = new User({ username, email, password, firstName, lastName });
        await user.save();

        // Generate a JWT token for the user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Remove password before sending response
        const userWithoutPassword = sanitizeUser(user);
        return res.status(201).json({ message: "User registered successfully", token, user: userWithoutPassword });
    } catch (error) {
        console.error("Signup error", error);
        return res.status(500).json({ message: "Server error during signup" });
    }
};

// Login - Authenticate and login user
exports.login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
    }
    try {
        // Include password field explicitly since it's set to select: false in the model
        const user = await User.findOne({ email }).select('+password');
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Remove password before sending response
        const userWithoutPassword = sanitizeUser(user);
        return res.status(200).json({ message: "Login successful", token, user: userWithoutPassword });
    } catch (error) {
        console.error("Login error", error);
        return res.status(500).json({ message: "Server error during login" });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    // Assume req.user is set by authentication middleware (not shown here)
    const updateData = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, updateData, { new: true, runValidators: true });
        const userWithoutPassword = sanitizeUser(updatedUser);
        return res.status(200).json({ message: "Profile updated successfully", user: userWithoutPassword });
    } catch (error) {
        console.error("Update profile error", error);
        return res.status(500).json({ message: "Server error during profile update" });
    }
};

// Delete user account
exports.deleteAccount = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.user.id);
        return res.status(200).json({ message: "Account deleted successfully" });
    } catch (error) {
        console.error("Delete account error", error);
        return res.status(500).json({ message: "Server error during account deletion" });
    }
};
