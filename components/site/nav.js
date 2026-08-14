'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Menu, X, ArrowUpRight, ChevronDown, ChevronRight, Download, ShoppingCart, User
} from 'lucide-react';
import Logo from './logo';
import RenderIcon from './icon-map';
import { useCart } from '@/lib/cart-context';
import { clientConfig } from '@/lib/config';
import LoginModal from './login-modal';

const SKY_IMG =
  'https://images.unsplash.com/photo-1708651949057-34781b3cbdcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDN8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBza3lzY3JhcGVyfGVufDB8fHxibGFja3wxNzgzMTY0MTAyfDA&ixlib=rb-4.1.0&q=85';
const DC_IMG =
  'https://images.unsplash.com/photo-1561233835-f937539b95b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1NzV8MHwxfHNlYXJjaHwzfHxkYXRhJTIwY2VudGVyfGVufDB8fHxibGFja3wxNzgzMTY0MTAxfDA&ixlib=rb-4.1.0&q=85';
const ARCH_IMG =
  'https://images.unsplash.com/photo-1601785491008-d1153dfadd57?crop=entropy&cs=srgb&fm=jpg&ixid=M3w8NjA0MTJ8MHwxfHNlYXJjaHwyfHxlbnRlcnByaXNlJTIwYXJjaGl0ZWN0dXJlfGVufDB8fHxibGFja3wxNzgzMTY0MTAyfDA&ixlib=rb-4.1.0&q=85';

const NAV = [
  {
    label: 'Who We Are',
    href: '/who-we-are',
    panel: {
      lead: {
        title: 'Our Story',
        description:
          'An independent enterprise technology consultancy built on senior practitioners, outcome accountability, and architectural craft.',
      },
      categories: [
        { label: 'About Us', href: '/who-we-are/about-VRTANS', icon: 'Building2' },
        { label: 'Mission & Values', href: '/who-we-are/mission-and-values', icon: 'ShieldCheck' },
        { label: 'Our Vision', href: '/who-we-are/our-vision', icon: 'Layers' },
        { label: 'Our Story', href: '/who-we-are', icon: 'Building2' },
      ],
      pages: [
        { title: 'About Us', desc: 'Global practice hubs and our core operational principles.', href: '/who-we-are/about-VRTANS', icon: 'Building2' },
        { title: 'Mission & Values', desc: 'Mandate, ethos, and single-pod outcome accountability.', href: '/who-we-are/mission-and-values', icon: 'ShieldCheck' },
        { title: 'Our Vision', desc: 'Architecting sovereign, zero-trust enterprise fabrics for 2030.', href: '/who-we-are/our-vision', icon: 'Layers' },
        { title: 'Our Story', desc: 'Senior leadership, practitioner governance, and founding history.', href: '/who-we-are', icon: 'Building2' },
      ],
      featured: {
        tag: 'About Us',
        title: 'Built for the next decade of demanding enterprise IT.',
        cta: 'Read our story',
        href: '/who-we-are',
        image: ARCH_IMG,
      },
    },
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    panel: {
      lead: {
        title: 'Core Services',
        description:
          'Nine specialized engineering and advisory practices designed to accelerate digital innovation and enterprise scale.',
      },
      categories: [
        { label: 'Web Dev', href: '/what-we-do/web-dev', icon: 'Globe' },
        { label: 'App Dev', href: '/what-we-do/app-dev', icon: 'Smartphone' },
        { label: 'Software Dev', href: '/what-we-do/software-dev', icon: 'Code' },
        { label: 'View All 9 Services', href: '/what-we-do', icon: 'Globe' },
      ],
      pages: [
        { title: 'Web Dev', desc: 'Next.js web apps and digital platforms.', href: '/what-we-do/web-dev', icon: 'Globe' },
        { title: 'App Dev', desc: 'iOS, Android & cross-platform mobile apps.', href: '/what-we-do/app-dev', icon: 'Smartphone' },
        { title: 'Software Dev', desc: 'Custom enterprise software & microservices.', href: '/what-we-do/software-dev', icon: 'Code' },
        { title: 'Digital Marketing', desc: 'Performance SEO, CRO & growth engines.', href: '/what-we-do/digital-marketing', icon: 'TrendingUp' },
        { title: 'CRM Dev', desc: 'Salesforce, HubSpot & CRM pipelines.', href: '/what-we-do/crm-dev', icon: 'Users' },
        { title: 'ERP Sol', desc: 'SAP, Oracle & supply chain ERP systems.', href: '/what-we-do/erp-sol', icon: 'Briefcase' },
        { title: 'IT Consulting', desc: 'Enterprise IT architecture & tech roadmap.', href: '/what-we-do/it-consulting', icon: 'MonitorCheck' },
        { title: 'Business Consulting', desc: 'Operating model redesign & process automation.', href: '/what-we-do/business-consulting', icon: 'LineChart' },
        { title: 'AI Consulting', desc: 'Sovereign LLMs, RAG & AI agents.', href: '/what-we-do/ai-consulting', icon: 'Cpu' },
      ],
      featured: {
        tag: 'Featured Service',
        title: 'Bespoke enterprise engineering with senior-led accountability.',
        cta: 'Explore all services',
        href: '/what-we-do',
        image: SKY_IMG,
      },
    },
  },
  {
    label: 'Industries',
    href: '/industries',
    panel: {
      lead: {
        title: 'Sector Expertise',
        description:
          'Deep vertical domain fluency across banking, healthcare, retail, logistics, and critical infrastructure.',
      },
      categories: [
        { label: 'BFSI & Banking', href: '/industries/bfsi', icon: 'Landmark' },
        { label: 'AI Solutions', href: '/industries/ai-solutions', icon: 'Cpu' },
        { label: 'Cybersecurity', href: '/industries/cybersecurity-defense', icon: 'ShieldCheck' },
        { label: 'View All Verticals', href: '/industries', icon: 'Landmark' },
      ],
      pages: [
        { title: 'BFSI & Capital Markets', desc: 'Core banking strangler patterns & instant payments.', href: '/industries/bfsi', icon: 'Landmark' },
        { title: 'AI Solutions & Agents', desc: 'Isolated RAG fabrics & enterprise AI safety.', href: '/industries/ai-solutions', icon: 'Cpu' },
        { title: 'Logistics & Supply Chain', desc: 'IoT telemetry & automated route dispatch.', href: '/industries/logistics-supply-chain', icon: 'Truck' },
        { title: 'Retail & Commerce', desc: 'Unified inventory & composable storefronts.', href: '/industries/retail-commerce', icon: 'ShoppingBag' },
        { title: 'Healthcare & Life Sciences', desc: 'FHIR data fabrics & clinical AI compute.', href: '/industries/healthcare-life-sciences', icon: 'HeartPulse' },
        { title: 'Cloud & Infrastructure', desc: 'Sovereign landing zones & 5G edge clusters.', href: '/industries/cloud-infrastructure', icon: 'Cloud' },
      ],
      featured: {
        tag: 'Perspective',
        title: 'Architecting regulatory-grade AI in European banking.',
        cta: 'Explore BFSI Solutions',
        href: '/industries/bfsi',
        image: DC_IMG,
      },
    },
  },
  {
    label: 'Our Solutions',
    href: '/our-solutions',
  },
];

export default function Nav() {
  const [active, setActive] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const navRef = useRef(null);
  const { totalItems, setIsCartOpen } = useCart();
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('user');
      if (stored) setUser(JSON.parse(stored));
    } catch(e) {}
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setActive(null);
    setMobileOpen(false);
  }, [pathname]);

  const activeItem = NAV.find((n) => n.label === active);

  return (
    <header
      ref={navRef}
      onMouseLeave={() => setActive(null)}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050c1a]/95 backdrop-blur-md border-b border-[#1b3563] shadow-2xl py-3'
          : 'bg-[#071326] border-b border-[#1b3563] py-4'
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Logo />

        {/* Desktop Navigation Items */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV.map((item) => {
            const isActive = active === item.label;
            const isCurrentPage = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <div
                key={item.label}
                onMouseEnter={() => setActive(item.label)}
                className="relative py-2"
              >
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-[14px] font-medium transition-all rounded-md ${
                    isCurrentPage
                      ? 'text-[#D4AF37] font-semibold'
                      : isActive && item.panel
                      ? 'text-white bg-[#0f2447]'
                      : 'text-zinc-200 hover:text-white hover:bg-[#0c1f3d]'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.panel && (
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isActive ? 'rotate-180 text-[#D4AF37]' : 'text-zinc-400'
                      }`}
                    />
                  )}
                </Link>
              </div>
            );
          })}
          <Link
            href="/careers"
            className={`px-4 py-2 text-[14px] font-medium transition-all rounded-md ${
              pathname === '/careers' ? 'text-[#D4AF37] font-semibold' : 'text-zinc-200 hover:text-white hover:bg-[#0c1f3d]'
            }`}
          >
            Careers
          </Link>

          {/* Cart Icon & Login Button beside Careers */}
          <div className="flex items-center gap-2.5 ml-2 border-l border-[#1b3563] pl-3">
            <button
              aria-label="Cart"
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-zinc-300 hover:text-[#D4AF37] hover:bg-[#0c1f3d] rounded-md transition-all flex items-center justify-center"
              title="View Cart"
            >
              <ShoppingCart className="h-4.5 w-4.5" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-[#D4AF37] text-[10px] font-bold text-black border border-[#071326]">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => user ? null : setIsLoginOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md border border-[#2b4c80] text-[13.5px] font-bold text-white hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#0c1f3d] transition-all"
            >
              <User className="h-4 w-4 text-[#D4AF37]" />
              <span>{user ? `Hello, ${user.name}` : 'Login'}</span>
            </button>
          </div>
        </nav>

        {/* Action CTAs: Contact Us */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B8860B] text-black hover:opacity-95 text-[13.5px] font-extrabold px-5 py-2.5 rounded shadow transition-all duration-200 hover:shadow-lg hover:shadow-[#D4AF37]/20"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="h-4 w-4 text-black" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-zinc-300 hover:text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {activeItem && activeItem.panel && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute top-full left-0 right-0 bg-[#071326] border-b border-[#1b3563] shadow-2xl text-white overflow-hidden"
          >
            <div className="mx-auto max-w-[1600px] border-t border-[#1b3563]">
              <div className="grid grid-cols-12 min-h-[380px]">
                
                {/* Left Category Column */}
                <div className="col-span-3 p-8 bg-[#050c1a] border-r border-[#1b3563] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#D4AF37] block mb-2">
                      {activeItem.panel.lead.title}
                    </span>
                    <p className="text-[13.5px] leading-relaxed text-[#b0cae8] font-light mb-8">
                      {activeItem.panel.lead.description}
                    </p>

                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D4AF37] block mb-3">
                      Sub-practices & Focus
                    </span>
                    <ul className="space-y-2">
                      {activeItem.panel.categories.map((c) => (
                        <li key={c.label}>
                          <Link
                            href={c.href}
                            onClick={() => setActive(null)}
                            className="inline-flex items-center gap-2.5 text-[13.5px] text-zinc-300 hover:text-[#D4AF37] font-medium transition-colors group"
                          >
                            <RenderIcon name={c.icon} className="h-4 w-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
                            <span>{c.label}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Center Main Navigation Links */}
                <div className="col-span-5 p-10 bg-[#071326] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-semibold block mb-6">
                      Explore Capabilities & Areas
                    </span>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                      {activeItem.panel.pages.map((p) => (
                        <Link key={p.title} href={p.href} onClick={() => setActive(null)} className="group block">
                          <div className="flex items-start gap-3">
                            {p.icon && (
                              <span className="mt-1 flex h-7 w-7 items-center justify-center rounded bg-[#1a1a1a] border border-[#262626] text-[#86bc25] group-hover:bg-[#86bc25] group-hover:text-black transition-colors shrink-0">
                                <RenderIcon name={p.icon} className="h-4 w-4" />
                              </span>
                            )}
                            <div className="min-w-0">
                              <h5 className="text-[15px] font-semibold tracking-tight text-white group-hover:text-[#86bc25] transition-colors truncate">
                                {p.title}
                              </h5>
                              <p className="mt-1 text-[12.5px] leading-relaxed text-zinc-400 font-light line-clamp-2">
                                {p.desc}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={activeItem.href}
                    onClick={() => setActive(null)}
                    className="mt-8 inline-flex items-center gap-2 border-b border-zinc-700 pb-1 text-[13.5px] font-semibold text-[#86bc25] hover:text-white hover:border-white transition-colors w-max"
                  >
                    <span>View all {activeItem.label.toLowerCase()} overview</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right Feature Spotlight */}
                <div className="col-span-4 p-10 bg-[#000000] border-l border-[#1a1a1a] flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#86bc25] block mb-4">
                      {activeItem.panel.featured.tag}
                    </span>
                    <Link
                      href={activeItem.panel.featured.href}
                      onClick={() => setActive(null)}
                      className="group block border-l-2 border-[#86bc25] pl-6 py-1 transition-all hover:border-white"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden rounded mb-5 border border-[#262626]">
                        <Image
                          src={activeItem.panel.featured.image}
                          alt=""
                          fill
                          sizes="450px"
                          className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <h5 className="text-[20px] font-medium leading-snug tracking-tight text-white group-hover:text-[#86bc25] transition-colors text-pretty">
                        {activeItem.panel.featured.title}
                      </h5>
                      <span className="mt-4 inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#86bc25] group-hover:translate-x-1 transition-transform">
                        <span>{activeItem.panel.featured.cta}</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 w-[90%] max-w-[400px] bg-[#090b0f] border-l border-[#1a1a1a] text-white flex flex-col justify-between overflow-y-auto lg:hidden"
            >
              <div>
                <div className="sticky top-0 z-10 flex h-16 items-center justify-between px-6 border-b border-[#1a1a1a] bg-[#090b0f]">
                  <Logo />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 text-zinc-400 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  {NAV.map((item) => (
                    <div key={item.label} className="border-b border-[#1a1a1a] pb-4">
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-lg font-bold text-white hover:text-[#86bc25] block mb-2"
                      >
                        {item.label}
                      </Link>
                      {item.panel && (
                        <div className="pl-3 space-y-2">
                          {item.panel.pages.slice(0, 4).map((p) => (
                            <Link
                              key={p.title}
                              href={p.href}
                              onClick={() => setMobileOpen(false)}
                              className="text-sm text-zinc-400 hover:text-white block py-1"
                            >
                              {p.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  <div className="pt-2 border-t border-[#1a1a1a] flex items-center justify-between">
                    <Link
                      href="/careers"
                      onClick={() => setMobileOpen(false)}
                      className="text-lg font-bold text-white hover:text-[#D4AF37]"
                    >
                      Careers
                    </Link>

                    <button
                      onClick={() => {
                        setMobileOpen(false);
                        if (!user) setIsLoginOpen(true);
                      }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#2b4c80] text-sm font-bold text-[#D4AF37]"
                    >
                      <User className="h-4 w-4" />
                      {user ? `Hello, ${user.name}` : 'Login'}
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-[#1a1a1a] bg-[#090b0f]">
                <a
                  href="#contact-form"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#B8860B] text-black font-extrabold text-sm py-3 rounded shadow"
                >
                  <span>Contact Us</span>
                  <ArrowUpRight className="h-4 w-4 text-black" />
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
      <LoginModal isOpen={isLoginOpen} setIsOpen={setIsLoginOpen} onLogin={setUser} />
    </header>
  );
}
