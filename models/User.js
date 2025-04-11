const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profileImage: { type: String } // Will hold di URL from FreeImage.host
});

module.exports = mongoose.models.User || mongoose.model('User', userSchema);
