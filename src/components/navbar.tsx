'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-background/60 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold text-foreground">
            zuboshi lab.
          </div>
          <div className="text-foreground font-light">
            Technology for Social Good
          </div>
        </div>
      </div>
    </nav>
  )
}

