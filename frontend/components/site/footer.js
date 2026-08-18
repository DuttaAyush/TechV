'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Logo from './logo';

const COLS = [
  {
    title: 'Company',
    links: [
      { label: 'Who We Are', href: '/who-we-are' },
      { label: 'Our Work & Outcomes', href: '/our-work' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact Our Partners', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Dev', href: '/what-we-do/web-dev' },
      { label: 'App Dev', href: '/what-we-do/app-dev' },
      { label: 'Software Dev', href: '/what-we-do/software-dev' },
      { label: 'Digital Marketing', href: '/what-we-do/digital-marketing' },
      { label: 'CRM & ERP Solutions', href: '/what-we-do/crm-dev' },
      { label: 'IT, Business & AI Consulting', href: '/what-we-do/ai-consulting' },
      { label: 'View All Services →', href: '/what-we-do' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Banking & Financial Services', href: '/industries/bfsi' },
      { label: 'AI Solutions & Computing', href: '/industries/ai-solutions' },
      { label: 'Cybersecurity & Defense', href: '/industries/cybersecurity-defense' },
      { label: 'Explore All Industries →', href: '/industries' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#000000] text-white border-t border-[#1a1a1a] font-sans antialiased">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-20 pb-14">
        {/* VRTANS-inspired Bold Connector Header */}
        {/* <div className="border-b border-[#1a1a1a] pb-14 mb-14">
          <div className="grid gap-8 lg:grid-cols-12 items-end">
            <div className="lg:col-span-8">
              <p className="text-[12px] font-normal uppercase tracking-[0.2em] text-[#86bc25]">
                Let&apos;s build what&apos;s next
              </p>
              <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-light tracking-[-0.03em] text-white text-balance leading-[1.05]">
                Ready to architect your enterprise transformation?
              </h2>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-[#86bc25] text-black px-7 py-4 rounded-sm text-[15px] font-semibold tracking-tight transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#86bc25]/20"
              >
                <span>Start a conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div> */}

        {/* Navigation Grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 pr-0 lg:pr-6">
            <Logo />
            <p className="mt-6 text-[14px] leading-relaxed text-[#999999] font-light max-w-sm">
              VRTANS is an independent enterprise consulting firm combining strategy, senior technical execution, and strict outcome accountability.
            </p>
            <div className="mt-8 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.18em] text-[#999999] block">Direct Contact & Inquiries</span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="mailto:info@vrtanstech.in"
                  className="text-[14px] font-normal text-white hover:text-[#86bc25] transition-colors underline underline-offset-4 decoration-[#86bc25]/50"
                >
                  info@vrtanstech.in
                </a>
                <span className="text-[#666666]">|</span>
                <a
                  href="mailto:care@vrtanstech.in"
                  className="text-[14px] font-normal text-white hover:text-[#86bc25] transition-colors underline underline-offset-4 decoration-[#86bc25]/50"
                >
                  care@vrtanstech.in
                </a>
              </div>
              <p className="text-[13.5px] text-[#cccccc] font-medium pt-1">
                Phone: <a href="tel:+919272342803" className="hover:text-white transition-colors">+91 9272342803</a>
              </p>
              <p className="text-[13px] text-[#999999] font-light">
                Plot no 106, Gorewada Road, Nagpur-440013
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <h4 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#ffffff] border-l-2 border-[#86bc25] pl-3 mb-6">
                  {c.title}
                </h4>
                <ul className="space-y-3.5">
                  {c.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[14px] text-[#999999] hover:text-white hover:translate-x-1 inline-block transition-all duration-200 font-light"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Legal & Operations Footer Bar */}
        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-[13px] text-[#999999]">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {new Date().getFullYear()} VRTANS. All rights reserved.</p>
            <span className="hidden md:block h-3 w-px bg-[#262626]" />
            <Link href="/privacy-policy" className="hover:text-[#86bc25] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#86bc25] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/return-and-refunds" className="hover:text-[#86bc25] transition-colors">
              Return & Refunds
            </Link>
          </div>

          <div className="flex items-center gap-3 bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#262626]">
            <span className="h-2 w-2 rounded-full bg-[#86bc25] animate-pulse" />
            <span className="text-[12.5px] font-normal text-white uppercase tracking-wider">Global Operations Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}