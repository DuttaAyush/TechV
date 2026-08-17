'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ShoppingCart,
  Minus,
  Plus
} from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import { SERVICES } from '@/lib/services-data';
import { useCart } from '@/lib/cart-context';

export default function OurSolutionsPage() {
  const { addToCart, updateQuantity, getItemQuantity } = useCart();
  const [dbPrices, setDbPrices] = useState({});

  useEffect(() => {
    fetch(`${''}/api/admin/services`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.services) {
          const map = {};
          data.services.forEach(s => {
            const slug = s.href.split('/').pop();
            if (s.price) map[slug] = Number(s.price);
          });
          setDbPrices(map);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <PageShell>
      {/* 1. EXECUTIVE DARK HERO BANNER */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#86bc25]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-[#3b82f6]/10 blur-[110px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 pt-16 pb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#132440] border border-[#23477d] mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#93c5fd]">
              Our Core Services
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] max-w-5xl">
            Solutions That <span className="font-semibold text-white">Perform</span> — And <em className="italic text-[#D4AF37] font-normal">Scale With You</em>
          </h1>

          <p className="mt-6 max-w-3xl text-[16px] sm:text-[18px] text-[#b0cbef] font-light leading-relaxed">
            A selection of complex cloud architecture, AI platform, and strategic services delivered with Fortune 100 leaders and state institutions. 
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1c3868]">
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Multiple</span>
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block mt-1">Core Capabilities</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Dedicated</span>
              <span className="text-[11px] font-bold text-[#93c5fd] uppercase tracking-wider block mt-1">Engineering Pods</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Regulated</span>
              <span className="text-[11px] font-bold text-[#D4AF37] uppercase tracking-wider block mt-1">Market Focus</span>
            </div>
            <div>
              <span className="block text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Support</span>
              <span className="text-[11px] font-bold text-[#93c5fd] uppercase tracking-wider block mt-1">Comprehensive SLAs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT GRID */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-16 lg:py-24 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((s) => {
              const qty = getItemQuantity(s.slug);

              return (
                <div
                  key={s.slug}
                  className="hover-VRTANS-border group bg-white border border-[#e4d7c5] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-[210px] w-full overflow-hidden bg-[#080d1a]">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a]/95 via-[#080d1a]/40 to-transparent" />
                      
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="bg-[#faf7f2] text-black px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow">
                          {s.shortTitle}
                        </span>
                      </div>
  
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#93c5fd] block">{s.tag}</span>
                        </div>
                      </div>
                    </div>
  
                    <div className="p-6">
                      <h3 className="text-[18px] font-bold text-[#1c1a18] leading-snug tracking-tight group-hover:text-[#D4AF37] transition-colors mb-3">
                        {s.title}
                      </h3>
                      <p className="text-[13.5px] text-[#595248] font-normal leading-relaxed mb-6 line-clamp-3">
                        {s.summary}
                      </p>
  
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f2ece2]">
                        {s.capabilities.slice(0, 3).map((cap, i) => (
                          <span
                            key={i}
                            className="text-[10.5px] font-semibold text-[#544c42] bg-[#f5efe6] border border-[#e2d8c9] px-2.5 py-0.5 rounded truncate max-w-full"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
  
                  {/* CARD FOOTER CTA */}
                  <div className="px-6 py-4 bg-[#faf7f2] border-t border-[#f0e8dc] flex items-center justify-between text-[13px]">
                    
                    {/* LEFT: View More */}
                    <Link
                      href={`/what-we-do/${s.slug}`}
                      className="font-bold text-[#1c1a18] group-hover:text-[#D4AF37] transition-colors flex items-center gap-1"
                    >
                      <span>View More</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
  
                    {/* MIDDLE: Price */}
                    <div className="font-extrabold text-[#D4AF37] text-[15px] mx-2">
                      ₹{(dbPrices[s.slug] || s.price).toLocaleString()}
                    </div>
  
                    {/* RIGHT: Add to Cart / - 1 + */}
                    <div className="flex items-center">
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 bg-[#071326] text-white rounded-md px-2 py-1.5 shadow-sm">
                          <button
                            onClick={() => updateQuantity(s.slug, -1)}
                            className="p-0.5 hover:text-[#D4AF37] transition-colors"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-[12.5px] font-bold min-w-[12px] text-center">
                            {qty}
                          </span>
                          <button
                            onClick={() => updateQuantity(s.slug, 1)}
                            className="p-0.5 hover:text-[#D4AF37] transition-colors"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => addToCart({ ...s, price: dbPrices[s.slug] || s.price })}
                          className="inline-flex items-center gap-1.5 bg-[#071326] text-white font-bold px-3 py-1.5 rounded-md hover:bg-[#D4AF37] hover:text-[#071326] transition-all shadow-sm"
                        >
                          <ShoppingCart className="h-3.5 w-3.5" />
                          <span>Add</span>
                        </button>
                      )}
                    </div>
  
                  </div>
                </div>
              );
            })}
          </div>
  
          {/* 3. EXECUTIVE INTAKE BANNER AT BOTTOM */}
          <div className="mt-20 hover-VRTANS-border bg-gradient-to-r from-[#080d1a] via-[#0e1d38] to-[#080d1a] text-white rounded-2xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-[#1e3c70]">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#D4AF37] mb-2">
                <ShieldCheck className="h-4 w-4" /> 100% Senior Practitioner SLA
              </div>
              <h3 className="text-2xl sm:text-4xl font-light tracking-tight text-white">
                Require a similar <span className="font-semibold text-white">architecture review</span> for your enterprise?
              </h3>
              <p className="mt-2 text-[14.5px] text-[#b0cbef] font-light max-w-2xl">
                Direct partner engagement without sales intermediaries. Receive an audited technical roadmap and run-cost estimate within 7 business days.
              </p>
            </div>
  
            <div className="flex items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#D4AF37] text-black text-[14.5px] font-bold px-7 py-4 rounded-md shadow-lg hover:bg-white transition-all"
              >
                <span>Talk to senior partners</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
  
        </div>
      </section>
    </PageShell>
  );
}
