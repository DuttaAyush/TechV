const { getUserByEmail, createUser, updateUser } = require('../models/User');
const { createOrder } = require('../models/Order');

async function processCheckout(req, res) {
  try {
    const { email, name, phone, company, items, totalPrice } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    let user = await getUserByEmail(email);

    if (user) {
      const updates = {};
      if (!user.name && name) updates.name = name;
      if (!user.phone && phone) updates.phone = phone;
      if (!user.company && company) updates.company = company;
      
      if (Object.keys(updates).length > 0) {
        await updateUser(email, updates);
      }
    } else {
      user = await createUser({
        email,
        name: name || '',
        phone: phone || '',
        company: company || '',
        password: 'dummy_password_for_guest' 
      });
    }

    const newOrder = await createOrder({
      userEmail: email.toLowerCase(),
      items,
      totalPrice,
      status: 'success'
    });

    res.status(200).json({ success: true, orderId: newOrder.orderId });
  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { processCheckout };
