const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { getUserByEmail, createUser } = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'vrtans_secret_key';

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const user = await getUserByEmail(email);
    if (!user) return res.status(400).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '1d' });

    res.json({ success: true, token, user: { email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

async function register(req, res) {
  try {
    const { email, password, name } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password required' });

    const existingUser = await getUserByEmail(email);
    if (existingUser) return res.status(400).json({ error: 'User already exists' });

    const newUser = await createUser({ email, password, name });
    
    const token = jwt.sign({ email: newUser.email, name: newUser.name }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ success: true, token, user: { email: newUser.email, name: newUser.name } });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { login, register };
