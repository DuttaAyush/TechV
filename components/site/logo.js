'use client';

import Link from 'next/link';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['700', '800'],
  display: 'swap',
});

export default function Logo({ className = '', size = 'md' }) {
  const textSize = size === 'sm' ? 'text-xl' : size === 'lg' ? 'text-2xl' : 'text-xl';
  const tagSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-[15px]' : 'text-[13px]';

  return (
    <Link
      href="/"
      aria-label="VRTANS"
      className={`group inline-flex items-center gap-1.5 ${className}`}
    >
      <div className="flex items-baseline gap-2 transition-opacity group-hover:opacity-90">
        <span
          className={`${montserrat.className} ${textSize} font-extrabold tracking-[-0.03em] bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFF8DC] to-[#AA771C] drop-shadow-sm`}
        >
          VRTANS
        </span>
        <span className={`hidden sm:inline ${textSize} font-bold text-white tracking-tight text-muted-foreground`}>
          Technologies
        </span>
      </div>
    </Link>
  );
}