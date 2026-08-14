'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote, Award } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Marcus Vance',
    role: 'Chief Technology Officer',
    company: 'Apex Capital Markets',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=srgb&fm=jpg&q=85',
    metric: '€1.9B Saved',
    metricDesc: 'annual run-cost',
    quote:
      'VRTANS transformed our legacy core banking architecture across 14 European markets. Their senior partner-only model delivered auditable results where legacy consultancies failed.',
    rating: 5,
    sector: 'Banking & Financial Tech',
  },
  {
    id: 2,
    name: 'Elena Rostova',
    role: 'SVP Infrastructure & Security',
    company: 'Horizon Health Systems',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=srgb&fm=jpg&q=85',
    metric: '11.4M Records',
    metricDesc: 'patient fabric unified',
    quote:
      'The clinical patient data fabric built by VRTANS unified millions of hospital records with zero-trust security, saving us over 18 months of development time.',
    rating: 5,
    sector: 'Healthcare & Clinical Data',
  },
  {
    id: 3,
    name: 'Julian Sterling',
    role: 'Chief Information Officer',
    company: 'Aegis Defense & Aerospace',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=srgb&fm=jpg&q=85',
    metric: '38% Acceleration',
    metricDesc: 'claims resolution throughput',
    quote:
      'Deploying sovereign LLM retrieval architectures in highly regulated perimeters required extreme rigor. VRTANS delivered zero-latency compliance flawlessly.',
    rating: 5,
    sector: 'Cybersecurity & Defense',
  },
  {
    id: 4,
    name: 'Sarah Lin',
    role: 'Global VP of Grid Tech',
    company: 'Vanguard Power & Energy',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=srgb&fm=jpg&q=85',
    metric: '99.999% SLA',
    metricDesc: 'zero-downtime migration',
    quote:
      'Their 100% vendor-agnostic posture gave our board total confidence. They modernized our real-time streaming data layer seamlessly without a single micro-outage.',
    rating: 5,
    sector: 'Energy & Autonomous Ops',
  },
  {
    id: 5,
    name: 'Arthur Pendelton',
    role: 'Managing Director & CIO',
    company: 'Sovereign Wealth Partners',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=entropy&cs=srgb&fm=jpg&q=85',
    metric: '4.2x Throughput',
    metricDesc: 'real-time trade settlement',
    quote:
      'VRTANS’s architectural advisory provided executive clarity and immediate ROI. Their hands-on senior team restructured our entire enterprise cloud posture.',
    rating: 5,
    sector: 'Asset Management',
  },
  {
    id: 6,
    name: 'Claire DeWitt',
    role: 'VP Cloud Architecture',
    company: 'OmniGlobal Supply Chain',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&q=85',
    metric: '62% Latency Drop',
    metricDesc: 'edge telemetry processing',
    quote:
      'Partnering with VRTANS gave us access to elite principal engineers who executed our edge IoT migration 6 months ahead of schedule.',
    rating: 5,
    sector: 'Logistics & Retail Tech',
  },
];

export default function RotatingTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const item = testimonials[activeIndex];

  return (
    <section className="relative bg-[#faf7f2] text-[#1c1a18] py-10 lg:py-12 border-b border-[#e5dccf] font-sans overflow-hidden">
      <div className="mx-auto max-w-[1300px] px-6 lg:px-12 relative z-10">
        {/* Section Header with Arrows */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#e6dfd5]">
          <div>
            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-[#8c6b12] block mb-1">
              Client Endorsements & Audited Impact
            </span>
            <h2 className="text-xl sm:text-2xl font-light text-[#1c1a18] tracking-tight">
              Trusted by C-Suite Leaders in <span className="font-semibold text-black">High-Consequence Sectors</span>
            </h2>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              className="h-9 w-9 rounded-full bg-white border border-[#e2d8c9] flex items-center justify-center text-[#1c1a18] hover:border-[#D4AF37] hover:bg-[#071326] hover:text-[#D4AF37] transition-all shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={handleNext}
              className="h-9 w-9 rounded-full bg-white border border-[#e2d8c9] flex items-center justify-center text-[#1c1a18] hover:border-[#D4AF37] hover:bg-[#071326] hover:text-[#D4AF37] transition-all shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Compact Single Testimonial Card (Half-Height) */}
        <div className="relative min-h-[160px] sm:min-h-[140px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="w-full rounded-2xl border border-[#e8dfcf] bg-white p-5 sm:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-[#D4AF37] transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <Quote className="h-4 w-4 text-[#D4AF37] shrink-0" />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#8c6b12] bg-[#f7efdf] px-2 py-0.5 rounded border border-[#e6d8c3]">
                      {item.sector}
                    </span>
                    <div className="flex items-center gap-0.5 ml-2">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-[14px] sm:text-[16px] font-normal italic leading-relaxed text-[#2c2a27]">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3 pt-1">
                    <div className="relative h-9 w-9 rounded-full overflow-hidden border border-[#D4AF37] shrink-0">
                      <Image src={item.avatar} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-[14px] font-bold text-[#1c1a18] tracking-tight leading-none mb-1">{item.name}</h4>
                      <p className="text-[12px] text-[#6b6255] font-medium leading-none">
                        {item.role} · <span className="text-[#8c6b12] font-semibold">{item.company}</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Audited Metric Badge */}
                <div className="sm:border-l sm:border-[#f2ece2] sm:pl-6 shrink-0 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-1.5 bg-[#071326] text-[#D4AF37] px-3.5 py-1.5 rounded-xl shadow-sm border border-[#1b3563]">
                    <Award className="h-4 w-4 text-[#D4AF37]" />
                    <span className="text-[14px] font-extrabold">{item.metric}</span>
                  </div>
                  <span className="text-[11px] font-medium text-[#7a736a] mt-1 text-center sm:text-left block">{item.metricDesc}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimalist Pagination Dots */}
        <div className="flex justify-center items-center gap-1.5 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeIndex ? 'w-8 bg-[#071326]' : 'w-2 bg-[#d8cfc2] hover:bg-[#8c6b12]'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
