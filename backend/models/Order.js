const { connectToDatabase } = require('../lib/db');

async function createOrder(orderData) {
  const { db } = await connectToDatabase();
  const order = {
    ...orderData,
    orderId: `ORD-${Date.now()}`,
    createdAt: new Date(),
  };
  const result = await db.collection('orders').insertOne(order);
  return { _id: result.insertedId, ...order };
}

async function getOrdersByUser(email) {
  const { db } = await connectToDatabase();
  return db.collection('orders').find({ userEmail: email.toLowerCase() }).toArray();
}

async function updateOrdersEmail(oldEmail, newEmail) {
  const { db } = await connectToDatabase();
  return db.collection('orders').updateMany(
    { userEmail: oldEmail.toLowerCase() },
    { $set: { userEmail: newEmail.toLowerCase() } }
  );
}

module.exports = { createOrder, getOrdersByUser, updateOrdersEmail };
