const User = require('../models/User'); // Make sure di path and casing match exactly
const jwt = require('jsonwebtoken');

// Login function (plain text comparison, as requested)
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request received:", req.body);

        if (!email || !password) {
            return res.status(400).json({ msg: "Email and password required" });
        }

        let user = await User.findOne({ email });
        if (!user) {
            console.log("User not found for email:", email);
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Compare passwords as plain text (since passwords aren't hashed in di database)
        if (password !== user.password) {
            console.log("Password mismatch. Expected:", user.password, "Received:", password);
            return res.status(400).json({ msg: "Invalid credentials" });
        }

        // Generate a JWT token
        const payload = { userId: user._id };
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({
            msg: "Login successful",
            token: token,
            username: user.username,
            email: user.email,
            deleted: user.deleted
        });
    } catch (err) {
        console.error("Login error: ", err);
        res.status(500).json({ msg: "Server error" });
    }
};

// Update profile function (stub implementation)
exports.updateProfile = async (req, res) => {
    try {
        const { userId, username, email } = req.body;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
        user.username = username || user.username;
        user.email = email || user.email;
        await user.save();
        res.status(200).json({ msg: "Profile updated successfully" });
    } catch (err) {
        console.error("Update profile error: ", err);
        res.status(500).json({ msg: "Server error" });
    }
};

// Delete account function (stub implementation)
exports.deleteAccount = async (req, res) => {
    try {
        const { userId } = req.body;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }
        await user.remove();
        res.status(200).json({ msg: "Account deleted successfully" });
    } catch (err) {
        console.error("Delete account error: ", err);
        res.status(500).json({ msg: "Server error" });
    }
};
