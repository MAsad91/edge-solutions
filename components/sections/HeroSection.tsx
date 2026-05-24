'use client';
import { useMemo } from 'react';
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import { COMPANY } from '@/lib/constants';
import { GlowButton } from '@/components/ui/GlowButton';
import { parallaxConfig, staggerIn, maskReveal, orbit, spherePulse, traceFlow } from '@/lib/motion';

const HERO_KEYWORD = 'TRANSFORM';
const CONNECTORS = ['Infrastructure Management', 'Data Center', 'AI Framework'];

export default function HeroSection() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 70, damping: 20 });
  const sy = useSpring(my, { stiffness: 70, damping: 20 });
  const gridOffset = useMotionTemplate`${sx}px ${sy}px`;
  const rightX = useMemo(() => sx, [sx]);

  return (
    <section onMouseMove={(e) => { if (reduce) return; const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); mx.set(((e.clientX - r.left) / r.width - 0.5) * parallaxConfig.heroGridRange); my.set(((e.clientY - r.top) / r.height - 0.5) * parallaxConfig.heroGridRange); }} className='relative flex min-h-screen items-center overflow-hidden px-4 pb-10 pt-2 sm:px-6 sm:pt-6 lg:px-6 lg:pt-4'>
      <div className='absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_0%,rgba(59,130,246,.15),transparent_65%),radial-gradient(900px_450px_at_80%_10%,rgba(14,165,233,.12),transparent_60%),#080b14]' />
      <motion.div style={reduce ? undefined : { backgroundPosition: gridOffset }} className='absolute inset-0 opacity-20 [background-image:radial-gradient(#00b4f0_1px,transparent_1px)] [background-size:22px_22px]' />
      <motion.div style={reduce ? undefined : { x: sx, y: sy }} className='absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-500/25 blur-3xl' />
      <motion.div style={reduce ? undefined : { x: rightX.get() * -1, y: sy.get() * -1 }} className='absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-blue-600/25 blur-3xl' />

      <motion.svg variants={traceFlow} animate={reduce ? undefined : 'idle'} viewBox='0 0 100 100' className='pointer-events-none absolute inset-0 hidden h-full w-full opacity-35 lg:block'>
        <path d='M2 78 C 24 56, 35 65, 48 45 C 63 22, 77 32, 98 16' stroke='#22d3ee' strokeWidth='0.35' fill='none' />
        <path d='M2 88 C 28 68, 42 74, 58 50 C 72 30, 86 40, 98 26' stroke='#38bdf8' strokeWidth='0.28' fill='none' />
      </motion.svg>

      <motion.div className='relative mx-auto grid w-full max-w-7xl items-end gap-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-8' variants={staggerIn(0.09)} initial={reduce ? undefined : 'hidden'} animate={reduce ? undefined : 'visible'}>
        <div>
          <motion.p variants={maskReveal} className='mb-2 text-[11px] tracking-[0.2em] text-cyan-300 uppercase sm:mb-3 sm:text-xs'>Enterprise IT Delivery Partner</motion.p>
          <motion.h1 variants={maskReveal} className='text-[clamp(2.2rem,13vw,9.2rem)] font-black leading-[0.88] text-transparent bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text drop-shadow-[0_0_18px_rgba(0,180,240,.18)]'>{HERO_KEYWORD}</motion.h1>
          <motion.p variants={maskReveal} className='mt-3 max-w-2xl text-xl italic text-slate-200 sm:mt-4 sm:text-2xl'>Protect your assets, reduce <span className='font-semibold text-cyan-300 not-italic'>Risk & Optimize</span> performance.</motion.p>
          <motion.p variants={maskReveal} className='mt-4 max-w-2xl text-sm text-slate-300 sm:mt-5 sm:text-base'>{COMPANY.mission}</motion.p>
          <motion.div variants={maskReveal} className='mt-6 grid gap-3 sm:mt-8 sm:flex sm:flex-wrap sm:gap-4'>
            <GlowButton effect='shimmer' className='w-full sm:w-auto'>Speak With an Expert</GlowButton>
            <GlowButton variant='outline' className='w-full sm:w-auto'>Discover Services</GlowButton>
          </motion.div>
        </div>

        <div className='relative hidden h-[450px] lg:block'>
          <motion.div variants={spherePulse} animate={reduce ? undefined : 'idle'} className='absolute bottom-4 right-0 h-44 w-44 rounded-full border border-cyan-300/30 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,.45),rgba(15,20,32,.9)_62%)] shadow-[0_0_40px_rgba(56,189,248,.25)]' />

          {!reduce && (
            <>
              <motion.div variants={orbit} animate='idle' className='absolute right-5 top-8 h-72 w-72 rounded-full border border-cyan-300/50' />
              <motion.div variants={orbit} animate='idle' style={{ rotate: 25 }} className='absolute right-3 top-10 h-80 w-80 rounded-full border border-blue-300/30' />
            </>
          )}

          <div className='absolute bottom-8 right-44 w-80 space-y-10'>
            {CONNECTORS.map((item, i) => (
              <div key={item} className='relative pr-6 text-right'>
                <p className='text-xl text-slate-100'>{item}</p>
                <span className='absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300' />
                <span className='absolute right-2 top-1/2 h-px w-52 -translate-y-1/2 bg-cyan-300/70' />
                <span className='absolute right-52 top-1/2 h-px w-12 -translate-y-1/2 bg-cyan-300/70' style={{ transform: `translateY(-50%) translateX(${i * 3}px)` }} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
