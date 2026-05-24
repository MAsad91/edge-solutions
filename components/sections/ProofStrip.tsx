'use client';
import { useMemo } from 'react';
import { motion, useReducedMotion, useInView, animate, useMotionValue } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { KPIS } from '@/lib/constants';
import { maskReveal, staggerIn } from '@/lib/motion';

function KpiCount({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [shown, setShown] = useState(value);

  const parsed = useMemo(() => {
    const n = Number(value.replace(/[^0-9.]/g, ''));
    const suffix = value.replace(/[0-9.]/g, '');
    return Number.isNaN(n) ? null : { n, suffix, decimals: value.includes('.') ? 1 : 0 };
  }, [value]);

  useEffect(() => {
    if (!parsed || !inView) return;
    if (reduce) {
      setShown(value);
      return;
    }
    const stop = mv.on('change', (v) => setShown(`${v.toFixed(parsed.decimals)}${parsed.suffix}`));
    const ctr = animate(mv, parsed.n, { duration: 1.1 });
    return () => {
      stop();
      ctr.stop();
    };
  }, [inView, mv, parsed, reduce, value]);

  return <motion.div ref={ref} variants={maskReveal}><motion.p className='text-2xl font-bold text-white' whileInView={reduce ? undefined : { scale: [1, 1.04, 1] }} transition={{ duration: 0.35 }}>{shown}</motion.p><p className='text-sm text-slate-400'>{label}</p></motion.div>;
}

export default function ProofStrip() {
  const reduce = useReducedMotion();
  return (
    <section className='border-y border-slate-800 bg-[#0b111c]'>
      <motion.div className='mx-auto grid max-w-7xl gap-6 px-6 py-8 sm:grid-cols-2 lg:grid-cols-4' variants={staggerIn(0.08)} initial={reduce ? undefined : 'hidden'} whileInView={reduce ? undefined : 'visible'} viewport={{ once: true, amount: 0.35 }}>
        {KPIS.map((kpi) => <KpiCount key={kpi.label} value={kpi.value} label={kpi.label} />)}
      </motion.div>
    </section>
  );
}
