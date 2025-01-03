const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authenticateToken = require('../middleware/auth');

// Register a new user
router.post('/register', registerUser);

// Login a user
router.post('/login', loginUser);

// Get user profile (protected route)
router.get('/profile', authenticateToken, getUserProfile);

module.exports = router;



