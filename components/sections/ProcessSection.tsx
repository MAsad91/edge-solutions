'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { PROCESS_STEPS } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { fadeUp, stagger } from '@/lib/motion';

export default function ProcessSection(){const reduce=useReducedMotion();return <section className='mx-auto max-w-7xl px-6 py-20'><SectionLabel>ENGAGEMENT MODEL</SectionLabel><h2 className='text-4xl font-bold text-white'>From assessment to always-on operations</h2><motion.div className='mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4' variants={stagger(0.1)} initial={reduce?undefined:'hidden'} whileInView={reduce?undefined:'visible'} viewport={{once:true,amount:0.2}}>{PROCESS_STEPS.map((s,idx)=><motion.article key={s.title} variants={fadeUp} className='rounded-2xl border border-slate-700 bg-[#0f1420] p-6'><p className='text-xs tracking-widest text-cyan-300'>STEP {idx+1}</p><h3 className='mt-2 text-xl text-white'>{s.title}</h3><p className='mt-2 text-sm text-slate-400'>{s.detail}</p></motion.article>)}</motion.div></section>}
