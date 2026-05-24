import Image from 'next/image';
import { StatCounter } from '@/components/ui/StatCounter';

export default function AboutSection() {
  return (
    <section className='mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-10'>
      <div>
        <h2 className='font-[family-name:var(--font-space)] text-3xl font-bold text-slate-100 sm:text-4xl'>Built for critical infrastructure.</h2>
        <p className='mt-4 text-slate-300'>Hum Edge Solutions helps enterprises modernize platforms while reducing risk. We align architecture, operations, and security into one operating model.</p>
        <p className='mt-4 text-slate-400'>Our teams combine cloud-native engineering with compliance-ready governance so your business can ship quickly and remain resilient.</p>
        <div className='mt-8 grid grid-cols-2 gap-5 sm:gap-6'>
          <StatCounter value={20} suffix='+' label='Years' />
          <StatCounter value={500} suffix='+' label='Clients' />
          <StatCounter value={99.9} suffix='%' label='Uptime' />
          <StatCounter value={24} suffix='/7' label='Support' />
        </div>
      </div>

      <div className='group relative rounded-2xl border border-cyan-400/20 bg-[#0f1420] p-4 shadow-[0_0_40px_rgba(0,180,240,.08)] sm:p-6'>
        <div className='pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_15%_20%,rgba(56,189,248,.16),transparent_45%),radial-gradient(circle_at_85%_80%,rgba(59,130,246,.14),transparent_40%)]' />

        <div className='relative h-64 overflow-hidden rounded-xl border border-cyan-400/15 sm:h-80'>
          <Image src='/images/infrastructure/rightSide.png' alt='Infrastructure operations visualization' fill sizes='(max-width: 1024px) 100vw, 50vw' className='object-cover transition duration-700 group-hover:scale-[1.035] group-hover:saturate-125' priority={false} />
          <div className='absolute inset-0 bg-[linear-gradient(160deg,rgba(6,11,24,.18)_0%,rgba(8,11,20,.48)_60%,rgba(8,11,20,.72)_100%)]' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(34,211,238,.12),transparent_55%)] opacity-90' />
          <div className='pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100'>
            <div className='absolute inset-0 bg-[linear-gradient(120deg,transparent_35%,rgba(56,189,248,.24)_50%,transparent_65%)] animate-[pulse_2.4s_ease-in-out_infinite]' />
          </div>
          <div className='absolute inset-0 ring-1 ring-cyan-300/20' />
        </div>
      </div>
    </section>
  );
}
