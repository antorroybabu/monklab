const footerLabels = ['Mission', 'Numbers', 'Products', 'Contacts']

interface FooterProps {
  current: number
  onNavigate: (index: number) => void
}

export function Footer({ current, onNavigate }: FooterProps) {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-6 py-4">
      {footerLabels.map((label, i) => (
        <button
          key={label}
          onClick={() => onNavigate(i)}
          className={`text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
            current === i ? 'text-white/80' : 'text-white/20 hover:text-white/40'
          }`}
        >
          {label}
        </button>
      ))}
    </footer>
  )
}