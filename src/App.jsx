import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

export default function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const [isMouse, setIsMouse] = useState(false)

  // Only show custom cursor on pointer devices
  useEffect(() => {
    const check = () => setIsMouse(window.matchMedia('(pointer: fine)').matches)
    check()
    window.matchMedia('(pointer: fine)').addEventListener('change', check)
    return () => window.matchMedia('(pointer: fine)').removeEventListener('change', check)
  }, [])

  return (
    <>
      {/* Noise texture overlay */}
      <div className="noise" aria-hidden />

      {/* Scroll progress */}
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* Custom cursor (desktop only) */}
      {isMouse && <Cursor />}

      <Navbar />

      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
    </>
  )
}
