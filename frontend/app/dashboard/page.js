'use client';

import { useState, useEffect, Fragment } from 'react';
import { useAuth } from '@/lib/auth-context';
import { useRouter } from 'next/navigation';
import { User, LogOut, Package, Settings, Loader2, Download, Eye, EyeOff, ChevronDown, ChevronUp } from 'lucide-react';
import { toast } from 'sonner';
import Nav from '@/components/site/nav';

export default function DashboardPage() {
  const { user, loading: authLoading, logout, login } = useAuth();
  const router = useRouter();

  const [activeTab, setActiveTab] = useState('orders');
  const [profile, setProfile] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedOrder, setExpandedOrder] = useState(null);

  // Form states
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [editEmail, setEditEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [saving, setSaving] = useState(false);
  
  // UI states
  const [isEmailEditing, setIsEmailEditing] = useState(false);
  const [isPasswordEditing, setIsPasswordEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!authLoading && !user) {
      router.push('/');
    }
  }, [user, authLoading, router]);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;
      try {
        const token = localStorage.getItem('token');
        const res = await fetch(`${''}/api/user/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success) {
          setProfile(data.user);
          setOrders(data.orders);
          setName(data.user.name || '');
          setCompany(data.user.company || '');
          setEditEmail(data.user.email || '');
        }
      } catch (err) {
        toast.error('Failed to load profile data');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [user]);

  const handleUpdate = async (payload, successMsg, callback) => {
    setSaving(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch(`${''}/api/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        toast.success(successMsg);
        if (data.token) {
          login(data.token, data.user);
          setProfile(data.user);
        }
        if (callback) callback();
      } else {
        toast.error(data.error || 'Failed to update');
      }
    } catch (err) {
      toast.error('Network error');
    } finally {
      setSaving(false);
    }
  };

  const submitPasswordUpdate = () => {
    if (password !== confirmPassword) {
      toast.error("Passwords don't match!");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    handleUpdate({ password }, 'Password securely updated!', () => {
      setPassword('');
      setConfirmPassword('');
      setIsPasswordEditing(false);
      setShowPassword(false);
    });
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-screen bg-[#faf7f2] flex items-center justify-center">
        <Loader2 className="h-8 w-8 text-[#D4AF37] animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#faf7f2] font-sans selection:bg-[#D4AF37] selection:text-black">
      <Nav />
      
      <div className="pt-12 pb-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          
          <div className="mb-8 border-b border-[#e5dccf] pb-6">
             <h1 className="text-3xl font-cabinet font-medium text-[#1c1a18] tracking-tight">
               Client <span className="font-normal bg-gradient-to-r from-[#8c6b12] to-black bg-clip-text text-transparent">Dashboard.</span>
             </h1>
             <p className="text-[14px] text-[#5c5449] mt-2 font-light">
               Manage your enterprise engagements, review history, and update account preferences.
             </p>
          </div>

          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white border border-[#e5dccf] shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-xl p-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-12 w-12 rounded-full bg-[#faf7f2] flex items-center justify-center border border-[#e5dccf] text-[#8c6b12]">
                    <User className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-[#1c1a18] font-bold truncate text-[15px]">{profile?.name}</h2>
                    <p className="text-[12px] text-[#71675b] truncate">{profile?.email}</p>
                  </div>
                </div>
                
                <nav className="space-y-1.5">
                  <button
                    onClick={() => setActiveTab('orders')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] font-semibold transition-all ${activeTab === 'orders' ? 'bg-[#faf7f2] text-[#8c6b12] border border-[#e5dccf]' : 'text-[#5c5449] hover:bg-[#faf7f2]/50 hover:text-[#1c1a18] border border-transparent'}`}
                  >
                    <Package className="h-4 w-4" />
                    Order History
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] font-semibold transition-all ${activeTab === 'settings' ? 'bg-[#faf7f2] text-[#8c6b12] border border-[#e5dccf]' : 'text-[#5c5449] hover:bg-[#faf7f2]/50 hover:text-[#1c1a18] border border-transparent'}`}
                  >
                    <Settings className="h-4 w-4" />
                    Profile Settings
                  </button>
                  <div className="pt-4 mt-2 border-t border-[#e5dccf]">
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-[13.5px] font-semibold text-[#b91c1c] hover:bg-red-50 border border-transparent transition-all"
                    >
                      <LogOut className="h-4 w-4" />
                      Secure Sign Out
                    </button>
                  </div>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {activeTab === 'orders' && (
                <div className="bg-white border border-[#e5dccf] shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-xl p-8">
                  <div className="mb-6 border-b border-[#e5dccf] pb-4">
                    <h3 className="text-xl font-cabinet font-medium text-[#1c1a18] tracking-tight">Order History</h3>
                    <p className="text-[13px] text-[#71675b] mt-1 font-light">View your past orders and their status.</p>
                  </div>
                  
                  {orders.length === 0 ? (
                    <div className="text-center py-16 text-[#71675b]">
                      <Package className="h-10 w-10 mx-auto mb-4 text-[#dad2c3]" />
                      <p className="text-[14px]">You have no past orders.</p>
                    </div>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="border-b border-[#e5dccf]">
                            <th className="pb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] whitespace-nowrap">Order ID</th>
                            <th className="pb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] whitespace-nowrap">Date</th>
                            <th className="pb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] whitespace-nowrap">Status</th>
                            <th className="pb-3 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] text-right whitespace-nowrap">Total</th>
                            <th className="pb-3"></th>
                          </tr>
                        </thead>
                        <tbody className="text-[14px] text-[#5c5449]">
                          {orders.map((order) => (
                            <Fragment key={order.orderId}>
                              <tr 
                                onClick={() => setExpandedOrder(expandedOrder === order.orderId ? null : order.orderId)}
                                className={`border-b border-[#f0e7db] hover:bg-[#faf7f2] transition-colors cursor-pointer ${expandedOrder === order.orderId ? 'bg-[#faf7f2]' : ''}`}
                              >
                                <td className="py-4 font-semibold text-[#1c1a18]">
                                  <div className="flex items-center gap-2">
                                    {expandedOrder === order.orderId ? (
                                      <ChevronUp className="h-4 w-4 text-[#8c6b12]" />
                                    ) : (
                                      <ChevronDown className="h-4 w-4 text-[#a0978b]" />
                                    )}
                                    {order.orderId}
                                  </div>
                                </td>
                                <td className="py-4">{new Date(order.createdAt).toLocaleDateString()}</td>
                                <td className="py-4">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#ecfdf5] text-[#059669] border border-[#a7f3d0]">
                                    {order.status}
                                  </span>
                                </td>
                                <td className="py-4 text-right font-semibold text-[#1c1a18]">₹{order.totalPrice.toLocaleString()}</td>
                                <td className="py-4 text-right">
                                  <button onClick={(e) => e.stopPropagation()} className="text-[#8c6b12] hover:text-[#1c1a18] transition-colors" title="Download Receipt">
                                    <Download className="h-4 w-4 inline-block" />
                                  </button>
                                </td>
                              </tr>
                              {expandedOrder === order.orderId && (
                                <tr className="bg-[#fdfcfb] border-b border-[#f0e7db]">
                                  <td colSpan="5" className="p-0">
                                    <div className="p-6 text-[13.5px]">
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                          <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] mb-2">Transaction Details</h4>
                                          <p className="mb-1"><span className="font-semibold text-[#1c1a18]">Transaction ID:</span> {order.transactionId || `TXN-${order.orderId.replace('ORD-', '')}`}</p>
                                          <p className="mb-1"><span className="font-semibold text-[#1c1a18]">Date of Purchase:</span> {new Date(order.createdAt).toLocaleString()}</p>
                                        </div>
                                        <div>
                                          <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] mb-2">Items Purchased</h4>
                                          <ul className="list-disc list-inside space-y-1">
                                            {order.items?.map((item, idx) => (
                                              <li key={idx}><span className="font-semibold text-[#1c1a18]">{item.title}</span> - ₹{item.price.toLocaleString()}</li>
                                            )) || <li>Standard Order</li>}
                                          </ul>
                                        </div>
                                        <div className="md:col-span-2">
                                          <h4 className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] mb-2">Notes & Descriptions</h4>
                                          <div className="bg-white border border-[#e5dccf] p-4 rounded-md text-[#5c5449] italic">
                                            {order.notes || order.message || "No additional notes or scope descriptions were provided for this order."}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </Fragment>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'settings' && (
                <div className="space-y-8">
                  
                  {/* Basic Info */}
                  <div className="bg-white border border-[#e5dccf] shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-xl p-8">
                    <div className="mb-6 border-b border-[#e5dccf] pb-4">
                      <h3 className="text-xl font-cabinet font-medium text-[#1c1a18] tracking-tight">Basic Information</h3>
                      <p className="text-[13px] text-[#71675b] mt-1 font-light">Update your personal and company details.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block">Full Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2.5 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block">Company</label>
                        <input
                          type="text"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2.5 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                        />
                      </div>
                    </div>
                    <div className="mt-6">
                      <button
                        onClick={() => handleUpdate({ name, company }, 'Basic information updated!')}
                        disabled={saving}
                        className="inline-flex items-center justify-center gap-2 rounded bg-white border border-[#dad2c3] px-5 py-2 text-[13px] font-bold text-[#1c1a18] hover:bg-[#faf7f2] transition-all disabled:opacity-50 shadow-sm"
                      >
                        {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Update Profile'}
                      </button>
                    </div>
                  </div>

                  {/* Email Info */}
                  <div className="bg-white border border-[#e5dccf] shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-xl p-8">
                    <div className="mb-6 border-b border-[#e5dccf] pb-4">
                      <h3 className="text-xl font-cabinet font-medium text-[#1c1a18] tracking-tight">Email Address</h3>
                      <p className="text-[13px] text-[#71675b] mt-1 font-light">Manage the email address associated with your account.</p>
                    </div>

                    <div className="space-y-1.5 max-w-xl">
                      <input
                        type="email"
                        value={editEmail}
                        disabled={!isEmailEditing}
                        onChange={(e) => setEditEmail(e.target.value)}
                        className={`w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2.5 text-[14px] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors ${!isEmailEditing ? 'opacity-70 cursor-not-allowed text-[#71675b]' : 'text-[#1c1a18]'}`}
                      />
                      {isEmailEditing && (
                        <p className="text-[12.5px] text-[#8c6b12] mt-2 font-medium">If you update your email, you will remain logged in and your orders will be migrated safely.</p>
                      )}
                    </div>
                    
                    <div className="mt-6 flex items-center gap-3">
                      {!isEmailEditing ? (
                        <button
                          onClick={() => setIsEmailEditing(true)}
                          className="inline-flex items-center justify-center gap-2 rounded bg-white border border-[#dad2c3] px-5 py-2 text-[13px] font-bold text-[#1c1a18] hover:bg-[#faf7f2] transition-all shadow-sm"
                        >
                          Update Email
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => handleUpdate({ email: editEmail }, 'Email updated successfully!', () => setIsEmailEditing(false))}
                            disabled={saving || editEmail === profile?.email}
                            className="inline-flex items-center justify-center gap-2 rounded bg-[#1c1a18] px-5 py-2 text-[13px] font-bold text-white hover:opacity-90 transition-all disabled:opacity-50 shadow-sm"
                          >
                            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save Changes'}
                          </button>
                          <button
                            onClick={() => {
                              setIsEmailEditing(false);
                              setEditEmail(profile?.email || '');
                            }}
                            disabled={saving}
                            className="inline-flex items-center justify-center gap-2 rounded bg-transparent px-5 py-2 text-[13px] font-bold text-[#71675b] hover:text-[#1c1a18] transition-all disabled:opacity-50"
                          >
                            Cancel
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Password Info */}
                  <div className="bg-white border border-[#e5dccf] shadow-[0_4px_20px_rgba(0,0,0,0.02)] rounded-xl p-8">
                    <div className="mb-6 border-b border-[#e5dccf] pb-4">
                      <h3 className="text-xl font-cabinet font-medium text-[#1c1a18] tracking-tight text-[#b91c1c]">Security</h3>
                      <p className="text-[13px] text-[#71675b] mt-1 font-light">Update your password to secure your account.</p>
                    </div>
                    
                    {!isPasswordEditing ? (
                      <div>
                        <p className="text-[13.5px] text-[#5c5449] mb-5">Ensure your account is using a long, random password to stay secure.</p>
                        <button
                          onClick={() => setIsPasswordEditing(true)}
                          className="inline-flex items-center justify-center gap-2 rounded bg-[#fef2f2] border border-[#fca5a5] px-5 py-2 text-[13px] font-bold text-[#b91c1c] hover:bg-[#fee2e2] transition-all shadow-sm"
                        >
                          Update Password
                        </button>
                      </div>
                    ) : (
                      <div className="max-w-xl space-y-5">
                        <div className="space-y-1.5 relative">
                          <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block">New Password</label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              placeholder="Enter new password"
                              className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2.5 pr-12 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#a0978b] hover:text-[#1c1a18] transition-colors"
                            >
                              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                            </button>
                          </div>
                        </div>

                        <div className="space-y-1.5 relative">
                          <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block">Confirm New Password</label>
                          <div className="relative">
                            <input
                              type={showPassword ? 'text' : 'password'}
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              placeholder="Confirm new password"
                              className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2.5 pr-12 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors"
                            />
                          </div>
                        </div>

                        <div className="pt-3 flex items-center gap-3">
                          <button
                            onClick={submitPasswordUpdate}
                            disabled={saving || !password || !confirmPassword}
                            className="inline-flex items-center justify-center gap-2 rounded bg-[#dc2626] px-5 py-2 text-[13px] font-bold text-white hover:bg-[#b91c1c] transition-all disabled:opacity-50 shadow-sm"
                          >
                            {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Save Password'}
                          </button>
                          <button
                            onClick={() => {
                              setIsPasswordEditing(false);
                              setPassword('');
                              setConfirmPassword('');
                              setShowPassword(false);
                            }}
                            disabled={saving}
                            className="inline-flex items-center justify-center gap-2 rounded bg-transparent px-5 py-2 text-[13px] font-bold text-[#71675b] hover:text-[#1c1a18] transition-all disabled:opacity-50"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
