'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { INDUSTRIES } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { fadeUp, stagger } from '@/lib/motion';

export default function IndustriesSection() {
  const reduce = useReducedMotion();
  return <section className='mx-auto max-w-7xl px-6 py-20'><SectionLabel>INDUSTRIES WE SERVE</SectionLabel><h2 className='text-4xl font-bold text-white'>Built for regulated and high-availability sectors</h2><motion.div className='mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3' variants={stagger(0.08)} initial={reduce?undefined:'hidden'} whileInView={reduce?undefined:'visible'} viewport={{once:true,amount:0.2}}>{INDUSTRIES.map((i)=><motion.article key={i.name} variants={fadeUp} className='rounded-2xl border border-slate-700 bg-[#0f1420] p-6'><h3 className='text-lg font-semibold text-cyan-300'>{i.name}</h3><p className='mt-2 text-sm text-slate-400'>{i.summary}</p></motion.article>)}</motion.div></section>;
}
