'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

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
        scrolled ? 'bg-grey-100/30 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-bold text-foreground">
            <Link href={"/"}>
            <Image 
              src="/logo_blc_full.png" 
              alt='zuboshi lab.' 
              width={250} 
              height={100}
              priority
            />
            </Link>
          </div>
          <div className="text-m font-bold text-black">
          <Link href={"/about"}>
          about zl.
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

