'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle,
  Building2,
  Filter,
  ArrowRight,
  X,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
  Clock,
  Landmark,
} from 'lucide-react';
import PageShell from '@/components/site/page-shell';

const CATEGORIES = [
  'All Mandates',
  'BFSI & Banking',
  'AI & Enterprise Data',
  'Healthcare Fabrics',
  'Energy & Security',
  'Retail & Commerce',
];

const STUDIES = [
  {
    id: 'bfsi-core',
    category: 'BFSI & Banking',
    client: 'Global Tier-1 Investment Bank',
    region: 'EMEA & UK',
    title: 'Core Banking Strangler Pattern & Multi-Cloud Cloud Migration Across 14 Markets',
    summary: 'Decommissioned legacy mainframe core ledger systems across European jurisdictions, replacing them with event-driven cloud microservices without zero-day downtime.',
    metric: '€1.9B',
    metricLabel: 'annual run-cost reduction',
    timeframe: '24 Months',
    image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['Strangler Pattern', 'Kafka Event Hubs', 'AWS Landing Zones', 'DORA Compliance'],
    challenge: 'A legacy mainframe COBOL core ledger incurring €3.4B in annual maintenance with 72-hour batch settlement delays and severe regulatory audit pressure from European banking authorities.',
    solution: 'Engineered an event-driven strangler pattern using Apache Kafka and Kubernetes landing zones across AWS Frankfurt and Zurich, routing 4.2 million daily transactions through real-time ledger microservices.',
    outcomes: [
      '€1.9 Billion annual infrastructure and licensing cost reduction.',
      'Settlement latency reduced from 72 hours to 14 milliseconds.',
      'Passed DORA and NIS2 regulatory audit sign-offs with zero findings.',
    ],
  },
  {
    id: 'ai-claims',
    category: 'AI & Enterprise Data',
    client: 'Fortune 100 Insurer',
    region: 'North America',
    title: 'Enterprise Sovereign LLM Platform for Automated Claims & Underwriting Intelligence',
    summary: 'Deployed an isolated, air-gapped Retrieval-Augmented Generation (RAG) fabric processing 140,000 daily commercial underwriting and claims documents.',
    metric: '38%',
    metricLabel: 'faster claim resolution',
    timeframe: '9 Months',
    image: 'https://images.unsplash.com/photo-1618722983535-6784e0b53ea9?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['Sovereign LLM', 'Vector DB', 'HIPAA/SOC2', 'Air-Gapped RAG'],
    challenge: 'Unstructured claims documentation required manual review by 2,400 underwriters, leading to a 14-day backlog and high fraud exposure.',
    solution: 'Architected a private sovereign vector retrieval mesh using fine-tuned open models on isolated GPU clusters, ensuring zero corporate data was leaked to public model APIs.',
    outcomes: [
      '38% overall reduction in claims processing latency.',
      'Identified $42M in fraudulent policy payouts within first 90 days.',
      '100% compliance sign-off with US insurance regulators.',
    ],
  },
  {
    id: 'health-fabric',
    category: 'Healthcare Fabrics',
    client: 'National Health System',
    region: 'APAC',
    title: 'Unified FHIR Clinical Data Fabric Across 220 Hospitals & Regional Clinics',
    summary: 'Consolidated fragmented EHR databases into a single real-time FHIR clinical semantic layer serving 11.4 million patient records.',
    metric: '11.4M',
    metricLabel: 'patient records unified',
    timeframe: '18 Months',
    image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['FHIR API Mesh', 'Zero-Trust Identity', 'Healthcare AI', 'GDPR/HIPAA'],
    challenge: '220 regional hospital networks operated siloed EHR systems, preventing emergency room clinicians from accessing complete patient histories.',
    solution: 'Designed a federated FHIR server grid with fine-grained cryptographic role-based access control, allowing instantaneous emergency record retrieval across regional trust bounds.',
    outcomes: [
      '11.4 Million unified patient records accessible under 150ms.',
      'Reduced ER diagnostic medication errors by 29%.',
      'Unified 14 legacy vendor software stacks into open API specs.',
    ],
  },
  {
    id: 'energy-zero-trust',
    category: 'Energy & Security',
    client: 'Global Energy Major',
    region: 'Global Operations',
    title: 'Zero-Trust Perimeter & Identity Mesh for 180,000 Industrial Employees',
    summary: 'Architected cryptographic device identity and micro-segmentation perimeters across 42 international offshore refineries and power grids.',
    metric: '82%',
    metricLabel: 'reduction in incident MTTR',
    timeframe: '14 Months',
    image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['Zero-Trust Mesh', 'OT/ICS Protection', 'Identity Perimeter', 'SOC Automation'],
    challenge: 'Distributed industrial control systems (ICS/SCADA) across 42 operating subsidiaries faced escalating nation-state cyber intrusion attempts.',
    solution: 'Deployed continuous identity verification micro-segmentation perimeters, enforcing hardware token auth for all OT grid operational engineers.',
    outcomes: [
      '82% reduction in Mean Time To Respond (MTTR) to threat alerts.',
      'Zero successful perimeter breaches across 18 months of deployment.',
      'Automated SOC threat intelligence ingestion across 180k endpoints.',
    ],
  },
  {
    id: 'transit-ops',
    category: 'Energy & Security',
    client: 'Public Transportation Authority',
    region: 'EMEA',
    title: 'Real-Time Telemetry & Autonomous Rail Dispatch Operations Platform',
    summary: 'Built an IoT sensor ingestion pipeline processing 85,000 telemetry events/sec to dynamically re-route metropolitan passenger trains.',
    metric: '99.9%',
    metricLabel: 'on-time dispatch accuracy',
    timeframe: '12 Months',
    image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['IoT Telemetry', '5G Edge Compute', 'Stream Analytics', 'Kubernetes'],
    challenge: 'Frequent track signal delays caused system-wide metropolitan delays impacting 2.2M daily commuters.',
    solution: 'Implemented 5G edge compute nodes on physical rail tracks paired with real-time streaming analytics to automatically recalculate train headway spacing.',
    outcomes: [
      'On-time train dispatch improved from 84% to 99.9%.',
      'Prevented over €14M in annual municipality delay penalties.',
      'Extended rail asset lifecycle by 4.5 years via predictive maintenance.',
    ],
  },
  {
    id: 'retail-commerce',
    category: 'Retail & Commerce',
    client: 'Global Consumer Retailer',
    region: 'Americas',
    title: 'Composable Headless Commerce Architecture Serving 8,400 Outlets',
    summary: 'Replaced a monolithic legacy commerce platform with modular microservices handling Black Friday peak traffic of 180,000 requests/sec.',
    metric: '2.1x',
    metricLabel: 'digital revenue growth',
    timeframe: '10 Months',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
    tags: ['Headless Commerce', 'GraphQL Mesh', 'Serverless Edge', 'Multi-Tenant'],
    challenge: 'Legacy store systems crashed during high-volume promotional events, causing lost revenue and inventory synchronization failures.',
    solution: 'Re-architected the store backend onto global serverless edge functions with instant multi-region DB replication and decoupled GraphQL APIs.',
    outcomes: [
      '2.1x growth in digital commerce revenue in year one.',
      '100% uptime through 180,000 peak checkout operations/second.',
      'Sub-50ms global page load times across web and mobile apps.',
    ],
  },
];

export default function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Mandates');
  const [activeModalStudy, setActiveModalStudy] = useState(null);

  const filteredStudies =
    selectedCategory === 'All Mandates'
      ? STUDIES
      : STUDIES.filter((s) => s.category === selectedCategory);

  return (
    <PageShell>
      {/* 1. EXECUTIVE DARK HERO BANNER */}
      <section className="relative bg-[#080d1a] text-white font-sans overflow-hidden border-b border-[#1c3969]">
        {/* Background glow effects */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#86bc25]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-[#3b82f6]/10 blur-[110px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 pt-16 pb-20 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#132440] border border-[#23477d] mb-6">
            <Sparkles className="h-3.5 w-3.5 text-[#86bc25]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#93c5fd]">
              Verified Outcome Portfolio
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] max-w-5xl">
            Programs That <span className="font-semibold text-white">Shipped</span> — And <em className="italic text-[#86bc25] font-normal">Moved The Numbers</em>
          </h1>

          <p className="mt-6 max-w-3xl text-[16px] sm:text-[18px] text-[#b0cbef] font-light leading-relaxed">
            A selection of complex cloud architecture, AI platform, and zero-trust programs delivered with Fortune 100 leaders and state institutions. Client titles are anonymized under NDA; financial and technical outcomes are fully verified.
          </p>

          {/* KEY STATS BAR */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-[#1c3868]">
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">€4.2B+</span>
              <span className="text-[11px] font-bold text-[#86bc25] uppercase tracking-wider block mt-1">Audited Run-Cost Savings</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">100%</span>
              <span className="text-[11px] font-bold text-[#93c5fd] uppercase tracking-wider block mt-1">SLA Delivery Record</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">14+</span>
              <span className="text-[11px] font-bold text-[#86bc25] uppercase tracking-wider block mt-1">Regulated Global Markets</span>
            </div>
            <div>
              <span className="block text-3xl sm:text-4xl font-extrabold text-white tracking-tight">Zero</span>
              <span className="text-[11px] font-bold text-[#93c5fd] uppercase tracking-wider block mt-1">Junior Pass-Through Pods</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT & CATEGORY FILTERING */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-16 lg:py-24 font-sans border-b border-[#e3ded4]">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          
          {/* CATEGORY FILTER TABS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12 pb-6 border-b border-[#e5dccf]">
            <div className="flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-wider text-[#784813]">
              <Filter className="h-4 w-4 text-[#5e8817]" />
              <span>Filter By Sector:</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-md text-[13px] font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-[#1c1a18] text-white shadow-md'
                        : 'bg-white text-[#5c5449] border border-[#e4d7c5] hover:border-[#1c1a18] hover:text-[#1c1a18]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* CASE STUDY GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setActiveModalStudy(s)}
                className="hover-SensiTech-border group bg-white border border-[#e4d7c5] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* IMAGE HEADER WITH METRIC OVERLAY */}
                  <div className="relative h-[210px] w-full overflow-hidden bg-[#080d1a]">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a]/95 via-[#080d1a]/40 to-transparent" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-[#faf7f2] text-black px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow">
                        {s.category}
                      </span>
                      <span className="bg-[#0f2412] text-[#86bc25] border border-[#1f4724] px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 shadow">
                        <CheckCircle className="h-3 w-3" /> Audited Outcome
                      </span>
                    </div>

                    {/* Bottom Metric Header */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#93c5fd] block">{s.client}</span>
                        <span className="text-[12px] font-medium text-zinc-300">{s.region}</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-3xl font-extrabold tracking-tight text-white">{s.metric}</span>
                        <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#86bc25]">{s.metricLabel}</span>
                      </div>
                    </div>
                  </div>

                  {/* BODY CONTENT */}
                  <div className="p-6">
                    <h3 className="text-[18px] font-bold text-[#1c1a18] leading-snug tracking-tight group-hover:text-[#5e8817] transition-colors mb-3">
                      {s.title}
                    </h3>
                    <p className="text-[13.5px] text-[#595248] font-normal leading-relaxed mb-6 line-clamp-3">
                      {s.summary}
                    </p>

                    {/* TECH STACK TAGS */}
                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#f2ece2]">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10.5px] font-semibold text-[#544c42] bg-[#f5efe6] border border-[#e2d8c9] px-2.5 py-0.5 rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CARD FOOTER CTA */}
                <div className="px-6 py-4 bg-[#faf7f2] border-t border-[#f0e8dc] flex items-center justify-between text-[13px] font-bold text-[#1c1a18] group-hover:text-[#5e8817] transition-colors">
                  <span>View Case Study Architecture</span>
                  <ArrowUpRight className="h-4 w-4 text-[#86bc25] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* 3. EXECUTIVE INTAKE BANNER AT BOTTOM */}
          <div className="mt-20 hover-SensiTech-border bg-gradient-to-r from-[#080d1a] via-[#0e1d38] to-[#080d1a] text-white rounded-2xl p-8 lg:p-12 shadow-2xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 border border-[#1e3c70]">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#86bc25] mb-2">
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
                className="inline-flex items-center gap-2 bg-[#86bc25] text-black text-[14.5px] font-bold px-7 py-4 rounded-md shadow-lg hover:bg-white hover:text-black transition-all"
              >
                <span>Talk to senior partners</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CASE STUDY DETAIL SLIDE-OVER MODAL */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white dark:bg-[#0b1426] border border-[#e4d7c5] dark:border-[#1e3c70] rounded-2xl shadow-2xl p-6 sm:p-10 my-auto text-slate-900 dark:text-white max-h-[90vh] overflow-y-auto">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* MODAL HEADER */}
            <div className="pr-8">
              <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5e8817] dark:text-[#86bc25] block mb-2">
                {activeModalStudy.category} · {activeModalStudy.region}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
                {activeModalStudy.title}
              </h2>
              <p className="text-[14px] text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {activeModalStudy.summary}
              </p>
            </div>

            {/* METRIC CARD */}
            <div className="my-6 p-5 rounded-xl bg-[#faf7f2] dark:bg-[#060c18] border border-[#e5dccf] dark:border-[#1c3868] flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">Verified Outcome Metric</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-[#5e8817] dark:text-[#86bc25] tracking-tight">{activeModalStudy.metric}</span>
                <span className="text-[12px] font-medium text-slate-700 dark:text-zinc-300 block">{activeModalStudy.metricLabel}</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 block">Delivery Timeframe</span>
                <span className="text-xl font-bold text-slate-900 dark:text-white flex items-center justify-end gap-1">
                  <Clock className="h-4 w-4 text-[#86bc25]" /> {activeModalStudy.timeframe}
                </span>
              </div>
            </div>

            {/* CHALLENGE & SOLUTION BREAKDOWN */}
            <div className="space-y-6">
              <div>
                <h4 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-red-500" />
                  The Enterprise Bottleneck
                </h4>
                <p className="text-[14px] text-slate-600 dark:text-zinc-300 leading-relaxed bg-slate-50 dark:bg-zinc-900/60 p-4 rounded-lg border border-slate-200 dark:border-zinc-800">
                  {activeModalStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-[#86bc25]" />
                  Architectural Solution
                </h4>
                <p className="text-[14px] text-slate-600 dark:text-zinc-300 leading-relaxed bg-slate-50 dark:bg-zinc-900/60 p-4 rounded-lg border border-slate-200 dark:border-zinc-800">
                  {activeModalStudy.solution}
                </p>
              </div>

              <div>
                <h4 className="text-[15px] font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-[#86bc25]" />
                  Audited Delivery Outcomes
                </h4>
                <ul className="space-y-2.5">
                  {activeModalStudy.outcomes.map((o, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13.5px] text-slate-700 dark:text-zinc-200">
                      <span className="h-5 w-5 rounded-full bg-[#86bc25]/20 text-[#5e8817] dark:text-[#86bc25] font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-4">
              <button
                onClick={() => setActiveModalStudy(null)}
                className="px-5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-[13.5px] font-semibold hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Close View
              </button>
              <Link
                href="/contact"
                onClick={() => setActiveModalStudy(null)}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#86bc25] text-black text-[13.5px] font-bold hover:bg-black hover:text-white transition-colors shadow-md"
              >
                <span>Request Similar Architecture Review</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
