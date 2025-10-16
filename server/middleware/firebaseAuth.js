const admin = require('../lib/firebase-admin');
const User = require('../models/User');

const firebaseAuth = async (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    
    const token = authHeader.replace('Bearer ', '');
    
    // Verify the Firebase ID token
    const decodedToken = await admin.auth().verifyIdToken(token);
    
    // Get user from Firebase
    const firebaseUser = await admin.auth().getUser(decodedToken.uid);
    
    // Check if user exists in our database
    let user = await User.findOne({ email: firebaseUser.email });
    
    // If user doesn't exist in our database, create them
    if (!user) {
      user = new User({
        name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
        email: firebaseUser.email,
        // We don't store password for Firebase users
        password: 'firebase-user', // Placeholder, won't be used for authentication
        role: 'customer',
        isActive: true,
        lastLogin: new Date()
      });
      
      await user.save();
    } else {
      // Update last login
      user.lastLogin = new Date();
      await user.save();
    }
    
    // Add user info to request
    req.user = {
      id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
      firebaseUid: decodedToken.uid
    };
    
    next();
  } catch (error) {
    console.error('Firebase Auth Error:', error);
    res.status(401).json({ message: 'Token is not valid' });
  }
};

module.exports = firebaseAuth;