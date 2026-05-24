'use client';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { PARTNERS } from '@/lib/constants';

export default function PartnersMarquee() {
  const reduce = useReducedMotion();
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className='relative overflow-hidden border-y border-slate-800 bg-[linear-gradient(90deg,rgba(8,11,20,1),rgba(16,26,48,.97),rgba(8,11,20,1))] py-8 sm:py-10 md:py-12'>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#080b14] to-transparent sm:w-20 md:w-28' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#080b14] to-transparent sm:w-20 md:w-28' />

      <div className='overflow-hidden'>
        <div className={`flex w-max items-center ${reduce ? '' : 'animate-[marquee_52s_linear_infinite] hover:[animation-play-state:paused]'} will-change-transform`}>
          {row.map((p, idx) => {
            const scale = 1.3;
            return (
              <span key={`${p.name}-${idx}`} className='mx-6 inline-flex h-16 items-center justify-center sm:mx-8 sm:h-18 md:mx-10 md:h-20'>
                <span className='relative block' style={{ width: `${Math.round(p.width * scale)}px`, height: `${Math.round(p.height * scale)}px` }}>
                  <Image src={p.logoSrc} alt={p.logoAlt} fill sizes={`${Math.round(p.width * scale)}px`} className='object-contain opacity-90 grayscale brightness-150 contrast-125 transition hover:opacity-100 hover:grayscale-0' />
                </span>
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
