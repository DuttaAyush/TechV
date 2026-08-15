const { createLead } = require('../models/Lead');

async function submitLead(req, res) {
  try {
    const { name, email, interest, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    const leadData = {
      name,
      email: email.toLowerCase(),
      interest: interest || 'General Inquiry',
      message
    };

    const newLead = await createLead(leadData);

    res.status(201).json({ success: true, message: 'Lead successfully created', lead: newLead });
  } catch (error) {
    console.error('Lead submission error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { submitLead };
