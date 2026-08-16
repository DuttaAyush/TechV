const { createLead } = require('../models/Lead');
const { z } = require('zod');

const leadSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(50),
  lastName: z.string().min(1, 'Last name is required').max(50),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  serviceOfInterest: z.string().min(1, 'Service is required'),
  message: z.string().max(1000).optional()
});

async function submitLead(req, res) {
  try {
    // We map frontend inputs to the Zod schema
    const data = {
      firstName: req.body.firstName || req.body.name?.split(' ')[0] || 'Unknown',
      lastName: req.body.lastName || req.body.name?.split(' ').slice(1).join(' ') || 'Unknown',
      email: req.body.email,
      company: req.body.company || '',
      serviceOfInterest: req.body.interest || req.body.serviceOfInterest || 'General Inquiry',
      message: req.body.message
    };
    
    const validatedData = leadSchema.parse(data);
    const newLead = await createLead(validatedData);

    res.status(201).json({ success: true, message: 'Lead successfully created', lead: newLead });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors[0].message });
    }
    console.error('Lead submission error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { submitLead };
