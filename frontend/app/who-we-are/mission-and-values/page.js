'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Target, ShieldCheck, Compass, Users, CheckCircle, Sparkles } from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const values = [
  {
    icon: Target,
    title: 'Objective Value Delivery',
    desc: 'We focus on clear, objective technical implementation over volume. Our engineering artifacts are designed for informed executive decision making.',
  },
  {
    icon: ShieldCheck,
    title: 'Technical Transparency',
    desc: 'Clear and direct architectural evaluation. We recommend against unnecessary technology investments and focus solely on systems that deliver verifiable enterprise value.',
  },
  {
    icon: Compass,
    title: 'Engineering Craftsmanship',
    desc: 'Code maintainability, system resilience, and strict access controls are treated as foundational engineering disciplines without compromise.',
  },
  {
    icon: Users,
    title: 'End-to-End Accountability',
    desc: 'Accountability from initial architectural design through to continuous integration, deployment pipelines, and final operational handoff.',
  },
];

export default function MissionAndValuesPage() {
  return (
    <PageShell>
      {/* Editorial Top Hero Banner */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        <div className="relative h-[320px] md:h-[400px] w-full overflow-hidden">
          <Image
            src="/images/about-us/about-2.jpg"
            alt="Mission and Values"
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-[#080d1a]/40 to-transparent" />
          
          <div className="absolute top-8 left-6 md:left-12 z-10 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.2em] text-[#93c5fd]">
            <Link href="/who-we-are" className="hover:underline text-white/70">Who we are</Link>
            <span>&gt;</span>
            <span className="text-[#86bc25]">Mission & Values</span>
          </div>

          <div className="absolute bottom-8 left-6 md:left-12 z-10 max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-white tracking-tight leading-tight">
              Mission & <span className="font-semibold text-[#86bc25]">Values</span>
            </h1>
            <div className="mt-3 border-l-4 border-[#86bc25] pl-4 py-1">
              <p className="text-lg md:text-2xl font-light italic text-[#cbe395] leading-relaxed">
                &ldquo;Eliminating latency between strategic boardroom decisions and production software execution.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Unified Beige Content Area */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 space-y-20">
          
          {/* Mission Statement Banner */}
          <div className="bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-sm">
            <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-2">
              Our Core Mission
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mb-4">
              Delivering Measurable Technological Value Through <span className="font-bold">Direct Engineering</span>
            </h2>
            <p className="text-[15.5px] text-[#5c5449] font-normal leading-relaxed max-w-4xl">
              Our mission is to empower enterprise leaders to execute complex system modernizations, secure data pipelines, and scalable cloud architectures with structural confidence and clear operational returns.
            </p>
          </div>

          {/* Core Values Grid */}
          <div>
            <div className="mb-10 border-l-4 border-[#86bc25] pl-5">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#784813] block mb-1">
                Ethos & Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Our 4 <span className="font-bold text-black">Immutable Values</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="hover-VRTANS-border bg-white border border-[#e5dccf] rounded-xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f4ece1] text-[#784813] mb-5">
                      <v.icon className="h-5.5 w-5.5" />
                    </div>
                    <h3 className="text-[18px] font-bold text-[#1c1a18] mb-2.5 tracking-tight">{v.title}</h3>
                    <p className="text-[13.5px] text-[#6b6255] font-normal leading-relaxed">{v.desc}</p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-[#f2ece2] flex items-center justify-between text-[11.5px] font-bold text-[#5e8817]">
                    <span>Core Pillar 0{i + 1}</span>
                    <CheckCircle className="h-3.5 w-3.5 text-[#86bc25]" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Intake Card */}
          <div className="hover-VRTANS-border bg-white border border-[#e5dccf] rounded-xl p-8 md:p-10 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#784813] block mb-1">
                Direct Advisory Channel
              </span>
              <h3 className="text-2xl font-light text-[#1c1a18] tracking-tight">
                Transforming enterprise technology into <span className="font-bold text-[#5e8817]">strategy</span>
              </h3>
              <p className="text-[14px] text-[#6b6255] mt-1 font-normal max-w-2xl">
                Connect with a senior partner to align your technology roadmap with audited execution.
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
