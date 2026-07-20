import { motion } from 'framer-motion'

export function Mission() {
  return (
    <div className="flex flex-col justify-center max-w-285 gap-6 px-8">
      {[
        "We believe AI should empower businesses, not complicate them. Our mission is to deliver intelligent automation for global trade and customer experience.",
        "From import/export documentation to 24/7 AI support agents — we build solutions that work while you sleep. Making enterprise-grade AI accessible to every business.",
      ].map((text, i) => (
        <motion.p
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#94a3b8] text-[clamp(1.5rem,3vw,2rem)] font-medium leading-[1.4] tracking-tight text-left"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {text}
        </motion.p>
      ))}
    </div>
  )
}