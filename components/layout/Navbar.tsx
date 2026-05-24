'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { COMPANY, NAV_LINKS, SERVICE_CATEGORIES } from '@/lib/constants';
import { GlowButton } from '@/components/ui/GlowButton';

const MEGA_MENU_ID = 'services-mega-menu';
const CLOSE_DELAY_MS = 150;

export default function Navbar() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navShellRef = useRef<HTMLDivElement | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useMotionValueEvent(scrollY, 'change', (y) => setSolid(y > 20));

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openServices = useCallback(() => {
    clearCloseTimer();
    setIsServicesOpen(true);
  }, [clearCloseTimer]);

  const scheduleCloseServices = useCallback(() => {
    clearCloseTimer();
    closeTimerRef.current = setTimeout(() => setIsServicesOpen(false), CLOSE_DELAY_MS);
  }, [clearCloseTimer]);

  const closeAllMenus = useCallback(() => {
    clearCloseTimer();
    setIsServicesOpen(false);
    setMobileOpen(false);
    setIsMobileServicesOpen(false);
    setActiveIndex(null);
  }, [clearCloseTimer]);

  useEffect(() => {
    closeAllMenus();
  }, [pathname, closeAllMenus]);

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!navShellRef.current?.contains(event.target as Node)) closeAllMenus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeAllMenus();
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
      clearCloseTimer();
    };
  }, [clearCloseTimer, closeAllMenus]);

  const desktopItems = NAV_LINKS.filter((n) => n.label !== 'Services');

  return (
    <motion.header initial={reduceMotion ? undefined : { opacity: 0, y: -20 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} className='fixed top-0 z-50 w-full'>
      <div ref={navShellRef} className='relative'>
        <nav className='mx-auto flex max-w-[1680px] items-center justify-between px-6 py-4 md:px-10 md:py-5'>
          <Link href='/' className='font-bold tracking-tight text-slate-100'>
            {COMPANY.name}
          </Link>

          <div className='hidden flex-1 justify-center md:flex'>
            <div className='relative'>
              <div className={`absolute inset-0 rounded-[999px] ${solid || isServicesOpen ? 'bg-cyan-500/10 blur-xl' : 'bg-transparent'}`} />
              <div className={`relative rounded-[999px] border px-10 py-3.5 backdrop-blur-2xl transition ${solid || isServicesOpen ? 'border-cyan-400/30 bg-[#101a31]/80 shadow-[inset_0_1px_0_rgba(255,255,255,.07),0_0_30px_rgba(34,211,238,.15)]' : 'border-white/12 bg-[#101a31]/60 shadow-[inset_0_1px_0_rgba(255,255,255,.05)]'}`}>
                <div className='flex items-center gap-10'>
                  <div className='relative' onMouseEnter={openServices} onMouseLeave={scheduleCloseServices} onFocusCapture={openServices} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) scheduleCloseServices(); }}>
                    <button type='button' aria-haspopup='menu' aria-expanded={isServicesOpen} aria-controls={MEGA_MENU_ID} className='inline-flex items-center gap-1 text-[15px] font-medium text-slate-200 transition hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60'>
                      Services
                      <ChevronDown className={`h-4 w-4 transition ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {desktopItems.map((n, idx) => (
                    <motion.div key={n.href} onHoverStart={() => setActiveIndex(idx)} whileHover={reduceMotion ? undefined : { y: -1.5 }}>
                      <Link href={n.href} className='relative text-[15px] font-medium text-slate-200 hover:text-cyan-300'>
                        {n.label}
                        {activeIndex === idx && !reduceMotion && <motion.span layoutId='nav-pill-underline' className='absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-cyan-300/90' />}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className='hidden md:block'>
            <GlowButton variant='orange' effect='shimmer'>Get Started</GlowButton>
          </div>

          <button className='text-slate-100 md:hidden' onClick={() => setMobileOpen((prev) => !prev)} aria-expanded={mobileOpen} aria-label='Toggle mobile menu' type='button'>
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </nav>

        <AnimatePresence>
          {isServicesOpen && (
            <motion.div id={MEGA_MENU_ID} role='menu' initial={reduceMotion ? undefined : { opacity: 0, y: -8 }} animate={reduceMotion ? undefined : { opacity: 1, y: 0 }} exit={reduceMotion ? undefined : { opacity: 0, y: -8 }} transition={{ duration: 0.18, ease: 'easeOut' }} onMouseEnter={openServices} onMouseLeave={scheduleCloseServices} className='absolute left-0 right-0 z-50 hidden border-t border-cyan-400/20 bg-[#0f1420]/95 p-6 shadow-[0_18px_50px_rgba(0,0,0,.45)] md:block'>
              <div className='mx-auto grid max-w-7xl grid-cols-4 gap-4'>
                {SERVICE_CATEGORIES.map((category) => (
                  <div key={category.title}>
                    <h4 className='mb-2 text-sm font-semibold text-cyan-300'>{category.title}</h4>
                    <ul className='space-y-1 text-xs text-slate-400'>
                      {category.items.map((item) => (
                        <li key={item}>
                          <Link href='/services' className='hover:text-slate-200'>{item}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={reduceMotion ? undefined : { x: '100%' }} animate={reduceMotion ? undefined : { x: 0 }} exit={reduceMotion ? undefined : { x: '100%' }} transition={{ duration: 0.22, ease: 'easeOut' }} className='fixed inset-0 z-50 bg-[#080b14] p-8 md:hidden'>
              <div className='mb-6 flex items-center justify-between'>
                <p className='font-semibold text-slate-100'>{COMPANY.name}</p>
                <button type='button' className='text-slate-100' onClick={() => setMobileOpen(false)} aria-label='Close menu'><X /></button>
              </div>

              <button type='button' onClick={() => setIsMobileServicesOpen((prev) => !prev)} className='mb-2 flex w-full items-center justify-between text-left text-2xl text-slate-100' aria-expanded={isMobileServicesOpen}>
                Services
                <ChevronDown className={`h-5 w-5 transition ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMobileServicesOpen && (
                <div className='mb-4 max-h-52 overflow-auto rounded-xl border border-slate-700 bg-[#0f1420] p-4'>
                  {SERVICE_CATEGORIES.map((category) => (
                    <div key={`mobile-${category.title}`} className='mb-3 last:mb-0'>
                      <p className='mb-1 text-sm font-semibold text-cyan-300'>{category.title}</p>
                      {category.items.map((item) => (
                        <Link key={`mobile-${category.title}-${item}`} href='/services' onClick={closeAllMenus} className='block text-sm text-slate-300'>{item}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              {desktopItems.map((n) => (
                <Link key={`mobile-${n.href}`} href={n.href} onClick={closeAllMenus} className='mb-4 block text-2xl text-slate-100'>{n.label}</Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
