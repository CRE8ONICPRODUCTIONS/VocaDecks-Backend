✝DrakeIsUnsafe✝
__drakeisunsafe__
Sharing their screen

✝DrakeIsUnsafe✝ — 08/04/2025 20:09
Nigga I'm busy
Charlie — 08/04/2025 20:09
How
✝DrakeIsUnsafe✝ — 08/04/2025 20:09
I'm doing the game
Charlie — 08/04/2025 20:09
ur designing it
✝DrakeIsUnsafe✝ — 08/04/2025 20:10
Yeah and installing unity cos no one else will do it
Charlie — 08/04/2025 20:10
The Angel person
✝DrakeIsUnsafe✝ — 08/04/2025 20:10
She can help but I wanna do most of it myself
Charlie — 08/04/2025 20:11
mk
ill call u in a bit, once i've finished fn
✝DrakeIsUnsafe✝ — 08/04/2025 20:14
Aight
✝DrakeIsUnsafe✝ — 08/04/2025 20:40
Image
Charlie — 08/04/2025 20:40
nice
✝DrakeIsUnsafe✝ — 08/04/2025 21:58
can u call
Charlie — 08/04/2025 22:00
gimme a few, watching police shootouts rn
Charlie started a call that lasted 5 hours. — 08/04/2025 22:11
Charlie — 08/04/2025 22:39
https://www.youtube.com/watch?v=hIX0qAkp3y8
YouTube
FastTrack Studios
out with the old... in with the new
Image
✝DrakeIsUnsafe✝ — 08/04/2025 22:41
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;

public class ImageSwitcher : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
{
    public GameObject soloImage;
    public GameObject duoImage;
    public GameObject takedownImage;

    public GameObject soloButton;
    public GameObject duoButton;
    public GameObject takedownButton;

    public void Start()
    {
        // Initially hide all images
        soloImage.SetActive(false);
        duoImage.SetActive(false);
        takedownImage.SetActive(false);
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        // Hide all images first
        soloImage.SetActive(false);
        duoImage.SetActive(false);
        takedownImage.SetActive(false);

        // Show the corresponding image based on the button hovered over
        if (eventData.pointerCurrentRaycast.gameObject == soloButton)
        {
            soloImage.SetActive(true);
        }
        else if (eventData.pointerCurrentRaycast.gameObject == duoButton)
        {
            duoImage.SetActive(true);
        }
        else if (eventData.pointerCurrentRaycast.gameObject == takedownButton)
        {
            takedownImage.SetActive(true);
        }
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        // Hide all images when the mouse exits the button
        soloImage.SetActive(false);
        duoImage.SetActive(false);
        takedownImage.SetActive(false);
    }
}
Charlie — 08/04/2025 22:43
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using System.Collections;

public class ImageSwitcher : MonoBehaviour, IPointerEnterHandler, IPointerExitHandler
Expand
message.txt
3 KB
Charlie — 08/04/2025 22:52
Image
Image
This works almost correctly, but I want it so when one is hovered, that image shows, and the others do not. If an image is already hovered to show, it stays shown, and once I hover over another button, cross fade them out, so only the next hovered one is shows. Here is a timeline of what I want:

I hover over button 1 -> button 1 image shows -> Stop hovering, image stays -> I hover over button 2 -> button 1 image fades out -> button 2 image fades in -> stop hovering, image stays -> etc
✝DrakeIsUnsafe✝ — Yesterday at 01:28
https://we.tl/t-lYdHVJQg7S
v.1.0.rar
1 file sent via WeTransfer, the simplest way to send your files around the world
Charlie — Yesterday at 01:52
https://discussions.unity.com/t/how-do-i-force-the-game-to-run-at-a-given-aspect-ratio/876254
Charlie — Yesterday at 02:43
a whole chicken or chicken thighs, along with root vegetables like potatoes, carrots, and onions, often seasoned with herbs, spices, and oil
✝DrakeIsUnsafe✝ — Yesterday at 02:46
Image
✝DrakeIsUnsafe✝ — Yesterday at 03:20
https://we.tl/t-BoX712Rvwe
v.1.1.rar
1 file sent via WeTransfer, the simplest way to send your files around the world
Charlie — Yesterday at 03:31
just realised, in the credits of the FNAF Movie, The Puppet says Come Find Me
✝DrakeIsUnsafe✝ — Yesterday at 03:33
Mate everyone realised that 2 years ago lmao
Charlie — Yesterday at 03:33
bro, i am slow
aight
✝DrakeIsUnsafe✝ — Yesterday at 03:34
Crumble.
Image
Charlie — Yesterday at 03:34
lmao
✝DrakeIsUnsafe✝ — Yesterday at 03:36
La la la lava
Ch Ch Ch chicken
Charlie — Yesterday at 03:36
ch ch ch chicken
Steves lava chicken
✝DrakeIsUnsafe✝ — Yesterday at 03:36
Yeah its tasty as hell
Oooh mama cita yeah you're ringing the bell
✝DrakeIsUnsafe✝ — Yesterday at 18:34
Can u call
Charlie — Yesterday at 19:10
just got home
✝DrakeIsUnsafe✝ — Yesterday at 19:20
Kk well I have a surprise
Charlie — Yesterday at 19:21
is it that game build
✝DrakeIsUnsafe✝ — Yesterday at 19:21
Yeah but I added some stuff
You missed a call from Charlie that lasted a few seconds. — Yesterday at 19:24
✝DrakeIsUnsafe✝ — Yesterday at 19:24
Lemme get kn my pc
Charlie — Yesterday at 19:24
k
✝DrakeIsUnsafe✝ started a call that lasted 2 hours. — Yesterday at 19:24
✝DrakeIsUnsafe✝ — Yesterday at 19:35
https://we.tl/t-cTbk44DS8I
v.1.6.rar
1 file sent via WeTransfer, the simplest way to send your files around the world
Charlie — Yesterday at 20:11
Charlie — Yesterday at 20:20
https://discussions.unity.com/t/audio-slider-in-unity-done-right-unity-tutorial/873505
✝DrakeIsUnsafe✝ started a call. — 00:09
Charlie — 00:11
mongodb+srv://admin:fredfred123@lx-tech.zoryjvs.mongodb.net/
Download this:

https://www.mongodb.com/try/download/compass
MongoDB
MongoDB Compass Download (GUI)
MongoDB Compass, the GUI for MongoDB, is the easiest way to explore and manipulate your data. Download for free for dev environments.
MongoDB Compass Download (GUI)
✝DrakeIsUnsafe✝ — 00:18
// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Create an instance of Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({ extended: true })); // Parses URL-encoded bodies

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit process with failure if unable to connect
});

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend server!');
});

// Define the port to listen on from environment variables or default to 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
✝DrakeIsUnsafe✝ — 00:27
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true, 
    lowercase: true 
  },
  password: { 
    type: String, 
    required: true 
  },
  firstName: { 
    type: String 
  },
  lastName: { 
    type: String 
  },
  // Other fields (roles, profilePicture, etc.) can be added here
}, { timestamps: true });

// Pre-save hook to hash password on save
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Instance method to compare passwords
UserSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = async (req, res) => {
  const { username, email, password, firstName, lastName } = req.body;
  if (!username  !email  !password) {
    return res.status(400).json({ message: "Username, email and password are required" });
  }
  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(409).json({ message: "User with this email already exists" });
    }
    // Create the user (password gets hashed by pre-save hook)
    user = new User({ username, email, password, firstName, lastName });
    await user.save();

    // Optionally, generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return res.status(201).json({ message: "User registered successfully", token, user });
  } catch (error) {
    console.error("Signup error", error);
    return res.status(500).json({ message: "Server error during signup" });
  }
};
Charlie — 00:46
Attachment file type: archive
VocaDecks-Backend.zip
3.77 MB
Charlie — 02:23
https://ollie-mclays-team.adalo.com/x-vision-app
✝DrakeIsUnsafe✝ — 02:27
Attachment file type: archive
VocaDecks-Backend.rar
7.52 MB
Charlie — 02:33
Attachment file type: archive
VocaDecks-Backend (2).zip
8.36 MB
// routes/authRoutes.js

const express = require('express');
const router = express.Router();

// Controller methods
const authController = require('../controllers/authController');

// Routes
router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.put('/updateProfile', authController.updateProfile);
router.delete('/deleteAccount', authController.deleteAccount);

module.exports = router;
authRoutes.js
// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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

        // Create the user (password gets hashed by pre-save hook in the User model)
        user = new User({ username, email, password, firstName, lastName });
        await user.save();

        // Optionally, generate a JWT token for the user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(201).json({ message: "User registered successfully", token, user });
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
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("Login error", error);
        return res.status(500).json({ message: "Server error during login" });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    // Assume req.user is set by authentication middleware
    const updateData = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, updateData, { new: true });
        return res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
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
Collapse
message.txt
3 KB
﻿
// controllers/authController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

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

        // Create the user (password gets hashed by pre-save hook in the User model)
        user = new User({ username, email, password, firstName, lastName });
        await user.save();

        // Optionally, generate a JWT token for the user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        return res.status(201).json({ message: "User registered successfully", token, user });
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
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Invalid email or password" });
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        console.error("Login error", error);
        return res.status(500).json({ message: "Server error during login" });
    }
};

// Update user profile
exports.updateProfile = async (req, res) => {
    // Assume req.user is set by authentication middleware
    const updateData = req.body;
    try {
        const updatedUser = await User.findByIdAndUpdate(req.user.id, updateData, { new: true });
        return res.status(200).json({ message: "Profile updated successfully", user: updatedUser });
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