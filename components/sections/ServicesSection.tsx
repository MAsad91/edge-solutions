'use client';
import * as Icons from 'lucide-react';
import { SERVICES } from '@/lib/constants';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { motion, useReducedMotion } from 'framer-motion';
import { maskReveal, staggerIn } from '@/lib/motion';

export default function ServicesSection(){
  const reduce = useReducedMotion();
  return <section className='mx-auto max-w-7xl px-6 py-20'><SectionLabel>OUR SERVICES</SectionLabel><h2 className='font-[family-name:var(--font-space)] text-4xl font-bold text-slate-100'>Complete Technology Solutions</h2><motion.div className='mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4' variants={staggerIn(0.08)} initial={reduce?undefined:'hidden'} whileInView={reduce?undefined:'visible'} viewport={{once:true,amount:0.2}}>{SERVICES.map((s)=>{const Icon=(Icons as any)[s.icon] || Icons.Server; return <motion.div key={s.id} variants={maskReveal}><ServiceCard icon={Icon} title={s.name} description={s.description} imageSrc={s.imageSrc} imageAlt={s.imageAlt} /></motion.div>;})}</motion.div></section>;
}

