const express = require('express');
const { processCheckout } = require('../controllers/checkoutController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

// Public checkout route (allows guest checkout)
router.post('/', processCheckout);

// Example of a protected route using the middleware
router.get('/history', authenticateToken, (req, res) => {
  res.json({ success: true, message: "Authorized to view order history", user: req.user });
});

module.exports = router;
