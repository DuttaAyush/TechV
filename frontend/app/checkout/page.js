'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import PageShell from '@/components/site/page-shell';
import { toast } from 'sonner';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [agreed, setAgreed] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!agreed) {
      toast.error('Please agree to the terms and conditions.');
      return;
    }

    if (items.length === 0) {
      toast.error('Your cart is empty.');
      return;
    }

    setIsProcessing(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const payload = {
      ...data,
      items,
      totalPrice
    };

    try {
      const res = await fetch(`${''}/api/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const result = await res.json();
      
      if (!res.ok) {
        toast.error(result.error || 'Payment failed');
        setIsProcessing(false);
        return;
      }

      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      toast.success('Your payment has been made successfully.');
    } catch (err) {
      setIsProcessing(false);
      toast.error('An error occurred during payment');
    }
  };

  if (isSuccess) {
    return (
      <PageShell>
        <div className="bg-[#faf7f2] py-32 min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
          <CheckCircle2 className="h-24 w-24 text-[#86bc25] mb-6" />
          <h1 className="text-4xl font-bold text-[#1c1a18] mb-4">Payment Successful</h1>
          <p className="text-lg text-[#6b6255] max-w-lg mb-8">
            Thank you for your business. We have received your payment and our senior partners will contact you shortly to begin scoping.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#1c1a18] text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-colors"
          >
            <span>Return Home</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="bg-[#faf7f2] py-16 min-h-screen font-sans">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          
          <div className="mb-12 border-l-4 border-[#86bc25] pl-5">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
              Secure Checkout
            </span>
            <h1 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
              Finalize <span className="font-bold text-black">Your Engagement</span>
            </h1>
          </div>

          <form onSubmit={handlePayment} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Billing Details */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl font-bold text-[#1c1a18] border-b border-[#e5dccf] pb-3">Billing Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-[#4a4338]">Name *</label>
                  <input required type="text" name="name" placeholder="Name" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#4a4338]">Email *</label>
                  <input required type="email" name="email" placeholder="Email" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#4a4338]">Phone Number *</label>
                  <input required type="tel" name="phone" placeholder="Phone Number" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-[#4a4338]">Company Name *</label>
                  <input required type="text" name="company" placeholder="Company Name" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-[#4a4338]">Country *</label>
                  <input required type="text" name="country" placeholder="Country" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-[#4a4338]">Street Address *</label>
                  <input required type="text" name="street" placeholder="Street Address" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5 md:col-span-2">
                  <label className="text-sm font-bold text-[#4a4338]">Apartment</label>
                  <input type="text" name="apartment" placeholder="Apartment, suite, etc. (optional)" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#4a4338]">City *</label>
                  <input required type="text" name="city" placeholder="City" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#4a4338]">State *</label>
                  <input required type="text" name="state" placeholder="State" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>

                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-[#4a4338]">Pin Code *</label>
                  <input required type="text" name="pincode" placeholder="Pin Code" className="w-full bg-white border border-[#e5dccf] rounded-lg px-4 py-3 text-sm text-black outline-none focus:border-[#D4AF37] transition-colors shadow-sm" />
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl shadow-sm border border-[#e5dccf] p-6 sticky top-28">
                <h2 className="text-2xl font-bold text-[#1c1a18] border-b border-[#e5dccf] pb-3 mb-6">Your Order</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between font-bold text-[#4a4338] text-sm uppercase tracking-wider pb-2 border-b border-[#f2ece2]">
                    <span>Items</span>
                    <span>Subtotal</span>
                  </div>

                  {items.length === 0 ? (
                    <div className="text-sm text-[#6b6255] italic py-4">Your cart is empty.</div>
                  ) : (
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div key={item.slug} className="flex justify-between items-start gap-4 text-[14px]">
                          <span className="text-[#1c1a18] font-medium leading-snug">
                            {item.title} <span className="font-bold text-[#8c6b12]">× {item.quantity}</span>
                          </span>
                          <span className="font-semibold text-[#1c1a18] shrink-0 whitespace-nowrap">
                            ₹{(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center justify-between font-extrabold text-[#1c1a18] text-lg pt-4 border-t border-[#e5dccf]">
                    <span>Total</span>
                    <span className="text-[#8c6b12]">₹{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <div className="mt-8 bg-[#faf7f2] p-4 rounded-lg border border-[#e5dccf]">
                  <p className="text-[12px] text-[#4a4338] mb-3 font-medium leading-relaxed">
                    Please read all the terms and conditions carefully before making your payment:
                  </p>
                  <ul className="text-[11.5px] text-[#6b6255] space-y-1.5 list-disc pl-4 mb-4">
                    <li>You are eligible to apply for a refund within 7 days of purchase.</li>
                    <li>No chargeback requests will be accepted after 7 days from the date of purchase.</li>
                    <li>For any chargeback or cancellation kindly mail us on <strong>partners@vrtans.tech</strong></li>
                  </ul>
                  <p className="text-[11.5px] text-[#4a4338] font-bold">
                    Kindly proceed with the payment only after reviewing our terms and conditions.
                  </p>
                </div>

                <div className="mt-6 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-[#86bc25] focus:ring-[#86bc25]"
                  />
                  <label htmlFor="terms" className="text-[13px] font-bold text-[#1c1a18] cursor-pointer leading-tight select-none">
                    You agree to all the terms & conditions mentioned on the website.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isProcessing || items.length === 0}
                  className={`w-full mt-6 py-4 rounded-lg font-bold text-[15px] transition-all flex items-center justify-center gap-2 ${
                    isProcessing || items.length === 0
                      ? 'bg-[#e5dccf] text-[#a89d8f] cursor-not-allowed'
                      : 'bg-[#86bc25] hover:bg-[#76a620] text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {isProcessing ? (
                    <span className="animate-pulse">Processing...</span>
                  ) : (
                    <span>{items.length === 0 ? 'Cart Empty' : 'Proceed to Payment'}</span>
                  )}
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </PageShell>
  );
}
