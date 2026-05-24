'use client';
import Image from 'next/image';
import { useReducedMotion } from 'framer-motion';
import { PARTNERS } from '@/lib/constants';

export default function PartnersMarquee() {
  const reduce = useReducedMotion();
  const row = [...PARTNERS, ...PARTNERS];

  return (
    <section className='relative overflow-hidden border-y border-slate-800 bg-[linear-gradient(90deg,rgba(8,11,20,1),rgba(16,26,48,.97),rgba(8,11,20,1))] py-12'>
      <div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-[#080b14] to-transparent' />
      <div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-[#080b14] to-transparent' />

      <div className='overflow-hidden'>
        <div className={`flex w-max items-center ${reduce ? '' : 'animate-[marquee_52s_linear_infinite] hover:[animation-play-state:paused]'} will-change-transform`}>
          {row.map((p, idx) => (
            <span key={`${p.name}-${idx}`} className='mx-10 inline-flex h-20 items-center justify-center'>
              <span className='relative block' style={{ width: `${Math.round(p.width * 1.8)}px`, height: `${Math.round(p.height * 1.8)}px` }}>
                <Image
                  src={p.logoSrc}
                  alt={p.logoAlt}
                  fill
                  sizes={`${Math.round(p.width * 1.8)}px`}
                  className='object-contain opacity-90 grayscale brightness-150 contrast-125 transition hover:opacity-100 hover:grayscale-0'
                />
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

