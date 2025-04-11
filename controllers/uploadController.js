// controllers/uploadController.js

const axios = require('axios');
const FormData = require('form-data');
const User = require('../models/User');

// FreeImage.host API KEY and URL
const API_KEY = '6d207e02198a847aa98d0a2a901485a5';
const FREEIMAGE_UPLOAD_URL = 'https://freeimage.host/api/1/upload';

exports.uploadProfilePicture = async (req, res) => {
  try {
    // 'avatar' is di name fi di file field from client
    if (!req.file) {
      return res.status(400).json({ msg: 'No image file provided.' });
    }

    // Convert file buffer to base64 string
    const base64Image = req.file.buffer.toString('base64');

    // Set up form data for di upload request
    const form = new FormData();
    form.append('source', base64Image);
    form.append('type', 'base64');
    form.append('key', API_KEY);

    // Send POST request to FreeImage.host
    const response = await axios.post(FREEIMAGE_UPLOAD_URL, form, {
      headers: form.getHeaders(),
    });

    // Check if di upload was successful
    if (response.data && response.data.image && response.data.image.url) {
      const imageUrl = response.data.image.url;
      // Optionally, update di user document with di new profile picture URL
      const { userId } = req.body;
      await User.findByIdAndUpdate(userId, { profileImage: imageUrl });
      return res.status(200).json({ msg: 'Image uploaded successfully', url: imageUrl });
    } else {
      return res.status(500).json({ msg: 'FreeImage.host did not return an image URL' });
    }
  } catch (error) {
    console.error("Image upload error: ", error.response?.data || error.message);
    return res.status(500).json({ msg: 'Image upload failed', error: error.response?.data || error.message });
  }
};
