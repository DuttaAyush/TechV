const jwt = require('jsonwebtoken');
const { getUserByEmail, updateUser } = require('../models/User');
const { getOrdersByUser, updateOrdersEmail } = require('../models/Order');

async function getProfile(req, res) {
  try {
    const email = req.user.email;
    const user = await getUserByEmail(email);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const orders = await getOrdersByUser(email);

    // Return user without password
    const { password, ...safeUser } = user;
    
    res.json({ success: true, user: safeUser, orders });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function updateProfile(req, res) {
  try {
    const currentEmail = req.user.email;
    const { name, company, password, email } = req.body;
    
    const updates = {};
    let newEmail = currentEmail;
    
    if (name) updates.name = name;
    if (company) updates.company = company;
    if (password) updates.password = password; 
    
    if (email && email !== currentEmail) {
      // Check if new email already exists
      const existing = await getUserByEmail(email);
      if (existing) {
        return res.status(400).json({ error: 'Email is already in use by another account.' });
      }
      updates.email = email.toLowerCase();
      newEmail = updates.email;
    }

    await updateUser(currentEmail, updates);

    // If email changed, update orders
    if (newEmail !== currentEmail) {
      await updateOrdersEmail(currentEmail, newEmail);
    }
    
    // Always fetch updated user to return
    const updatedUser = await getUserByEmail(newEmail);
    const { password: _, ...safeUser } = updatedUser;
    
    // Generate new token in case email changed
    const token = jwt.sign(
      { userId: safeUser._id, email: safeUser.email },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '24h' }
    );

    res.json({ success: true, message: 'Profile updated successfully', user: safeUser, token });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { getProfile, updateProfile };
