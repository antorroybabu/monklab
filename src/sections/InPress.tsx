import { motion } from 'framer-motion'

const pressItems = [
  {
    author: 'Movez',
    handle: '@0xMovez',
    text: 'Trading bots/agents on Polymarket generated over $60M in profit in 2025-2026. 77%',
    url: 'https://x.com/0xMovez/status/2049891014249431141',
    left: '29.2%',
    top: '22%',
    width: '15.25rem',
    rotate: '-0.25deg',
    z: 4,
    delay: '-1.6s',
    duration: '7.8s',
  },
  {
    author: 'kaize',
    handle: '@0x_kaize',
    text: 'Everything you need to install, set up, and actually use Hermes Agent: Self-learning skills, persistent memory, Telegram integration, building your own automated',
    url: 'https://x.com/0x_kaize/status/2058258839326031958',
    left: '64.9%',
    top: '22.5%',
    width: '18.25rem',
    rotate: '0.25deg',
    z: 5,
    delay: '-3.2s',
    duration: '8.6s',
  },
  {
    author: 'kyt dotson',
    handle: '@kit_dotson',
    text: "Sigma Browser OÜ Friday announced the launch of its privacy-focused web browser, which features a local artificial intelligence model that doesn't send data to the cloud",
    url: 'https://siliconangle.com/2025/12/22/sigma-launches-privacy-focused-ai-native-browser-local-llm/',
    left: '16.7%',
    top: '39.8%',
    width: '20rem',
    rotate: '-0.2deg',
    z: 3,
    delay: '-4.7s',
    duration: '9.2s',
  },
  {
    author: 'einpresswire',
    handle: '@ein_presswire',
    text: 'TALLINN, HARJU, ESTONIA, November 26, 2025 /EINPresswire.com/ -- Atomic Mail, a private, secure email service, has reached 1,000,000 total user registrations in just ten months after launch.',
    url: 'http://einpresswire.com/article/869756562/10-months-to-1-million-atomic-mail-s-private-email-gains-broad-adoption',
    left: '83.4%',
    top: '33.7%',
    width: '18.6875rem',
    rotate: '0.12deg',
    z: 2,
    delay: '-2.1s',
    duration: '8.9s',
  },
  {
    author: 'Peter Steinberger',
    handle: '@steipete',
    text: 'Hermes Agent vs OpenClaw using Qwen 35B Local Model. We asked agents to scrape GitHub star history for both tools, find what caused the...',
    url: 'https://x.com/steipete/status/2055570810513850777',
    left: '24.2%',
    top: '73.2%',
    width: '21.5rem',
    rotate: '-0.2deg',
    z: 4,
    delay: '-5.4s',
    duration: '10s',
  },
  {
    author: 'skywork',
    handle: '@skywork_ai',
    text: 'As someone who lives and breathes AI and SEO, my browser is a chaotic collection of tabs: one for',
    url: 'https://skywork.ai/skypage/en/Overchat-AI-Review-The-All-in-One-AI-Super-App-You-Need/1976167089273106432',
    left: '61.9%',
    top: '71.2%',
    width: '25.875rem',
    rotate: '-0.05deg',
    z: 3,
    delay: '-6.8s',
    duration: '9.6s',
  },
  {
    author: '0xRicker',
    handle: '@0xRicker',
    text: 'The BTC 5-minute Up/Down market on Polymarket is one of the most inefficient segments in prediction markets.',
    url: 'https://x.com/0xricker/status/2057840731826405747',
    left: '83.3%',
    top: '77.4%',
    width: '19rem',
    rotate: '0.15deg',
    z: 6,
    delay: '-0.8s',
    duration: '7.4s',
  },
]

function PressCard({ item, index }: { item: (typeof pressItems)[0]; index: number }) {
  return (
    <motion.a
      key={item.author}
      href={item.url}
      target="_blank"
      rel="noreferrer noopener"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="absolute block text-[#e8ebf3e0] no-underline will-change-transform"
      style={{
        left: item.left,
        top: item.top,
        zIndex: item.z,
        width: `min(${item.width}, 31vw)`,
        transform: `translate3d(-50%, -50%, 0) rotate(${item.rotate})`,
        transformOrigin: 'center',
      }}
    >
      <div
        className="flex flex-col min-h-41 p-5 text-left overflow-hidden border border-transparent rounded-2xl backdrop-blur-sm transition-all duration-200"
        style={{
          background: 'linear-gradient(180deg, rgba(27,27,27,0.8), rgba(31,31,31,0.8))',
          boxShadow: 'inset 0 0.0625rem rgba(255,255,255,0.08), 0 1.5rem 4rem rgba(0,0,0,0.32)',
        }}
      >
        <strong className="text-white text-sm">{item.author}</strong>
        <span className="text-white/40 text-xs">{item.handle}</span>
        <p className="text-white/60 text-sm mt-2 leading-snug line-clamp-3">{item.text}</p>
        <span className="text-white/40 text-xs mt-auto pt-2">Read more</span>
      </div>
    </motion.a>
  )
}

export function InPress() {
  return (
    <div className="h-full w-full relative overflow-hidden">
      <h2
        className="absolute top-1/2 left-1/2 z-10 text-[clamp(2rem,5vw,3.5rem)] font-medium leading-none tracking-tight text-[#adb5c2] text-center pointer-events-none"
        style={{
          transform: 'translate(-50%, -50%)',
          textShadow: '-0.0688rem 0 rgba(184,143,151,0.45), 0.0688rem 0 rgba(134,163,188,0.45)',
        }}
      >
        Press about
        <br />
        our products
      </h2>
      {pressItems.map((item, i) => (
        <PressCard key={item.author} item={item} index={i} />
      ))}
    </div>
  )
}