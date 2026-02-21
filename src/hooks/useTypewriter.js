import { useState, useEffect } from 'react'

export function useTypewriter(words, speed = 90, deleteSpeed = 45, pauseTime = 2200) {
  const [displayed, setDisplayed] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPausing, setIsPausing] = useState(false)

  useEffect(() => {
    if (isPausing) return

    const word = words[wordIndex % words.length]

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < word.length) {
          setDisplayed(word.slice(0, displayed.length + 1))
        } else {
          setIsPausing(true)
          setTimeout(() => {
            setIsPausing(false)
            setIsDeleting(true)
          }, pauseTime)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1))
        } else {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timer)
  }, [displayed, wordIndex, isDeleting, isPausing, words, speed, deleteSpeed, pauseTime])

  return displayed
}
