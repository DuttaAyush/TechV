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

async function getAllLeads() {
  const { db } = await connectToDatabase();
  return await db.collection('leads').find({ archived: { $ne: true } }).sort({ createdAt: -1 }).toArray();
}

async function updateLeadDetails(id, updates) {
  const { db } = await connectToDatabase();
  const { ObjectId } = require('mongodb');
  const result = await db.collection('leads').updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...updates, updatedAt: new Date() } }
  );
  return result.modifiedCount > 0;
}

module.exports = { createLead, getAllLeads, updateLeadDetails };
