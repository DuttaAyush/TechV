'use client';

import { use, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, CheckCircle, ShoppingCart, Minus, Plus } from 'lucide-react';
import PageShell from '@/components/site/page-shell';
import { getServiceBySlug, SERVICES } from '@/lib/services-data';
import RenderIcon from '@/components/site/icon-map';
import { useCart } from '@/lib/cart-context';
import { toast } from 'sonner';

export default function ServiceSubPage({ params }) {
  const resolvedParams = use(params);
  const service = getServiceBySlug(resolvedParams.slug);
  const { items, addToCart, updateQuantity } = useCart();
  const [dbPrice, setDbPrice] = useState(null);

  useEffect(() => {
    fetch(`${''}/api/admin/services`)
      .then(res => res.json())
      .then(data => {
        if (data.success && data.services) {
          const dbService = data.services.find(s => s.href.endsWith(resolvedParams.slug));
          if (dbService && dbService.price) {
            setDbPrice(Number(dbService.price));
          }
        }
      })
      .catch(console.error);
  }, [resolvedParams.slug]);

  const displayPrice = dbPrice || service?.price || 0;
  const serviceWithPrice = service ? { ...service, price: displayPrice } : null;

  const cartItem = items.find((i) => i.slug === service.slug);
  const qty = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(serviceWithPrice);
    toast.success(`${service.shortTitle} added to your cart.`);
  };

  if (!service) {
    return notFound();
  }

  return (
    <PageShell>
      {/* Editorial Top Hero Banner */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/what-we-do" className="hover:underline text-white/70">What We Do</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">{service.shortTitle}</span>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 z-10 max-w-4xl">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#86bc25] bg-[#080d1a]/80 border border-[#86bc25]/40 px-3 py-1 rounded inline-block mb-3">
              {service.tag}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                {service.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Unified Beige Content Area */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-10 sm:py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-12 space-y-12 sm:space-y-20">
          
          {/* Practice Overview & Strategic Intent */}
          <div>
            <div className="mb-6 sm:mb-10 border-l-4 border-[#86bc25] pl-4 sm:pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Executive Practice Overview
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Architectural <span className="font-bold text-black">Rigor & Execution</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-center bg-white border border-[#e5dccf] rounded-xl p-5 sm:p-8 md:p-12 shadow-sm">
              <div className="lg:col-span-7 space-y-4 sm:space-y-5">
                {Array.isArray(service.overview) ? (
                  service.overview.map((para, i) => (
                    <p key={i} className="text-[15px] sm:text-[16px] text-[#4a4338] font-normal leading-relaxed">
                      {para}
                    </p>
                  ))
                ) : (
                  <p className="text-[15px] sm:text-[16px] text-[#4a4338] font-normal leading-relaxed">
                    {service.overview}
                  </p>
                )}

                <div className="pt-4 border-t border-[#f2ece2]">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#784813] block mb-3">
                    Practice Capabilities Checklist
                  </span>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle className="h-4 w-4 text-[#86bc25] shrink-0" />
                        <span className="text-[13.5px] text-[#1c1a18] font-semibold">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#faf7f2] border border-[#e5dccf] rounded-xl p-5 sm:p-6 space-y-4">
                <div className="flex items-center gap-3 pb-4 border-b border-[#e8dfd1]">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-[#1c1a18] text-[#86bc25]">
                    <RenderIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[16px] font-bold text-[#1c1a18]">{service.shortTitle}</h4>
                    <span className="text-[11px] font-extrabold uppercase text-[#784813]">Audited SLAs</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {service.metrics.map((m, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white rounded border border-[#e5dccf]">
                      <span className="text-[12.5px] font-bold text-[#784813] uppercase tracking-wider">{m.label}</span>
                      <span className="text-xl font-extrabold text-[#1c1a18]">{m.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 pb-4">
                  <span className="text-[11.5px] text-[#6b6255] italic block">
                    &bull; All practice commitments backed by audited financial SLAs.
                  </span>
                </div>

                <div className="pt-5 border-t border-[#e8dfd1] flex flex-col gap-3">
                  <div className="flex items-end justify-between">
                    <span className="text-[13px] font-extrabold uppercase text-[#784813] tracking-widest">Pricing Model</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#1c1a18]">₹{displayPrice.toLocaleString()}</span>
                  </div>
                  {qty === 0 ? (
                    <button
                      onClick={handleAddToCart}
                      className="w-full flex items-center justify-center gap-2 bg-[#86bc25] hover:bg-[#6fa01c] text-white py-3.5 rounded-lg font-bold text-[15px] transition-all shadow-md hover:shadow-lg mt-2"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      <span>Add to Cart</span>
                    </button>
                  ) : (
                    <div className="w-full flex justify-end mt-2">
                      <div className="flex items-center justify-between bg-[#071326] text-white rounded-lg px-4 py-2.5 shadow-md w-full sm:w-3/5 min-w-[140px]">
                        <button
                          onClick={() => updateQuantity(service.slug, -1)}
                          className="p-1.5 hover:text-[#D4AF37] transition-colors bg-white/10 rounded-md"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="text-[16px] font-bold min-w-[20px] text-center">
                          {qty}
                        </span>
                        <button
                          onClick={() => updateQuantity(service.slug, 1)}
                          className="p-1.5 hover:text-[#D4AF37] transition-colors bg-white/10 rounded-md"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                  <span className="text-[10px] text-center text-[#6b6255] font-semibold uppercase tracking-wider block mt-1">
                    Risk-Free Executive SLA
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Deliverables Grid */}
          <div>
            <div className="mb-6 sm:mb-10 border-l-4 border-[#86bc25] pl-4 sm:pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Engineering Output
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Core <span className="font-bold text-black">Deliverables & Blueprints</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="hover-VRTANS-border bg-white border border-[#e5dccf] rounded-xl p-4 sm:p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row items-start gap-3 sm:gap-5"
                >
                  <span className="text-sm sm:text-2xl font-extrabold text-[#784813] bg-[#f4ece1] px-2.5 sm:px-3.5 py-0.5 sm:py-1.5 rounded shrink-0">
                    0{idx + 1}
                  </span>
                  <div>
                    <h3 className="text-[14px] sm:text-[19px] font-bold text-[#1c1a18] mb-1 sm:mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-[12px] sm:text-[14px] text-[#595248] leading-relaxed font-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* New Methodology Section */}
          {service.methodology && (
            <div>
              <div className="mb-10 border-l-4 border-[#86bc25] pl-5">
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                  Delivery Methodology
                </span>
                <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                  How We <span className="font-bold text-black">Execute</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {service.methodology.map((step, idx) => (
                  <div key={idx} className="bg-white border border-[#e5dccf] rounded-xl p-6 shadow-sm flex flex-col h-full">
                    <span className="text-[10px] font-extrabold uppercase text-[#86bc25] tracking-widest mb-2 block">
                      Phase 0{idx + 1}
                    </span>
                    <h3 className="text-[16px] font-bold text-[#1c1a18] mb-3">{step.step}</h3>
                    <p className="text-[13.5px] text-[#595248] leading-relaxed font-normal">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Consultation Intake Card */}
          <div className="hover-VRTANS-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Practice Partner Consultation
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Engage our <span className="font-bold">{service.shortTitle}</span> partners
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Connect directly with the practice lead to discuss your architecture, workload migrations, or security perimeters under mutual NDA.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1c1a18] text-white text-[14px] font-bold px-7 py-3.5 rounded shadow hover:bg-[#86bc25] hover:text-black transition-all shrink-0"
            >
              <span>Schedule a consultation</span>
              <ArrowUpRight className="h-4.5 w-4.5" />
            </Link>
          </div>

        </div>
      </section>
    </PageShell>
  );
}
