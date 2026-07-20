import { motion } from 'framer-motion'
import { useEffect, useState, useRef } from 'react'

function Typewriter({ text, delay = 50 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('')
  const index = useRef(0)

  useEffect(() => {
    setDisplayed('')
    index.current = 0
    const interval = setInterval(() => {
      if (index.current < text.length) {
        setDisplayed(text.slice(0, index.current + 1))
        index.current++
      } else {
        clearInterval(interval)
      }
    }, delay)
    return () => clearInterval(interval)
  }, [text, delay])

  return <span>{displayed}<span className="animate-pulse">|</span></span>
}

export function Contacts() {
  return (
    <div className="h-full w-full relative flex items-center justify-center">
      {/* Moon background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/moon.webp')" }}
      />

      <div className="relative z-10 flex flex-col items-center text-center gap-6 px-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[clamp(2.5rem,8vw,6.25rem)] font-medium leading-none tracking-tight text-[#adb5c2]"
          style={{ textShadow: '-0.0688rem 0 rgba(184,143,151,0.45), 0.0688rem 0 rgba(134,163,188,0.45)' }}
        >
          Get in touch
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-[#e2e7f2e0] text-sm md:text-base tracking-widest"
        >
          <Typewriter text="hello@monklab.ai" delay={80} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="font-mono text-white/40 text-xs tracking-widest uppercase mt-4"
        >
          Shenzhen, China
        </motion.div>
      </div>
    </div>
  )
}