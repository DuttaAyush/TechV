const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const userRoutes = require('./routes/userRoutes');
const leadRoutes = require('./routes/leadRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/user', userRoutes);
app.use('/api/leads', leadRoutes);

app.get('/', (req, res) => {
  res.send('VRTANS Express Backend Server Running');
});

app.listen(PORT, () => {
  console.log(`Backend server listening on port ${PORT}`);
});
