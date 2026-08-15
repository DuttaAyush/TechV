import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const data = await req.json();
    const { email, name, phone, company, items, totalPrice } = data;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), { status: 400 });
    }

    const dbPath = path.join(process.cwd(), 'backend', 'db.json');
    let db = { users: [] };
    
    if (fs.existsSync(dbPath)) {
      const fileContent = fs.readFileSync(dbPath, 'utf-8');
      db = JSON.parse(fileContent);
    }

    const newOrder = {
      id: `ORD-${Date.now()}`,
      date: new Date().toISOString(),
      items,
      totalPrice,
      status: 'success'
    };

    let userIndex = db.users.findIndex(u => u.email.toLowerCase() === email.toLowerCase());

    if (userIndex !== -1) {
      // User exists, add order
      if (!db.users[userIndex].orders) db.users[userIndex].orders = [];
      db.users[userIndex].orders.push(newOrder);
      
      // Update missing info if provided during this checkout
      if (!db.users[userIndex].name && name) db.users[userIndex].name = name;
      if (!db.users[userIndex].phone && phone) db.users[userIndex].phone = phone;
    } else {
      // Create new user
      db.users.push({
        email: email.toLowerCase(),
        name: name || '',
        phone: phone || '',
        company: company || '',
        orders: [newOrder]
      });
    }

    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

    return new Response(JSON.stringify({ success: true, orderId: newOrder.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
