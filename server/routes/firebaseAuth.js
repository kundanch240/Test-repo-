const express = require('express');
const router = express.Router();
const firebaseAuth = require('../middleware/firebaseAuth');
const User = require('../models/User');

// GET /api/firebase-auth/profile - Get user profile (Firebase Auth)
router.get('/profile', firebaseAuth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// PUT /api/firebase-auth/profile - Update user profile (Firebase Auth)
router.put('/profile', firebaseAuth, async (req, res) => {
  try {
    const updates = req.body;
    delete updates.password; // Don't allow password updates
    delete updates.role; // Don't allow role changes
    delete updates.email; // Don't allow email changes for Firebase users
    
    const user = await User.findByIdAndUpdate(
      req.user.id,
      updates,
      { new: true, runValidators: true }
    ).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: 'Error updating profile', error: error.message });
  }
});

// POST /api/firebase-auth/verify-token - Verify Firebase token
router.post('/verify-token', firebaseAuth, async (req, res) => {
  try {
    res.json({
      message: 'Token is valid',
      user: {
        id: req.user.id,
        email: req.user.email,
        name: req.user.name,
        role: req.user.role
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;