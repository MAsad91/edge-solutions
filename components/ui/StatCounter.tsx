'use client';

import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const unsub = mv.on('change', (latest) => setDisplay(Number(latest.toFixed(1))));
    return () => unsub();
  }, [mv]);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      mv.set(value);
      return;
    }
    const controls = animate(mv, value, { duration: 1.2, ease: 'easeOut' });
    return () => controls.stop();
  }, [inView, mv, reduce, value]);

  const shown = Number.isInteger(value) ? Math.round(display) : display;

  return (
    <div ref={ref}>
      <p className='text-3xl font-bold text-slate-100'>
        {shown}
        {suffix}
      </p>
      <p className='text-sm text-slate-400'>{label}</p>
    </div>
  );
}
