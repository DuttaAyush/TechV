const { connectToDatabase } = require('../lib/db');

async function createLead(leadData) {
  const { db } = await connectToDatabase();
  const lead = {
    ...leadData,
    createdAt: new Date(),
    status: 'New'
  };
  
  const result = await db.collection('leads').insertOne(lead);
  return { _id: result.insertedId, ...lead };
}

module.exports = { createLead };
