const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = 'VRTANS';

let cachedClient = global.mongoClient;
let cachedDb = global.mongoDb;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect(uri);
  const db = client.db(dbName);

  if (process.env.NODE_ENV !== 'production') {
    global.mongoClient = client;
    global.mongoDb = db;
  }

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

module.exports = { connectToDatabase };
