import { Variants } from 'framer-motion';

export const timingTokens = {
  quick: 0.2,
  base: 0.45,
  medium: 0.65,
};

export const easing = [0.22, 1, 0.36, 1] as const;

export const reducedMotionGuards = {
  parallax: 0,
  magnetic: 0,
  pulse: 1,
};

export const parallaxConfig = {
  heroBlobRange: 18,
  heroGridRange: 10,
  orbitSpeed: 16,
  traceFlowSpeed: 9,
  spherePulseSpeed: 3.6,
  intensityCap: 1,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: timingTokens.base, ease: easing } },
};

export const maskReveal: Variants = {
  hidden: { opacity: 0, y: 20, clipPath: 'inset(0 0 100% 0)' },
  visible: {
    opacity: 1,
    y: 0,
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: timingTokens.medium, ease: easing },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: timingTokens.medium, ease: easing } },
};

export const staggerIn = (delayChildren = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delayChildren } },
});

export const orbit: Variants = {
  idle: {
    rotate: 360,
    transition: { duration: 16, ease: 'linear', repeat: Infinity },
  },
};

export const traceFlow: Variants = {
  idle: {
    opacity: [0.25, 0.55, 0.25],
    transition: { duration: 3.5, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const spherePulse: Variants = {
  idle: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
    transition: { duration: 3.6, repeat: Infinity, ease: 'easeInOut' },
  },
};

export const stagger = staggerIn;
