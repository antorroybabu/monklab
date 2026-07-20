import { motion } from 'framer-motion'

export function NumbersUsers() {
  return (
    <div className="flex flex-col items-center text-center gap-5 px-8">
      <motion.h2
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(2.5rem,8vw,6.25rem)] font-medium leading-none tracking-tight text-[#adb5c2]"
        style={{ textShadow: '-0.0688rem 0 rgba(184,143,151,0.45), 0.0688rem 0 rgba(134,163,188,0.45)' }}
      >
        500+ Businesses Served
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[#e2e7f2e0] text-sm md:text-base tracking-widest uppercase"
      >
        with AI-powered trade & support solutions
      </motion.p>
    </div>
  )
}

export function NumbersMAU() {
  return (
    <div className="flex flex-col items-center text-center gap-5 px-8">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[#e2e7f2e0] text-sm md:text-base tracking-widest uppercase"
      >
        Processing
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.9 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(2.5rem,8vw,6.25rem)] font-medium leading-none tracking-tight text-[#adb5c2]"
        style={{ textShadow: '-0.0688rem 0 rgba(184,143,151,0.45), 0.0688rem 0 rgba(134,163,188,0.45)' }}
      >
        10K+ Documents/Month
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[#e2e7f2e0] text-sm md:text-base tracking-widest uppercase"
      >
        across Foreign Trade & Customer Support
      </motion.p>
    </div>
  )
}