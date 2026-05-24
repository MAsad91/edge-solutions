import Link from 'next/link';
import { COMPANY, FOOTER_LINKS } from '@/lib/footer-data';

export default function Footer() {
  return (
    <footer className='border-t border-slate-800 bg-[#080b14]'>
      <div className='mx-auto grid max-w-7xl gap-8 px-6 py-12 md:grid-cols-4'>
        <div>
          <h3 className='text-lg font-bold text-white'>{COMPANY.name}</h3>
          <p className='mt-2 text-sm text-slate-400'>{COMPANY.mission}</p>
        </div>

        {FOOTER_LINKS.map((g) => (
          <div key={g.title}>
            <h4 className='mb-2 text-sm font-semibold text-cyan-300'>{g.title}</h4>
            {g.links.map((l) => (
              <Link
                key={`${g.title}-${l.label}-${l.href}`}
                href={l.href}
                className='block text-sm text-slate-400 hover:text-white'
              >
                {l.label}
              </Link>
            ))}
          </div>
        ))}
      </div>

      <div className='border-t border-slate-800 px-6 py-4 text-xs text-slate-500'>
        © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
      </div>
    </footer>
  );
}
