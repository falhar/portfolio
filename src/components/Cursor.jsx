import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from '../hooks/useMousePosition'

export default function Cursor() {
  const pos = useMousePosition()
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const onOver = (e) => {
      setIsHover(!!e.target.closest('a, button, [data-hover]'))
    }
    document.addEventListener('mouseover', onOver)
    return () => document.removeEventListener('mouseover', onOver)
  }, [])

  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', stiffness: 600, damping: 28, mass: 0.4 }}
      />
      <motion.div
        className="cursor-ring"
        animate={{
          x: pos.x - 18,
          y: pos.y - 18,
          scale: isHover ? 1.6 : 1,
          borderColor: isHover ? '#22d3ee' : '#6366f1',
          opacity: isHover ? 0.7 : 1,
        }}
        transition={{ type: 'spring', stiffness: 160, damping: 18, mass: 0.8 }}
      />
    </>
  )
}
