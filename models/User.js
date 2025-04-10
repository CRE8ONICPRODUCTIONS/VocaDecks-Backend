const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Ensure bcrypt is required
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // Add other fields as necessary (e.g., username)
});

// Define a method to compare passwords
userSchema.methods.comparePassword = function (candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password); // Compare the passwords
};

const User = mongoose.model('User', userSchema);
module.exports = User;
