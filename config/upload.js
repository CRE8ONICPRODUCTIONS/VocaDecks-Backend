// config/upload.js
const multer = require('multer');

// Use memory storage so we can easily convert file to base64
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

module.exports = upload;
