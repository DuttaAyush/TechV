'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Globe,
  Smartphone,
  Code,
  TrendingUp,
  Users,
  Briefcase,
  MonitorCheck,
  LineChart,
  Cpu,
  Cloud,
  ShieldCheck,
  Workflow,
  Database,
  Layers,
  CheckCircle,
  Sparkles,
  Mail,
  Phone,
  Clock,
  Lock,
  Target,
  Award,
} from 'lucide-react';
import { toast } from 'sonner';
import PageShell from '@/components/site/page-shell';
import InteractiveGlobe from '@/components/site/interactive-globe';
import RotatingTestimonials from '@/components/site/rotating-testimonials';
import { clientConfig } from '@/lib/config';

const HERO_IMG =
  'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85';

const services = [
  {
    icon: Globe,
    title: 'Web Dev',
    fullTitle: 'Web Development & Digital Platforms',
    body: 'Next-gen web applications, corporate digital portals, high-performance frontend architectures, and responsive web platforms.',
    tags: ['Next.js & React', 'High-Perf Frontend', 'Jamstack'],
    tagColor: 'text-[#92400e] bg-[#fffbeb] border-[#fde68a]',
    href: '/what-we-do/web-dev',
  },
  {
    icon: Smartphone,
    title: 'App Dev',
    fullTitle: 'Mobile & Web App Development',
    body: 'Native iOS & Android apps, cross-platform mobile solutions, progressive web apps (PWAs), and high-throughput mobile backend APIs.',
    tags: ['iOS & Android Native', 'PWAs & Flutter', 'Mobile APIs'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
    href: '/what-we-do/app-dev',
  },
  {
    icon: Code,
    title: 'Software Dev',
    fullTitle: 'Custom Software Engineering',
    body: 'Bespoke enterprise software, microservices API architectures, legacy refactoring, and cloud-native solutions.',
    tags: ['Enterprise Code', 'Microservices APIs', 'Legacy Refactoring'],
    tagColor: 'text-[#1e40af] bg-[#eff6ff] border-[#bfdbfe]',
    href: '/what-we-do/software-dev',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    fullTitle: 'Digital Marketing & Growth',
    body: 'Data-driven performance marketing, technical SEO, conversion rate optimization (CRO), and enterprise growth funnels.',
    tags: ['Technical SEO', 'Performance PPC', 'Conversion Funnels'],
    tagColor: 'text-[#92400e] bg-[#fffbeb] border-[#fde68a]',
    href: '/what-we-do/digital-marketing',
  },
  {
    icon: Users,
    title: 'CRM Dev',
    fullTitle: 'CRM Systems Development',
    body: 'Custom Salesforce, HubSpot & proprietary CRM architecture, automated lead routing, and customer 360° data integration.',
    tags: ['Salesforce & HubSpot', 'Automated Lead Routing', 'Customer 360°'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
    href: '/what-we-do/crm-dev',
  },
  {
    icon: Briefcase,
    title: 'ERP Sol',
    fullTitle: 'ERP Enterprise Solutions',
    body: 'SAP, Oracle & custom ERP implementations, supply chain automation, inventory management, and financial orchestration.',
    tags: ['SAP & Oracle ERP', 'Supply Chain Automation', 'Financial Workflows'],
    tagColor: 'text-[#1e40af] bg-[#eff6ff] border-[#bfdbfe]',
    href: '/what-we-do/erp-sol',
  },
  {
    icon: MonitorCheck,
    title: 'IT Consulting',
    fullTitle: 'Enterprise IT Strategy',
    body: 'Strategic IT roadmap advisory, cloud infrastructure auditing, DevOps platform engineering, and executive CTO advisory.',
    tags: ['CIO Advisory', 'Infrastructure Audit', 'DevOps Governance'],
    tagColor: 'text-[#92400e] bg-[#fffbeb] border-[#fde68a]',
    href: '/what-we-do/it-consulting',
  },
  {
    icon: LineChart,
    title: 'Business Consulting',
    fullTitle: 'Business Transformation',
    body: 'Operating model redesign, process automation, digital strategy, post-merger integration, and ROI optimization.',
    tags: ['Operating Model TOM', 'Process Automation', 'Digital Strategy'],
    tagColor: 'text-[#047857] bg-[#ecfdf5] border-[#a7f3d0]',
    href: '/what-we-do/business-consulting',
  },
  {
    icon: Cpu,
    title: 'AI Consulting',
    fullTitle: 'Applied AI & LLM Advisory',
    body: 'Sovereign AI strategy, custom LLM fine-tuning, RAG data architectures, autonomous AI agents, and compliance guardrails.',
    tags: ['LLMs & Sovereign RAG', 'Autonomous Agents', 'AI Governance'],
    tagColor: 'text-[#1e40af] bg-[#eff6ff] border-[#bfdbfe]',
    href: '/what-we-do/ai-consulting',
  },
];



const work = [
  {
    kicker: 'Global Tier-1 Bank · 24 Month Program',
    title: 'Core banking architecture modernization across 14 sovereign European markets.',
    metric: '€1.9B',
    metricLabel: 'annual run-cost reduction',
    href: '/our-work',
  },
  {
    kicker: 'Fortune 100 Insurer · 18 Month Program',
    title: 'Enterprise LLM claims validation platform for commercial underwriting.',
    metric: '38%',
    metricLabel: 'faster claim resolution',
    href: '/our-work',
  },
  {
    kicker: 'National Health System · 220 Hospitals',
    title: 'Clinical patient data fabric and diagnostic record interoperability network.',
    metric: '11.4M',
    metricLabel: 'patient records unified',
    href: '/our-work',
  },
  {
    kicker: 'Logistics Operator · 500+ Hubs',
    title: 'Autonomous AI dispatch and supply chain route optimization telemetry.',
    metric: '99.9%',
    metricLabel: 'on-time dispatch accuracy',
    href: '/our-work',
  },
];

const industriesData = [
  {
    title: 'Banking & Capital Markets',
    image: 'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/bfsi',
    label: 'Financial Infrastructure',
    description: 'Core banking modernization, real-time ledger orchestration, and audited financial latency optimization across global jurisdictions.',
    stats: '€1.9B Infra Savings Delivered',
  },
  {
    title: 'Cyber AI & Defense Systems',
    image: 'https://images.unsplash.com/photo-1615225164633-69f53b1dfd74?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/cybersecurity-defense',
    label: 'National Security',
    description: 'Zero-trust perimeter security, sovereign LLM air-gapped deployments, and automated SOC threat analysis for critical defense networks.',
    stats: 'Zero-Trust Audited',
  },
  {
    title: 'Cloud & Autonomous Ops',
    image: 'https://images.unsplash.com/photo-1580106815433-a5b1d1d53d85?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/cloud-infrastructure',
    label: 'Autonomous Systems',
    description: 'Self-healing platform engineering, multi-cloud FinOps governance, and automated Kubernetes control planes for mission-critical apps.',
    stats: '99.999% Operational Uptime',
  },
  {
    title: 'Energy Transition & Grid AI',
    image: 'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/energy-smart-grid',
    label: 'Grid Resiliency',
    description: 'Real-time telemetry streaming, smart-grid load forecasting ML models, and regulatory compliance for power & utility providers.',
    stats: 'Sub-10ms Streaming Latency',
  },
  {
    title: 'Healthcare Interoperability',
    image: 'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/healthcare-life-sciences',
    label: 'Clinical Fabrics',
    description: 'FHIR diagnostic record interoperability, secure patient data fabrics, and HIPAA-compliant clinical predictive analytics.',
    stats: '11.4M Unified Patient Records',
  },
  {
    title: 'Retail & Digital Supply Chain',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?crop=entropy&cs=srgb&fm=jpg&q=85',
    href: '/industries/retail-commerce',
    label: 'Omnichannel Logistics',
    description: 'AI-driven demand forecasting, real-time inventory tracking, and high-throughput transaction processing for enterprise retail.',
    stats: '3x Inventory Velocity',
  },
];

const whyChooseUsData = [
  {
    icon: Users,
    title: 'Senior Practitioners Only',
    desc: 'Every engagement is architected and executed exclusively by senior practice partners. Zero junior pass-throughs or layered consultancy bloat.',
    highlight: '100% Senior Directed',
  },
  {
    icon: Lock,
    title: 'Fiercely Independent Counsel',
    desc: 'We remain completely vendor-neutral across AWS, Azure, and GCP. Our architectural guidance prioritizes sole corporate resilience and cost efficiency.',
    highlight: 'Zero Vendor Lock-in',
  },
  {
    icon: Target,
    title: 'Audited Financial SLAs',
    desc: 'Our delivery milestones are directly tied to audited revenue, infrastructure cost reductions, and verifiable latency metrics agreed upon upfront.',
    highlight: 'Revenue-Linked Metrics',
  },
  {
    icon: ShieldCheck,
    title: 'Strategy Through Code',
    desc: 'One accountable pod taking full ownership from board-level architectural strategy to hands-on deployment and compliance sign-off.',
    highlight: 'End-to-End Ownership',
  },
];

export default function HomePage() {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: 'Cloud Modernization',
    message: '',
  });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please complete all required fields (*).');
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Thank you. A senior practice partner will contact you within 24 hours.');
      setForm({
        name: '',
        email: '',
        company: '',
        role: '',
        interest: 'Cloud Modernization',
        message: '',
      });
    } catch {
      toast.error('Something went wrong. Please email partners@SensiTech.tech directly.');
    } finally {
      setSubmitting(false);
    }
  };

  const capabilityOptions = [
    'Cloud Modernization',
    'AI & Applied Intelligence',
    'Cybersecurity & Zero Trust',
    'Digital Transformation',
    'Data Fabric & Analytics',
    'Enterprise Architecture',
    'Executive Advisory Inquiry',
  ];

  return (
    <PageShell>
      {/* 1. TOP SECTION: DEEP SAPPHIRE NAVY HERO WITH WARM GOLD ACCENTS */}
      <section className="relative bg-[#071326] text-white overflow-hidden font-sans border-b border-[#1b3563]">
        <div className="absolute inset-0 -z-10">
          <Image src={HERO_IMG} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050c1a] via-[#071326]/95 to-[#071326]/80" />
        </div>

        {/* Ambient Gold & Blue Lighting Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-[#D4AF37]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[600px] h-[350px] bg-[#1e40af]/15 blur-[140px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 pt-16 lg:pt-16 pb-14 lg:pb-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Executive Advisory Copy */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex items-center gap-3 mb-5"
              >
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#13284c] border border-[#2b4c80] text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-[#D4AF37] shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                  Established Advisory Network · Enterprise Technology
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="text-[38px] sm:text-[50px] lg:text-[56px] font-light leading-[1.06] tracking-[-0.02em] text-white text-balance"
              >
                Intelligence That Shapes <br />
                <strong className="font-semibold text-[#D4AF37]">Better Enterprise Decisions.</strong>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-[16px] md:text-[17.5px] font-light leading-relaxed text-[#b0cae8] max-w-2xl"
              >
                Connecting cloud modernization, applied AI, and zero-trust cybersecurity directly to audited revenue and latency outcomes. Built for demanding C-suite leaders where architectural precision is paramount.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-9 flex flex-wrap items-center gap-4"
              >
                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2.5 rounded-md bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B8860B] px-7 py-3.5 text-[14.5px] font-extrabold text-black transition-all hover:opacity-95 shadow-xl shadow-[#D4AF37]/20"
                >
                  <span>Talk to senior partners</span>
                  <ArrowUpRight className="h-4.5 w-4.5 text-black" />
                </a>
                <Link
                  href="/what-we-do"
                  className="inline-flex items-center gap-2 rounded-md border border-[#2b4c80] bg-[#0c1f3d] px-6 py-3.5 text-[14px] font-bold text-white transition-all hover:border-[#D4AF37] hover:text-[#D4AF37]"
                >
                  <span>Explore capabilities</span>
                  <ArrowRight className="h-4 w-4 text-[#D4AF37]" />
                </Link>
              </motion.div>

              {/* EXECUTIVE TRUST BAR */}
              <div className="hidden md:grid mt-14 grid-cols-1 sm:grid-cols-3 gap-6 border-t border-[#1b3563] pt-7">
                <div>
                  <span className="block text-[15px] font-bold text-white tracking-tight">Revenue-Linked</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37]">EVERY ENGAGEMENT</span>
                </div>
                <div className="sm:border-l sm:border-[#1b3563] sm:pl-6">
                  <span className="block text-[15px] font-bold text-white tracking-tight">C-Suite Standard</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37]">DIRECT BOARDROOM SLA</span>
                </div>
                <div className="sm:border-l sm:border-[#1b3563] sm:pl-6">
                  <span className="block text-[15px] font-bold text-white tracking-tight">Senior Practitioners</span>
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#D4AF37]">OUR ONLY MODE</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive 3D Globe */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center relative min-h-[460px] w-full">
              <InteractiveGlobe />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION: WARM CHAMPAGNE CREAM AUDITED OUTCOMES */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 border-b border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-l-4 border-[#D4AF37] pl-4 sm:pl-5">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8c6b12] block mb-1">
                Selected Audited Outcomes
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight">
                Transformation Results We Are <span className="font-semibold text-black">Measured Against</span>
              </h2>
            </div>
            <Link href="/our-work" className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#8c6b12] hover:underline mt-2 md:mt-0">
              <span>View Audited Case Studies</span>
              <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-7">
            {work.map((w, i) => (
              <Link
                key={i}
                href={w.href}
                className="hover-SensiTech-border group relative flex flex-col justify-between rounded-xl border border-[#e4d7c5] bg-white p-4 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-[9.5px] sm:text-[11px] font-extrabold uppercase tracking-widest text-[#8c6b12] bg-[#f7efdf] px-2.5 py-0.5 rounded border border-[#e6d8c3] truncate max-w-[130px] sm:max-w-none">
                      {w.kicker}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#8c6b12] group-hover:text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </div>
                  <p className="text-[12.5px] sm:text-[15.5px] font-semibold text-[#2d2924] leading-snug group-hover:text-black line-clamp-3 sm:line-clamp-none mb-4">
                    {w.title}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f2ece2]">
                  <span className="block text-2xl sm:text-4xl font-extrabold text-[#0a192f] group-hover:text-[#8c6b12] transition-colors">
                    {w.metric}
                  </span>
                  <span className="text-[10px] sm:text-[11.5px] font-bold text-[#8c6b12] uppercase tracking-wider block mt-0.5">
                    {w.metricLabel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* 4. SECTION: TRANSFORMATION CAPABILITIES */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-20 border-b border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-baseline justify-between mb-12 border-b border-[#e6dfd5] pb-6">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#8c6b12] block mb-1">
                Transformation Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1c1a18]">
                Nine Specialized Services. <span className="font-semibold text-black">One Accountable Team.</span>
              </h2>
            </div>
            <Link href="/what-we-do" className="mt-4 lg:mt-0 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#8c6b12] hover:underline">
              <span>View All Capabilities</span>
              <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-7">
            {services.map((s) => (
              <div
                key={s.title}
                className="hover-SensiTech-border group flex flex-col justify-between rounded-2xl border border-[#e8dfcf] bg-white p-4 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-xl hover:border-transparent hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center gap-2.5 sm:gap-3.5 mb-3 sm:mb-4 min-w-0">
                    <div className="flex h-9 w-9 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-[#071326] text-[#D4AF37] font-bold group-hover:bg-[#D4AF37] group-hover:text-black transition-colors shadow-sm">
                      <s.icon className="h-4.5 w-4.5 sm:h-5.5 sm:w-5.5" />
                    </div>
                    <h3 className="text-[14px] sm:text-[19px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#8c6b12] transition-colors leading-tight">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-[12px] sm:text-[14px] text-[#5c564e] font-normal leading-relaxed mb-4 sm:mb-6 line-clamp-3 sm:line-clamp-none mt-2">
                    {s.body}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-3 sm:pt-4 border-t border-[#f2ece1]">
                  {s.tags.slice(0, 2).map((t) => (
                    <span key={t} className={`text-[9.5px] sm:text-[11px] font-semibold tracking-wide border rounded-md px-1.5 sm:px-2.5 py-0.5 ${s.tagColor}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FIRM MODEL SECTION — SAPPHIRE BLUE GRADIENT WITH GOLD CHECKS */}
      <section className="relative bg-gradient-to-r from-[#050c1a] via-[#071326] to-[#050c1a] text-white py-16 lg:py-24 border-b border-[#1b3563] font-sans overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#D4AF37]/10 blur-[130px] pointer-events-none" />
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D4AF37]">Why {clientConfig.name}</span>
              <h2 className="text-3xl font-light text-white tracking-tight mt-1 mb-4">
                A Consulting Model <span className="font-semibold text-[#D4AF37]">Engineered for Results</span>
              </h2>
              <p className="text-[15px] text-[#b0cae8] font-light leading-relaxed mb-6">
                Independent. Senior by design. Totally outcome accountable. We replace expensive, layered consultancy pyramids with high-density practitioner pods that ship real enterprise cloud architectures.
              </p>
              <Link href="/who-we-are" className="inline-flex items-center gap-2 font-bold text-[#D4AF37] text-[14.5px] hover:underline">
                <span>Meet the senior partners</span>
                <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
              </Link>
            </div>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {[
                { t: 'Senior Practitioners Only', d: 'Every program is directed and staffed by partners who personally architect at scale. Zero junior training ground pass-throughs.' },
                { t: 'Fiercely Independent Counsel', d: 'We remain 100% vendor agnostic. Our structural guidance optimizes solely for corporate resilience and cost efficiency.' },
                { t: 'Audited Outcome Accountable', d: 'Our delivery milestones and governance cadences are explicitly bound to the audited technical and financial outcomes we agree upon.' },
                { t: 'From Boardroom to Production', d: 'One cohesive team taking full ownership through architectural advisory, systems engineering, compliance sign-off, and production scale.' }
              ].map((p, idx) => (
                <div key={idx} className="hover-SensiTech-border bg-[#0a192f] p-6 border border-[#1b3563] rounded-2xl shadow-md hover:border-transparent transition-all">
                  <div className="flex items-center gap-2.5 mb-2">
                    <CheckCircle className="h-5 w-5 text-[#D4AF37] shrink-0" />
                    <h4 className="text-[17px] font-bold text-white">{p.t}</h4>
                  </div>
                  <p className="text-[13.5px] text-[#a1bcdc] font-light leading-relaxed">{p.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES WE SERVE SECTION */}
      <section className="bg-[#faf7f2] text-[#1c1a18] py-16 lg:py-24 border-b border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 border-l-4 border-[#D4AF37] pl-4 sm:pl-5">
            <div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#8c6b12] block mb-1">
                Vertical Domain Expertise
              </span>
              <h2 className="text-2xl sm:text-4xl font-light text-[#1c1a18] tracking-tight">
                Industries We <span className="font-semibold text-black">Serve</span>
              </h2>
            </div>
            <Link href="/industries" className="mt-4 md:mt-0 inline-flex items-center gap-1.5 text-[14px] font-bold text-[#8c6b12] hover:underline">
              <span>Explore All Industries</span>
              <ArrowUpRight className="h-4 w-4 text-[#D4AF37]" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {industriesData.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover-SensiTech-border group flex flex-col justify-between bg-white border border-[#e4d7c5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="relative h-[120px] sm:h-[210px] w-full overflow-hidden bg-[#071326]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071326]/90 via-[#071326]/30 to-transparent" />
                    <span className="absolute top-2 left-2 sm:top-4 sm:left-4 bg-[#faf7f2] text-black px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-extrabold uppercase tracking-wider shadow truncate max-w-[90%]">
                      {item.label}
                    </span>
                  </div>

                  <div className="p-3 sm:p-7">
                    <h3 className="text-[14px] sm:text-[21px] font-bold text-[#1c1a18] tracking-tight group-hover:text-[#8c6b12] transition-colors mb-1.5 sm:mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-[12px] sm:text-[14.5px] text-[#595248] font-normal leading-relaxed mb-3 sm:mb-6 line-clamp-2 sm:line-clamp-none">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-3 sm:px-7 pb-3 sm:pb-6 pt-2 sm:pt-4 border-t border-[#f2ece2] flex items-center justify-between">
                  <span className="text-[10px] sm:text-[12px] font-extrabold text-[#8c6b12] uppercase tracking-wider truncate max-w-[80px] sm:max-w-none">
                    {item.stats}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] sm:text-[13px] font-bold text-[#1c1a18] group-hover:text-[#8c6b12] transition-colors shrink-0">
                    <span>Explore</span> <ArrowRight className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-[#D4AF37]" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US SECTION */}
      <section className="relative bg-gradient-to-b from-[#050c1a] via-[#071326] to-[#050c1a] text-white py-12 lg:py-14 border-b border-[#1b3563] font-sans overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#D4AF37]/10 blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1e40af]/15 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-[1500px] px-6 lg:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 pb-4 border-b border-[#1b3563]">
            <div>
              <span className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#D4AF37] flex items-center gap-2 mb-1">
                <Sparkles className="h-3.5 w-3.5 text-[#D4AF37]" />
                The {clientConfig.shortName} Advantage
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-white tracking-tight">
                Why Choose <span className="font-semibold text-[#D4AF37]">Us</span>
              </h2>
            </div>
            <p className="mt-2 md:mt-0 text-[13px] sm:text-[14px] text-[#a9c4e6] max-w-md font-light leading-relaxed hidden sm:block">
              We replaced traditional, bloated consultancy pyramids with agile practitioner pods delivering audited outcomes.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {whyChooseUsData.map((item, idx) => (
              <div
                key={idx}
                className="hover-SensiTech-border group flex flex-col justify-between bg-[#0a192f]/90 border border-[#1b3563] rounded-xl p-4 sm:p-6 shadow-lg hover:border-transparent hover:bg-[#0f2447] transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-[#142c54] text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10.5px] font-extrabold uppercase tracking-widest bg-[#173461] text-[#D4AF37] px-2 py-0.5 rounded border border-[#274c87] truncate max-w-[90px] sm:max-w-none">
                      {item.highlight}
                    </span>
                  </div>

                  <h3 className="text-[14px] sm:text-[18px] font-bold text-white tracking-tight group-hover:text-[#D4AF37] transition-colors mb-1.5 sm:mb-2 line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13.5px] text-[#b0cae8] font-light leading-relaxed mb-3 sm:mb-4 line-clamp-3 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-[#1b3563] flex items-center justify-between text-[10.5px] sm:text-[12.5px] text-[#84a9d4]">
                  <span className="truncate">Proven Model</span>
                  <CheckCircle className="h-3.5 w-3.5 text-[#D4AF37] shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 bg-[#0a192f] border border-[#1b3563] rounded-xl p-5 text-center">
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-white">€1.9B+</span>
              <span className="text-[11px] font-extrabold text-[#8caed8] uppercase tracking-wider">Infra Savings</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-[#D4AF37]">100%</span>
              <span className="text-[11px] font-extrabold text-[#8caed8] uppercase tracking-wider">Vendor Agnostic</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-white">24-Hr</span>
              <span className="text-[11px] font-extrabold text-[#8caed8] uppercase tracking-wider">Partner SLA</span>
            </div>
            <div>
              <span className="block text-2xl lg:text-3xl font-extrabold text-[#D4AF37]">0</span>
              <span className="text-[11px] font-extrabold text-[#8caed8] uppercase tracking-wider">Junior Pass-Throughs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS WHEEL */}
      <RotatingTestimonials />

      {/* 9. CONTACT INTAKE FORM */}
      <section id="contact-form" className="bg-[#faf7f2] text-[#1c1a18] py-16 border-t border-[#e5dccf] font-sans">
        <div className="mx-auto max-w-[1500px] px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Side: About {clientConfig.shortName} */}
            <div className="lg:col-span-6 space-y-6 border-l-4 border-[#D4AF37] pl-6 py-1">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-[#8c6b12] block mb-1">
                  About {clientConfig.name}
                </span>
                <h2 className="text-2xl sm:text-3xl font-light text-[#1c1a18] tracking-tight mb-3">
                  Enterprise Technology <span className="font-bold">Advisory & Architecture</span>
                </h2>
                <p className="text-[14.5px] text-[#5c5449] font-light leading-relaxed mb-4">
                  {clientConfig.name} is an independent enterprise technology consultancy providing software development, cloud modernization, applied AI solutions, and executive digital transformation. We replace bloated legacy consultancy pyramids with small, senior practitioner pods that deliver audited outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-b border-[#e5dccf] py-4 text-[13.5px]">
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span>Senior Practitioners Only</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span>100% Vendor Agnostic</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span>Audited Financial SLAs</span>
                </div>
                <div className="flex items-center gap-2 font-semibold text-[#2d2923]">
                  <CheckCircle className="h-4 w-4 text-[#D4AF37]" />
                  <span>Strict NDA Compliance</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-1 text-[13.5px] text-[#554e44]">
                <a
                  href="mailto:partners@SensiTech.tech"
                  className="inline-flex items-center gap-2 font-bold text-[#8c6b12] hover:underline"
                >
                  <Mail className="h-4 w-4 text-[#1c1a18]" /> partners@SensiTech.tech
                </a>
                <span className="flex items-center gap-2 font-bold text-[#1c1a18]">
                  <Phone className="h-4 w-4 text-[#8c6b12]" /> +1 (212) 555–0117
                </span>
                <span className="flex items-center gap-1.5 font-bold text-[#1c1a18]"><Clock className="h-4 w-4 text-[#D4AF37]" /> 24h Partner SLA</span>
              </div>
            </div>

            {/* Right Side: Compact Contact Form Card */}
            <div className="lg:col-span-6">
              <form
                onSubmit={onSubmit}
                className="hover-SensiTech-border bg-white border border-[#e2d8c9] rounded-xl p-6 md:p-7 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:border-transparent transition-all duration-300"
              >
                <div className="mb-5 border-b border-[#f0e7db] pb-4">
                  <h3 className="text-xl font-light text-[#1c1a18] tracking-tight">
                    Get in Touch with <span className="font-bold">Senior Partners</span>
                  </h3>
                  <p className="text-[13px] text-[#6b6257] mt-0.5 font-normal">
                    Direct partner response within 24 hours under mutual NDA.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
                  <div>
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      placeholder="e.g. Dr. Marcus Vance"
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors placeholder:text-[#a0978b]"
                    />
                  </div>

                  <div>
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Work Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="name@enterprise.com"
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors placeholder:text-[#a0978b]"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Capability of Interest
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={onChange}
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded px-3.5 py-2 text-[14px] text-[#1c1a18] font-medium focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors cursor-pointer"
                    >
                      {capabilityOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-white text-[#1c1a18]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="text-[10.5px] font-extrabold uppercase tracking-[0.15em] text-[#71675b] block mb-1">
                      Program Scope & Objectives *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={3}
                      placeholder="Briefly describe your cloud, AI, or architecture requirements..."
                      className="w-full bg-[#fcfbfa] border border-[#dad2c3] rounded p-3 text-[14px] text-[#1c1a18] focus:outline-none focus:border-[#D4AF37] focus:bg-white transition-colors resize-none placeholder:text-[#a0978b] font-light"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#f0e7db] flex items-center justify-between gap-4">
                  <p className="text-[11.5px] text-[#736a5d] font-normal leading-tight">
                    Strict confidentiality under mutual NDA.
                  </p>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex items-center justify-center gap-2 rounded bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B8860B] px-6 py-3 text-[13.5px] font-extrabold text-black hover:opacity-95 shadow-md transition-all disabled:opacity-50 shrink-0"
                  >
                    <span>{submitting ? 'Transmitting...' : 'Submit Inquiry'}</span>
                    <ArrowUpRight className="h-4 w-4 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}
