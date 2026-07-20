import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

// Shared components
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { StarCanvas } from './components/StarCanvas'

// Section components
import { Hero } from './sections/Hero'
import { Mission } from './sections/Mission'
import { NumbersUsers, NumbersMAU } from './sections/Numbers'
import { Products } from './sections/Products'
import { Contacts } from './sections/Contacts'

// Footer labels: Mission(0), Numbers(1), Products(2), Contacts(3)
// Slides: Hero(0), Mission(1), NumbersUsers(2), NumbersMAU(3), Products(4), Contacts(5)
const footerMap = [0, 0, 1, 1, 2, 3]

const slides = [Hero, Mission, NumbersUsers, NumbersMAU, Products, Contacts]

export default function App() {
  const [current, setCurrent] = useState(0)
  const isAnimating = useRef(false)
  const total = slides.length

  const goTo = useCallback((index: number) => {
    if (isAnimating.current) return
    if (index < 0 || index >= total) return
    isAnimating.current = true
    setCurrent(index)
    setTimeout(() => { isAnimating.current = false }, 800)
  }, [total])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  // Navigate from footer label to first slide of that section
  const navigateByLabel = useCallback((labelIndex: number) => {
    const slideIndex = footerMap.indexOf(labelIndex)
    if (slideIndex !== -1) goTo(slideIndex)
  }, [goTo])

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        next()
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'Home') {
        e.preventDefault()
        goTo(0)
      } else if (e.key === 'End') {
        e.preventDefault()
        goTo(total - 1)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [next, prev, goTo, total])

  // Wheel navigation
  useEffect(() => {
    let accumulated = 0
    const threshold = 50
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      accumulated += e.deltaY
      if (Math.abs(accumulated) >= threshold) {
        if (accumulated > 0) next()
        else prev()
        accumulated = 0
      }
    }
    window.addEventListener('wheel', handleWheel, { passive: false })
    return () => window.removeEventListener('wheel', handleWheel)
  }, [next, prev])

  // Touch navigation
  useEffect(() => {
    let startY = 0
    const handleTouchStart = (e: TouchEvent) => { startY = e.touches[0].clientY }
    const handleTouchEnd = (e: TouchEvent) => {
      const diff = startY - e.changedTouches[0].clientY
      if (Math.abs(diff) > 50) {
        if (diff > 0) next()
        else prev()
      }
    }
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    return () => {
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchend', handleTouchEnd)
    }
  }, [next, prev])

  const CurrentSlide = slides[current]
  const activeLabel = footerMap[current]

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white">
      <StarCanvas />
      <Header />

      <main className="relative h-full w-full z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <CurrentSlide />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer current={activeLabel} onNavigate={navigateByLabel} />
    </div>
  )
}