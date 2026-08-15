'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import RenderIcon from './icon-map';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    totalPrice,
  } = useCart();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Slide-Over Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 250 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#071326] text-white shadow-2xl border-l border-[#1c3560] flex flex-col font-sans"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#1c3560] bg-[#050c1a]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">Your Service Cart</h3>
                  <p className="text-[12px] text-[#93c5fd]">
                    {totalItems} {totalItems === 1 ? 'service selected' : 'services selected'}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsCartOpen(false)}
                className="rounded-full p-2 text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white/40 mb-4">
                    <ShoppingBag className="h-8 w-8" />
                  </div>
                  <h4 className="text-base font-medium text-white/80">Your cart is currently empty</h4>
                  <p className="text-xs text-white/50 max-w-xs mt-1.5 leading-relaxed">
                    Explore our 9 core advisory & engineering services and add them to your custom solution package.
                  </p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-5 py-2.5 text-xs font-bold text-black hover:bg-[#c49f27] transition-all shadow-md"
                  >
                    <span>Browse Core Services</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.slug}
                    className="flex flex-col bg-[#0b1c36] border border-[#1b3563] rounded-xl p-4 transition-all hover:border-[#D4AF37]/40"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37]">
                          <RenderIcon name={item.icon} className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-white leading-tight">
                            {item.title}
                          </h4>
                          <span className="text-[11px] font-mono text-[#D4AF37] mt-0.5 block">
                            ₹{item.price.toLocaleString()} / unit
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.slug)}
                        className="text-white/40 hover:text-red-400 p-1 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Quantity Controller & Total */}
                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#1b3563]/60">
                      <div className="flex items-center gap-2 bg-[#050c1a] border border-[#1b3563] rounded-lg p-1">
                        <button
                          onClick={() => updateQuantity(item.slug, -1)}
                          className="flex h-6 w-6 items-center justify-center rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-bold text-[#D4AF37]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.slug, 1)}
                          className="flex h-6 w-6 items-center justify-center rounded text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] text-white/50 block uppercase tracking-wider">Subtotal</span>
                        <span className="text-sm font-bold text-white">
                          ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer Summary */}
            {items.length > 0 && (
              <div className="p-6 border-t border-[#1c3560] bg-[#050c1a] space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-white/70">
                    <span>Selected Services ({totalItems})</span>
                    <span>₹{totalPrice.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-xs text-white/70">
                    <span>Consultation & Scoping</span>
                    <span className="text-[#86bc25] font-medium">Included</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-[#1c3560]">
                    <span>Total Investment</span>
                    <span className="text-[#D4AF37] font-mono text-base">₹{totalPrice.toLocaleString()} INR</span>
                  </div>
                </div>

                <div className="flex gap-2.5">
                  <button
                    onClick={clearCart}
                    className="px-3 py-3 text-xs font-semibold text-white/60 hover:text-white border border-[#1b3563] rounded-lg hover:bg-white/5 transition-colors shrink-0"
                  >
                    Clear
                  </button>

                  <Link
                    href="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-[#D4AF37] via-[#f3e092] to-[#D4AF37] px-4 py-3 text-xs font-extrabold uppercase tracking-wider text-black shadow-lg hover:brightness-110 transition-all text-center"
                  >
                    <span>Checkout</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-white/40 pt-1">
                  <ShieldCheck className="h-3.5 w-3.5 text-[#D4AF37]" />
                  <span>Senior Partner Guaranteed · No Obligation</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
