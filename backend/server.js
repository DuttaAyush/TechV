const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const userRoutes = require('./routes/userRoutes');
const leadRoutes = require('./routes/leadRoutes');
const adminRoutes = require('./routes/adminRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Read frontend origin from .env (defaults to localhost:3001 for local development)
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3001',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/user', userRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('VRTANS Express Backend Server Running');
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
