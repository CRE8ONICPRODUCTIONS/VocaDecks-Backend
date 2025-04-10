// controllers/authController.js

exports.signup = (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required." });
    }

    // Stubbed response (replace with real DB logic)
    res.status(200).json({ message: "User registered successfully!" });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    // Stubbed check (replace with real DB query + password hash check)
    if (email === "test@example.com" && password === "123456") {
        return res.status(200).json({ message: "Login successful!" });
    } else {
        return res.status(401).json({ message: "Invalid credentials." });
    }
};

exports.updateProfile = (req, res) => {
    // This would update user data in the DB
    res.status(200).json({ message: "Profile updated successfully." });
};

exports.deleteAccount = (req, res) => {
    // This would delete user account in the DB
    res.status(200).json({ message: "Account deleted successfully." });
};
