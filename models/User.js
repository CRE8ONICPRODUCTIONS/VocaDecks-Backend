const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true }, // Require username
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }  // Plain text for testing (not recommended for production)
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
