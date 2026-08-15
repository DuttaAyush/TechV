'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Mail, PhoneCall, MessageSquare } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function ConsultationWidget() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [open, setOpen] = useState(false);
  const [homeScrollReady, setHomeScrollReady] = useState(true);
  const widgetRef = useRef(null);
  const { isCartOpen } = useCart();

  useEffect(() => {
    if (isCartOpen) setOpen(false);
  }, [isCartOpen]);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (e) => {
      if (!widgetRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!isHome) {
      setHomeScrollReady(true);
      return;
    }
    const checkScroll = () => {
      if (window.matchMedia('(min-width: 769px)').matches) {
        setHomeScrollReady(true);
      } else {
        setHomeScrollReady(window.scrollY > 150);
      }
    };
    checkScroll();
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, [isHome]);

  const close = () => setOpen(false);

  if (!homeScrollReady) return null;

  const shouldCollapse = isCartOpen && !open;

  return (
    <div
      ref={widgetRef}
      className={`fixed bottom-6 sm:bottom-8 z-50 flex flex-col items-end overflow-hidden shadow-2xl transition-all duration-300 ${
        isCartOpen ? 'right-4 md:right-[464px]' : 'right-4 sm:right-8'
      } ${
        shouldCollapse ? 'rounded-full bg-transparent border-none pointer-events-none' : 'rounded-2xl bg-[#1B1931] border border-[#662249]/50 pointer-events-auto'
      } ${
        open ? 'shadow-[#ED9E59]/30 ring-1 ring-[#ED9E59]/40' : 'hover:border-[#ED9E59]/50 hover:shadow-[#ED9E59]/20'
      }`}
    >
      {/* Expandable Shutter Menu */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out pointer-events-auto ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-2 p-3 w-full min-w-[240px]">
            <Link
              href="/contact"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#44174E]/40 text-white text-sm font-medium transition-all hover:bg-[#ED9E59]/15 hover:text-[#ED9E59] hover:translate-x-0.5"
            >
              <PhoneCall className="h-4 w-4 text-[#ED9E59]" />
              <span>Contact Us</span>
            </Link>

            <a
              href="mailto:partners@VRTANS.tech?subject=Enterprise%20Consulting%20Inquiry"
              onClick={close}
              className="flex items-center gap-3 p-3 rounded-xl bg-[#44174E]/40 text-white text-sm font-medium transition-all hover:bg-[#ED9E59]/15 hover:text-[#ED9E59] hover:translate-x-0.5"
            >
              <Mail className="h-4 w-4 text-[#ED9E59]" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setOpen((val) => !val)}
        aria-expanded={open}
        className={`flex items-center justify-center gap-2.5 bg-[#ED9E59] hover:bg-[#E28945] text-black text-[14.5px] font-bold tracking-tight transition-all pointer-events-auto ${
          shouldCollapse ? 'w-14 h-14 p-0 rounded-full shadow-lg' : 'w-full px-6 py-3.5 border-t border-black/10'
        }`}
        title={shouldCollapse ? 'Schedule a consultation' : undefined}
      >
        {!shouldCollapse && <span>{open ? 'Close options' : 'Schedule a consultation'}</span>}
        <MessageSquare className={`${shouldCollapse ? 'h-6 w-6' : 'h-4 w-4'} text-black shrink-0`} />
      </button>
    </div>
  );
}
