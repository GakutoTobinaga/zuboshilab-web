'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'

export function Hero() {
  const [displayText, setDisplayText] = useState('Creating.')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const words = useMemo(() => ['Creating.', 'Building.', 'Driving.', 'Leading.', 'Inspiring.', 'Creating.'], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const animateText = () => {
      currentIndex = (currentIndex + 1) % words.length
      setDisplayText(words[currentIndex])
    }

    const initialDelay = setTimeout(() => {
      animateText()
      const intervalId = setInterval(animateText, 5500)
      return () => clearInterval(intervalId)
    }, 5500)

    return () => clearTimeout(initialDelay)
  }, [words])

  return (
    <div className="relative h-screen flex items-center justify-center gradient-bg">
      <div className="absolute inset-0 bg-background opacity-30"></div>
      <motion.div
        className="relative z-30 text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-6xl md:text-8xl font-bold text-foreground">
          <div className="word-transition-container mb-4">
            <span className="inline-block w-[280px] md:w-[500px] text-center">
              {displayText}
            </span>
          </div>
          <span className="text-transparent bg-clip-text animate-gradient mt-2 inline-block">
            Social Impact
          </span>
        </h1>
        <div className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mt-6">
        {'社会課題の"図星"を突こう。'}
        </div>
      </motion.div>
      <div
        className="fixed inset-0 pointer-events-none opacity-40"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.2) 0%, transparent 50%)`,
        }}
      ></div>
    </div>
  )
}

