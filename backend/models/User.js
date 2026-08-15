const { connectToDatabase } = require('../lib/db');
const bcrypt = require('bcryptjs');

async function getUserByEmail(email) {
  const { db } = await connectToDatabase();
  return db.collection('users').findOne({ email: email.toLowerCase() });
}

async function createUser(userData) {
  const { db } = await connectToDatabase();
  const hashedPassword = await bcrypt.hash(userData.password || 'dummy_password_for_guest', 10);
  
  const user = {
    ...userData,
    email: userData.email.toLowerCase(),
    password: hashedPassword,
    createdAt: new Date(),
  };
  
  const result = await db.collection('users').insertOne(user);
  return { _id: result.insertedId, ...user };
}

async function updateUser(email, updateData) {
  const { db } = await connectToDatabase();
  if (updateData.password) {
    updateData.password = await bcrypt.hash(updateData.password, 10);
  }
  return db.collection('users').updateOne(
    { email: email.toLowerCase() },
    { $set: updateData }
  );
}

module.exports = { getUserByEmail, createUser, updateUser };
