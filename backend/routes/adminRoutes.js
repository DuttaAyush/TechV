const express = require('express');
const { adminAuthMiddleware } = require('../middlewares/adminMiddleware');
const {
  loginAdmin,
  getLeads,
  exportLeadsCSV,
  updateLead,
  getUsers,
  getOrders,
  getServices,
  addService,
  removeService,
  editService
} = require('../controllers/adminController');

const router = express.Router();

// Public route for admin login
router.post('/login', loginAdmin);

// Public route to fetch services for homepage
router.get('/services', getServices);

// Protected routes
router.use(adminAuthMiddleware);

router.get('/leads', getLeads);
router.get('/leads/export', exportLeadsCSV);
router.put('/leads/:id', updateLead);

router.get('/users', getUsers);
router.get('/orders', getOrders);

router.post('/services', addService);
router.put('/services/:id', editService);
router.delete('/services/:id', removeService);

module.exports = router;
