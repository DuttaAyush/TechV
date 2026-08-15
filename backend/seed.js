const { connectToDatabase } = require('./lib/db');
const bcrypt = require('bcryptjs');

async function seedDatabase() {
  try {
    console.log('Connecting to database...');
    const { db } = await connectToDatabase();
    
    const testEmails = ['director@acmecorp.com', 'vp@starkindustries.com'];
    
    // Clean up existing test data
    await db.collection('users').deleteMany({ email: { $in: testEmails } });
    await db.collection('orders').deleteMany({ userEmail: { $in: testEmails } });

    console.log('Creating test users...');
    
    const defaultPassword = await bcrypt.hash('VRTANS2026', 10);

    const users = [
      {
        name: 'Jane Doe',
        email: testEmails[0],
        company: 'Acme Corp',
        password: defaultPassword,
        createdAt: new Date(),
      },
      {
        name: 'Tony Stark',
        email: testEmails[1],
        company: 'Stark Industries',
        password: defaultPassword,
        createdAt: new Date(),
      }
    ];

    await db.collection('users').insertMany(users);

    console.log('Creating test orders...');
    
    const orders = [
      {
        orderId: `ORD-TEST-${Date.now().toString().slice(-6)}-1`,
        userEmail: testEmails[0],
        status: 'Completed',
        totalPrice: 125000,
        createdAt: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000), // 45 days ago
        items: [{ id: 'cloud-mig', title: 'Cloud Migration Strategy', price: 125000 }]
      },
      {
        orderId: `ORD-TEST-${Date.now().toString().slice(-6)}-2`,
        userEmail: testEmails[0],
        status: 'In Progress',
        totalPrice: 85000,
        createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
        items: [{ id: 'sec-audit', title: 'Zero-Trust Security Audit', price: 85000 }]
      },
      {
        orderId: `ORD-TEST-${Date.now().toString().slice(-6)}-3`,
        userEmail: testEmails[1],
        status: 'Pending',
        totalPrice: 350000,
        createdAt: new Date(),
        items: [{ id: 'ai-fabric', title: 'Enterprise AI Fabric Implementation', price: 350000 }]
      }
    ];

    await db.collection('orders').insertMany(orders);

    console.log('Database successfully seeded!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
