const jwt = require('jsonwebtoken');
const { getAllLeads, updateLeadDetails } = require('../models/Lead');
const { getAllUsers } = require('../models/User');
const { getAllOrders } = require('../models/Order');
const { getAllServices, createService, deleteService, seedDefaultServices } = require('../models/Service');

// Admin Login
async function loginAdmin(req, res) {
  const { password, otp } = req.body;
  
  // Hardcoded for now as requested
  if (password === 'admin123' && otp === '123456') {
    const JWT_SECRET = process.env.JWT_SECRET || 'vrtans_secret_key';
    const token = jwt.sign({ role: 'admin', name: 'Super Admin' }, JWT_SECRET, { expiresIn: '12h' });
    return res.json({ success: true, token });
  }
  
  return res.status(401).json({ error: 'Invalid credentials or OTP' });
}

const { Parser } = require('json2csv');

// Leads
async function exportLeadsCSV(req, res) {
  try {
    const leads = await getAllLeads();
    const fields = ['firstName', 'lastName', 'email', 'company', 'serviceOfInterest', 'status', 'notes', 'createdAt'];
    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(leads);
    
    res.header('Content-Type', 'text/csv');
    res.attachment('leads.csv');
    return res.send(csv);
  } catch (error) {
    res.status(500).json({ error: 'Failed to export CSV' });
  }
}

async function getLeads(req, res) {
  try {
    const leads = await getAllLeads();
    res.json({ success: true, leads });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
}

async function updateLead(req, res) {
  try {
    const { id } = req.params;
    
    const updates = {};
    if (req.body.status !== undefined) updates.status = req.body.status;
    if (req.body.notes !== undefined) updates.notes = req.body.notes;
    if (req.body.archived !== undefined) updates.archived = req.body.archived;

    const updated = await updateLeadDetails(id, updates);
    if (updated) {
      res.json({ success: true, message: 'Lead updated' });
    } else {
      res.status(404).json({ error: 'Lead not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update lead' });
  }
}

// Users
async function getUsers(req, res) {
  try {
    const users = await getAllUsers();
    res.json({ success: true, users });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
}

// Orders
async function getOrders(req, res) {
  try {
    const orders = await getAllOrders();
    res.json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
}

// Services
async function getServices(req, res) {
  try {
    await seedDefaultServices(); // Ensure defaults exist
    const services = await getAllServices();
    res.json({ success: true, services });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch services' });
  }
}

async function addService(req, res) {
  try {
    const service = await createService(req.body);
    res.json({ success: true, service });
  } catch (error) {
    res.status(500).json({ error: 'Failed to add service' });
  }
}

async function removeService(req, res) {
  try {
    const { id } = req.params;
    const deleted = await deleteService(id);
    if (deleted) res.json({ success: true });
    else res.status(404).json({ error: 'Service not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete service' });
  }
}

async function editService(req, res) {
  try {
    const { id } = req.params;
    const { updateService } = require('../models/Service');
    const updated = await updateService(id, req.body);
    if (updated) res.json({ success: true });
    else res.status(404).json({ error: 'Service not found' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update service' });
  }
}

module.exports = {
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
};
