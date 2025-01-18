import { useTransform, Variants } from 'framer-motion'

export const openTransition = {
  open: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
}

export const variantsNavLink = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -200 },
    },
  },
  closed: {
    y: 80,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export const navbarBackground = {
  open: {
    clipPath: 'circle(150% at 93% 8%)',
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: 'circle(0% at 93% 8%)',
    transition: {
      delay: 0.1,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const containerLoadingVariants: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.14,
      staggerDirection: 1,
      delayChildren: 0.2,
      repeat: Infinity,
      repeatDelay: 0.1,
    },
  },
}

export const bounceLoadingVariants: Variants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 0.3,
      times: [0, 0.6, 1],
      ease: 'easeInOut',
    },
  },
}

export const exitLoadingVariants: Variants = {
  initial: {
    opacity: 1,
  },

  exit: {
    opacity: 0,
    filter: 'blur(12px)',
    y: 40,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
}

export const textHighlight: Variants = {
  initial: {
    opacity: 0,
    y: '100%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 3.75, duration: 0.8 },
  },
}
