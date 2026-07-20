import { motion } from 'framer-motion'

const partnerLogos = ['Zapier', 'Hugging Face', 'WSU', 'Adobe', 'Teknikforce', 'DataStax', 'GlobalGPT']

export function Partners() {
  return (
    <div className="flex flex-col items-center text-center gap-5 px-8 w-full max-w-5xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[#e2e7f2e0] text-sm md:text-base tracking-widest uppercase"
      >
        Became
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-[clamp(2.5rem,8vw,6.25rem)] font-medium leading-none tracking-tight text-[#adb5c2]"
        style={{ textShadow: '-0.0688rem 0 rgba(184,143,151,0.45), 0.0688rem 0 rgba(134,163,188,0.45)' }}
      >
        Essential
        <br />
        on AI market
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="font-mono text-[#e2e7f2e0] text-sm md:text-base tracking-widest uppercase"
      >
        Grew B2B Ecosystem Product
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 border border-white/10 overflow-hidden relative w-full rounded-lg"
      >
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-black to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-black to-transparent" />
        <div className="flex gap-12 py-4 px-20 overflow-hidden whitespace-nowrap justify-center">
          {partnerLogos.map((name) => (
            <span key={name} className="text-white/40 font-medium text-base">{name}</span>
          ))}
        </div>
      </motion.div>
    </div>
  )
}