import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

import usersData from '../../../data/users.json';
import leadsData from '../../../data/leads.json';
import servicesData from '../../../data/services.json';
import ordersData from '../../../data/orders.json';

// In-memory fallback for Vercel Serverless where FS is read-only
let memoryStore = {
  users: usersData,
  leads: leadsData,
  services: servicesData,
  orders: ordersData
};

function getStore(name) {
  return memoryStore[name] || [];
}

function setStore(name, data) {
  memoryStore[name] = data;
  try {
    const filePath = path.join(process.cwd(), 'data', `${name}.json`);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn(`Failed to write to ${name}.json (likely on Vercel read-only FS). Using memory store.`);
  }
}

export async function GET(request, { params }) {
  const url = new URL(request.url);
  const route = params.route.join('/');
  
  if (route === 'admin/users') return NextResponse.json({ success: true, users: getStore('users') });
  if (route === 'admin/leads') return NextResponse.json({ success: true, leads: getStore('leads') });
  if (route === 'admin/orders') return NextResponse.json({ success: true, orders: getStore('orders') });
  if (route === 'admin/services') return NextResponse.json({ success: true, services: getStore('services') });

  if (route === 'user/profile') {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    const user = getStore('users').find(u => 'mock-token-' + u._id === token);
    const orders = getStore('orders').filter(o => o.userEmail === user?.email);
    return NextResponse.json({ success: true, profile: user, orders });
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 });
}

export async function POST(request, { params }) {
  const route = params.route.join('/');
  const body = await request.json().catch(() => ({}));

  if (route === 'auth/register') {
    const users = getStore('users');
    if (users.find(u => u.email === body.email)) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }
    const newUser = { _id: Date.now().toString(), ...body, createdAt: new Date().toISOString() };
    users.push(newUser);
    setStore('users', users);
    return NextResponse.json({ success: true, token: 'mock-token-' + newUser._id, user: { name: newUser.name, email: newUser.email } });
  }

  if (route === 'auth/login') {
    const users = getStore('users');
    const user = users.find(u => u.email === body.email && u.password === body.password);
    if (!user) return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
    return NextResponse.json({ success: true, token: 'mock-token-' + user._id, user: { name: user.name, email: user.email } });
  }

  if (route === 'admin/login') {
    return NextResponse.json({ success: true, token: 'admin-mock-token' });
  }

  if (route === 'leads') {
    const leads = getStore('leads');
    leads.push({ _id: Date.now().toString(), ...body, status: 'New', createdAt: new Date().toISOString() });
    setStore('leads', leads);
    return NextResponse.json({ success: true });
  }

  if (route === 'admin/services') {
    const services = getStore('services');
    services.push({ _id: Date.now().toString(), ...body });
    setStore('services', services);
    return NextResponse.json({ success: true });
  }

  if (route === 'checkout') {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    const user = getStore('users').find(u => 'mock-token-' + u._id === token);
    const email = user ? user.email : body.email || 'guest@example.com';
    
    const orders = getStore('orders');
    orders.push({
      _id: Date.now().toString(),
      orderId: `ORD-${Date.now()}`,
      userEmail: email,
      items: body.items,
      totalPrice: body.items.reduce((acc, i) => acc + (parseFloat(i.price) * (i.quantity||1)), 0),
      createdAt: new Date().toISOString()
    });
    setStore('orders', orders);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 });
}

export async function PUT(request, { params }) {
  const route = params.route.join('/');
  const body = await request.json().catch(() => ({}));

  if (route.startsWith('admin/leads/')) {
    const id = params.route[params.route.length - 1];
    let leads = getStore('leads');
    leads = leads.map(l => l._id === id ? { ...l, ...body } : l);
    setStore('leads', leads);
    return NextResponse.json({ success: true });
  }

  if (route.startsWith('admin/services/')) {
    const id = params.route[params.route.length - 1];
    let services = getStore('services');
    services = services.map(s => s._id === id ? { ...s, ...body } : s);
    setStore('services', services);
    return NextResponse.json({ success: true });
  }

  if (route === 'user/profile') {
    const token = request.headers.get('authorization')?.replace('Bearer ', '');
    const userId = token.replace('mock-token-', '');
    let users = getStore('users');
    users = users.map(u => u._id === userId ? { ...u, ...body } : u);
    setStore('users', users);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 });
}

export async function DELETE(request, { params }) {
  const route = params.route.join('/');

  if (route.startsWith('admin/services/')) {
    const id = params.route[params.route.length - 1];
    let services = getStore('services');
    services = services.filter(s => s._id !== id);
    setStore('services', services);
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: 'Not Found' }, { status: 404 });
}
