'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export function ServiceCard({ icon: Icon, title, description, imageSrc, imageAlt }: { icon: React.ComponentType<{ className?: string }>; title: string; description: string; imageSrc: string; imageAlt: string }) {
  const reduce = useReducedMotion();
  return <motion.article whileHover={reduce?undefined:{ y: -8 }} className={cn('overflow-hidden rounded-2xl border border-slate-700 bg-[#0f1420] transition','hover:border-cyan-400/70 hover:shadow-[0_0_24px_rgba(0,180,240,.35)]')}>
    <div className='relative aspect-[16/9] overflow-hidden'>
      <motion.div whileHover={reduce?undefined:{ scale: 1.05 }} transition={{ duration: 0.45 }} className='h-full w-full'>
        <Image src={imageSrc} alt={imageAlt} fill sizes='(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw' className='object-cover' />
      </motion.div>
      <div className='absolute inset-0 bg-gradient-to-t from-[#0f1420] via-[#0f1420]/35 to-transparent' />
      <div className='absolute left-4 top-4 rounded-lg bg-black/35 p-2 backdrop-blur'><Icon className='h-6 w-6 text-cyan-300'/></div>
    </div>
    <div className='p-6'><h3 className='text-lg font-semibold text-slate-100'>{title}</h3><p className='mt-2 text-sm text-slate-400'>{description}</p><span className='mt-4 inline-flex items-center text-cyan-300'>Learn more <ArrowUpRight className='ml-1 h-4 w-4'/></span></div>
  </motion.article>;
}
