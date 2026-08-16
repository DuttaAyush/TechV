'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, ShieldCheck, Mail, Users, ShoppingBag, Layers, Trash2, Plus, LogOut } from 'lucide-react';
import { toast } from 'sonner';

export default function AdminPage() {
  const [token, setToken] = useState(null);
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState('leads');
  const [data, setData] = useState({ leads: [], users: [], orders: [], services: [] });
  const [newService, setNewService] = useState({ title: '', fullTitle: '', body: '', icon: 'Globe', href: '#', price: '' });
  const [editingServiceId, setEditingServiceId] = useState(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // 1. Auth Logic
  useEffect(() => {
    const savedToken = localStorage.getItem('vrtans_admin_token');
    if (savedToken) {
      setToken(savedToken);
      fetchAllData(savedToken);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, otp })
      });
      const json = await res.json();
      if (res.ok) {
        setToken(json.token);
        localStorage.setItem('vrtans_admin_token', json.token);
        toast.success('Access Granted');
        fetchAllData(json.token);
      } else {
        toast.error(json.error || 'Invalid Credentials');
      }
    } catch (e) {
      toast.error('Connection failed');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('vrtans_admin_token');
    setToken(null);
  };

  // 2. Data Fetching
  const fetchAllData = async (jwt) => {
    const headers = { 'Authorization': `Bearer ${jwt}` };
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
    try {
      const [leadsRes, usersRes, ordersRes, servicesRes] = await Promise.all([
        fetch(`${baseUrl}/api/admin/leads`, { headers }),
        fetch(`${baseUrl}/api/admin/users`, { headers }),
        fetch(`${baseUrl}/api/admin/orders`, { headers }),
        fetch(`${baseUrl}/api/admin/services`, { headers })
      ]);
      
      const leads = await leadsRes.json();
      const users = await usersRes.json();
      const orders = await ordersRes.json();
      const services = await servicesRes.json();

      if (leads.error || users.error) {
        handleLogout();
        return toast.error('Session expired');
      }

      setData({
        leads: leads.leads || [],
        users: users.users || [],
        orders: orders.orders || [],
        services: services.services || []
      });
    } catch (e) {
      toast.error('Failed to load dashboard data');
    }
  };

  // 3. Handlers
  const updateLeadStatus = async (id, status) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/leads/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({ status })
      });
      if (res.ok) {
        toast.success('Status updated');
        fetchAllData(token);
      }
    } catch (e) {
      toast.error('Failed to update status');
    }
  };

  const handleSaveService = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...newService,
        tags: newService.tags || ['New Service'],
        tagColor: newService.tagColor || 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
        image: newService.image || '/images/landing-page/landing-1.jpg'
      };
      
      const method = editingServiceId ? 'PUT' : 'POST';
      const url = editingServiceId 
        ? `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/services/${editingServiceId}`
        : `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/services`;
        
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(payload)
      });
      
      if (res.ok) {
        toast.success(editingServiceId ? 'Service updated' : 'Service added');
        setNewService({ title: '', fullTitle: '', body: '', icon: 'Globe', href: '#', price: '' });
        setEditingServiceId(null);
        fetchAllData(token);
      }
    } catch (e) {
      toast.error('Failed to save service');
    }
  };

  const removeService = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api/admin/services/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (res.ok) {
        toast.success('Service removed');
        fetchAllData(token);
      }
    } catch (e) {
      toast.error('Failed to remove service');
    }
  };

  // View: Login
  if (!token) {
    return (
      <div className="min-h-screen bg-[#071326] flex items-center justify-center p-6 font-sans relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden relative z-10 border border-[#e5dccf]">
          <div className="bg-[#faf7f2] border-b border-[#e5dccf] p-8 text-center">
            <div className="w-12 h-12 bg-[#071326] rounded-xl flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="h-6 w-6 text-[#D4AF37]" />
            </div>
            <h1 className="text-2xl font-cabinet font-medium text-[#1c1a18]">Secure Access</h1>
            <p className="text-[13px] text-[#6b6257] mt-1">Super Admin Authentication Required</p>
          </div>
          <form onSubmit={handleLogin} className="p-8 space-y-5">
            <div>
              <label className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#71675b] block mb-1">Master Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-2.5 h-4 w-4 text-[#a0978b]" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-10 py-2 text-[14px] focus:outline-none focus:border-[#D4AF37]" />
              </div>
            </div>
            <div>
              <label className="text-[10.5px] font-extrabold uppercase tracking-widest text-[#71675b] block mb-1">One-Time Passcode (OTP)</label>
              <div className="relative">
                <ShieldCheck className="absolute left-3 top-2.5 h-4 w-4 text-[#a0978b]" />
                <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-10 py-2 text-[14px] focus:outline-none focus:border-[#D4AF37]" />
              </div>
            </div>
            <button disabled={loading} className="w-full bg-[#071326] text-[#D4AF37] font-bold py-2.5 rounded hover:bg-[#D4AF37] hover:text-black transition-colors">
              {loading ? 'Authenticating...' : 'Authorize Access'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  // View: Dashboard
  return (
    <div className="min-h-screen bg-[#faf7f2] font-sans text-[#1c1a18] flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-[#071326] border-r border-[#1b3563] text-white flex flex-col">
        <div className="p-6 border-b border-[#1b3563]">
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="h-5 w-5 text-[#D4AF37]" />
            <h1 className="text-lg font-cabinet font-medium text-white tracking-tight">VRTANS Admin</h1>
          </div>
          <span className="text-[10px] text-[#D4AF37] font-extrabold uppercase tracking-widest">Level 1 Clearance</span>
        </div>
        <div className="flex-1 p-4 space-y-1">
          {[
            { id: 'leads', icon: Mail, label: 'Leads Pipeline' },
            { id: 'users', icon: Users, label: 'User Directory' },
            { id: 'orders', icon: ShoppingBag, label: 'Platform Orders' },
            { id: 'services', icon: Layers, label: 'Service Offerings' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] font-bold transition-colors ${activeTab === t.id ? 'bg-[#D4AF37] text-black' : 'text-[#a1bcdc] hover:bg-[#13284c] hover:text-white'}`}
            >
              <t.icon className="h-4 w-4" /> {t.label}
            </button>
          ))}
        </div>
        <div className="p-4 border-t border-[#1b3563]">
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-2 text-[13px] font-bold text-[#f87171] hover:bg-[#1b3563] rounded transition-colors">
            <LogOut className="h-4 w-4" /> Terminate Session
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 md:p-10 overflow-y-auto">
        
        {/* LEADS */}
        {activeTab === 'leads' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-cabinet font-medium mb-6">Leads Pipeline</h2>
            <div className="bg-white rounded-xl shadow-sm border border-[#e5dccf] overflow-hidden">
              <table className="w-full text-left text-[13.5px]">
                <thead className="bg-[#fcfbfa] border-b border-[#e5dccf] text-[11px] font-extrabold uppercase tracking-widest text-[#71675b]">
                  <tr>
                    <th className="px-6 py-4">Prospect</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Interest</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5dccf]">
                  {data.leads.map(lead => (
                    <tr key={lead._id} className="hover:bg-[#fcfbfa]">
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#1c1a18]">{lead.name}</div>
                        <div className="text-[#6b6257] text-[12px]">{lead.email}</div>
                      </td>
                      <td className="px-6 py-4 font-medium">{lead.company || '-'}</td>
                      <td className="px-6 py-4"><span className="bg-[#f0e7db] px-2 py-0.5 rounded text-[11px] font-bold text-[#8c6b12]">{lead.interest}</span></td>
                      <td className="px-6 py-4">
                        <select 
                          value={lead.status || 'New'} 
                          onChange={(e) => updateLeadStatus(lead._id, e.target.value)}
                          className="bg-white border border-[#dad2c3] rounded px-2 py-1 text-[12px] font-bold text-[#071326] cursor-pointer focus:outline-none"
                        >
                          <option value="New">New</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Waiting for Reply">Waiting for Reply</option>
                          <option value="Reconnect">Reconnect</option>
                          <option value="Approved">Approved</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* USERS */}
        {activeTab === 'users' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-cabinet font-medium mb-6">User Directory</h2>
            <div className="bg-white rounded-xl shadow-sm border border-[#e5dccf] overflow-hidden">
              <table className="w-full text-left text-[13.5px]">
                <thead className="bg-[#fcfbfa] border-b border-[#e5dccf] text-[11px] font-extrabold uppercase tracking-widest text-[#71675b]">
                  <tr>
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Company</th>
                    <th className="px-6 py-4">Joined</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5dccf]">
                  {data.users.map(u => (
                    <tr key={u._id} className="hover:bg-[#fcfbfa]">
                      <td className="px-6 py-4">
                        <div className="font-bold text-[#1c1a18]">{u.name}</div>
                        <div className="text-[#6b6257] text-[12px]">{u.email}</div>
                      </td>
                      <td className="px-6 py-4 font-medium">{u.company || '-'}</td>
                      <td className="px-6 py-4 text-[#6b6257]">{new Date(u.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}

        {/* ORDERS */}
        {activeTab === 'orders' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h2 className="text-2xl font-cabinet font-medium mb-6">Platform Orders</h2>
            <div className="bg-white rounded-xl shadow-sm border border-[#e5dccf] overflow-hidden">
              <table className="w-full text-left text-[13.5px]">
                <thead className="bg-[#fcfbfa] border-b border-[#e5dccf] text-[11px] font-extrabold uppercase tracking-widest text-[#71675b]">
                  <tr>
                    <th className="px-6 py-4">Item</th>
                    <th className="px-6 py-4">User Email</th>
                    <th className="px-6 py-4">Amount</th>
                    <th className="px-6 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e5dccf]">
                  {data.orders.map(o => (
                    <tr key={o._id} className="hover:bg-[#fcfbfa] cursor-pointer" onClick={() => setSelectedOrder(o)}>
                      <td className="px-6 py-4 font-bold text-[#1c1a18]">{o.items?.map(i => i.name || i.id).join(', ')}</td>
                      <td className="px-6 py-4 text-[#6b6257]">{o.userEmail}</td>
                      <td className="px-6 py-4 font-bold text-[#047857]">₹ {o.totalPrice}</td>
                      <td className="px-6 py-4 text-[#6b6257]">{new Date(o.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* ORDER DETAILS MODAL */}
            {selectedOrder && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden border border-[#e5dccf]">
                  <div className="bg-[#071326] p-5 border-b border-[#1b3563] flex justify-between items-center text-white">
                    <div>
                      <h3 className="font-cabinet font-medium text-lg text-white">Transaction Details</h3>
                      <p className="text-[11px] text-[#a1bcdc] font-mono mt-0.5">ID: {selectedOrder.orderId}</p>
                    </div>
                    <button onClick={() => setSelectedOrder(null)} className="text-[#a1bcdc] hover:text-white">✕</button>
                  </div>
                  
                  <div className="p-6 space-y-6 text-[#1c1a18] text-[13.5px]">
                    <div className="grid grid-cols-2 gap-4 border-b border-[#e5dccf] pb-6">
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#71675b] mb-1">Customer</div>
                        <div className="font-bold">{selectedOrder.userEmail}</div>
                      </div>
                      <div>
                        <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#71675b] mb-1">Date Processed</div>
                        <div className="font-medium">{new Date(selectedOrder.createdAt).toLocaleString()}</div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#71675b] mb-3">Purchased Items</div>
                      <div className="space-y-3">
                        {selectedOrder.items?.map((item, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-[#fcfbfa] p-3 rounded-lg border border-[#e5dccf]">
                            <div className="font-bold">{item.name || item.id}</div>
                            <div className="font-medium text-[#6b6257]">x{item.quantity || 1}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-[#e5dccf] pt-4 flex justify-between items-center">
                      <div className="font-extrabold uppercase tracking-widest text-[#71675b]">Total Settled</div>
                      <div className="text-xl font-cabinet font-medium text-[#047857]">₹ {selectedOrder.totalPrice}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}

        {/* SERVICES */}
        {activeTab === 'services' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-cabinet font-medium">Service Offerings</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Existing Services */}
              {data.services.map(s => (
                <div key={s._id} onClick={() => { setNewService({ title: s.title || '', fullTitle: s.fullTitle || '', body: s.body || '', icon: s.icon || 'Globe', href: s.href || '#', price: s.price || '' }); setEditingServiceId(s._id); }} className="bg-white rounded-xl p-5 border border-[#e5dccf] shadow-sm relative group cursor-pointer hover:border-[#D4AF37] transition-colors flex flex-col h-full">
                  <button onClick={(e) => { e.stopPropagation(); removeService(s._id); }} className="absolute top-3 right-3 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 className="h-4 w-4" />
                  </button>
                  <div className="font-bold text-[15px] mb-1">{s.title}</div>
                  <div className="text-[12px] text-[#8c6b12] font-semibold mb-2">{s.fullTitle}</div>
                  <p className="text-[12px] text-[#6b6257] line-clamp-3 mb-4 flex-grow">{s.body}</p>
                  <div className="border-t border-[#e5dccf] pt-3 mt-auto">
                    <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#71675b] mb-0.5">Rate / Price</div>
                    <div className="font-cabinet font-medium text-[#047857]">₹ {s.price}</div>
                  </div>
                </div>
              ))}
              
              {/* Add/Edit Service Form */}
              <div className="bg-[#fcfbfa] rounded-xl p-5 border border-[#dad2c3] border-dashed flex flex-col justify-center">
                <form onSubmit={handleSaveService} className="space-y-3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-[13px] font-bold text-[#1c1a18] flex items-center gap-1">
                      <Plus className="h-3.5 w-3.5" /> {editingServiceId ? 'Edit Service' : 'Add Service'}
                    </h3>
                    {editingServiceId && (
                      <button type="button" onClick={() => { setEditingServiceId(null); setNewService({ title: '', fullTitle: '', body: '', icon: 'Globe', href: '#', price: '' })}} className="text-[10px] uppercase font-bold text-[#6b6257] hover:text-black">Cancel</button>
                    )}
                  </div>
                  <input required placeholder="Short Title (e.g. Web Dev)" value={newService.title} onChange={e => setNewService({...newService, title: e.target.value})} className="w-full text-[12px] px-2.5 py-1.5 border rounded" />
                  <input required placeholder="Full Title" value={newService.fullTitle} onChange={e => setNewService({...newService, fullTitle: e.target.value})} className="w-full text-[12px] px-2.5 py-1.5 border rounded" />
                  <input required type="number" placeholder="Price (₹)" value={newService.price} onChange={e => setNewService({...newService, price: e.target.value})} className="w-full text-[12px] px-2.5 py-1.5 border rounded" />
                  <textarea required placeholder="Description..." value={newService.body} onChange={e => setNewService({...newService, body: e.target.value})} className="w-full text-[12px] px-2.5 py-1.5 border rounded h-16 resize-none" />
                  <input required placeholder="Link (e.g. /what-we-do/web-dev)" value={newService.href} onChange={e => setNewService({...newService, href: e.target.value})} className="w-full text-[12px] px-2.5 py-1.5 border rounded" />
                  <button type="submit" className="w-full bg-[#071326] text-[#D4AF37] text-[12px] font-bold py-1.5 rounded">{editingServiceId ? 'Update Service' : 'Create Service'}</button>
                </form>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
