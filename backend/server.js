const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const userRoutes = require('./routes/userRoutes');
const leadRoutes = require('./routes/leadRoutes');
const adminRoutes = require('./routes/adminRoutes');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const compression = require('compression');
const logger = require('./utils/logger');

// Critical Environment Validation
if (!process.env.MONGODB_URI) {
  logger.error('CRITICAL ERROR: MONGODB_URI is missing from environment variables!');
  process.exit(1);
}

const app = express();

// Security & Production Middlewares
app.use(helmet());
app.use(compression());
app.use(morgan('combined', { stream: { write: message => logger.info(message.trim()) } }));

// Rate Limiting (100 requests per 15 minutes)
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, please try again later.' }
});
app.use('/api/', limiter);

// Background Cleanup Job (Runs every 7 days)
setInterval(async () => {
  try {
    const { connectToDatabase } = require('./lib/db');
    const { db } = await connectToDatabase();
    const result = await db.collection('leads').deleteMany({ archived: true });
    if (result.deletedCount > 0) {
      console.log(`[Cleanup] Deleted ${result.deletedCount} archived leads.`);
    }
  } catch (err) {
    console.error('[Cleanup Error]', err);
  }
}, 7 * 24 * 60 * 60 * 1000); // 7 days in milliseconds

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
