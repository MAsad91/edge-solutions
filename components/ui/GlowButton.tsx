'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type GlowButtonProps = { children: React.ReactNode; variant?: 'cyan' | 'orange' | 'outline'; effect?: 'none' | 'shimmer'; className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>;
export function GlowButton({ children, variant = 'cyan', effect = 'none', className, ...props }: GlowButtonProps) {
  const reduce = useReducedMotion();
  const base = 'group relative overflow-hidden rounded-xl px-5 py-3 font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70';
  const styles = variant === 'orange' ? 'bg-orange-500 text-white shadow-[0_0_30px_rgba(249,115,22,.45)] hover:bg-orange-400' : variant === 'outline' ? 'border border-cyan-400/60 text-cyan-200 hover:bg-cyan-500/10' : 'bg-cyan-500 text-slate-950 shadow-[0_0_30px_rgba(0,180,240,.45)] hover:bg-cyan-400';
  return <motion.button animate={reduce || effect === 'none' ? undefined : { scale: [1, 1.015, 1] }} transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 2.5 }} whileHover={reduce ? undefined : { y: -2 }} className={cn(base, styles, className)} {...props}><span className='relative z-10'>{children}{variant !== 'outline' && <ArrowRight className='ml-2 inline h-4 w-4'/>}</span>{effect === 'shimmer' && !reduce && <span className='pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full'/>}</motion.button>;
}
