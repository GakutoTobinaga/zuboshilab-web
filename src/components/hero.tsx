'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const words = useMemo(() => ['Creating.', 'Building.', 'Driving.', 'Leading.', 'Inspiring.'], []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 3000) // 3秒間隔に短縮

    return () => clearInterval(intervalId)
  }, [words.length])

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
            <AnimatePresence mode="wait">
              <motion.span
                key={currentIndex}
                className="inline-block w-[280px] md:w-[500px] text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {words[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
          <span className="text-transparent bg-clip-text animate-gradient mt-2 inline-block">
            Social Impacts.
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

