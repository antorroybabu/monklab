import { motion } from 'framer-motion'

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-6 py-5"
    >
      <a href="/" className="flex items-center gap-3 group">
        {/* Blood SVG Icon */}
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-110"
        >
          {/* Blood drop */}
          <path
            d="M18 4C18 4 8 16 8 23C8 27.4183 12.0294 31 17 31H19C23.9706 31 28 27.4183 28 23C28 16 18 4 18 4Z"
            fill="url(#bloodGradient)"
            stroke="url(#bloodStroke)"
            strokeWidth="1.5"
          />
          {/* Highlight */}
          <ellipse
            cx="14"
            cy="20"
            rx="3"
            ry="4"
            fill="white"
            fillOpacity="0.15"
          />
          <defs>
            <linearGradient id="bloodGradient" x1="18" y1="4" x2="18" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#dc2626" />
              <stop offset="0.5" stopColor="#b91c1c" />
              <stop offset="1" stopColor="#991b1b" />
            </linearGradient>
            <linearGradient id="bloodStroke" x1="18" y1="4" x2="18" y2="31" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ef4444" />
              <stop offset="1" stopColor="#7f1d1d" />
            </linearGradient>
          </defs>
        </svg>

        {/* Brand Name */}
        <span className="text-white font-bold text-2xl tracking-tight" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, sans-serif" }}>
          Monk<span className="text-red-500">Lab</span>
        </span>
      </a>
    </motion.header>
  )
}