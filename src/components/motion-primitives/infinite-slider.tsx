'use client'

import React, { useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface InfiniteSliderProps {
  children: React.ReactNode
  speed?: number
  speedOnHover?: number
  gap?: number
  className?: string
}

export function InfiniteSlider({
  children,
  speed = 40,
  speedOnHover = 20,
  gap = 112,
  className
}: InfiniteSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const setSpeed = (speed: number) => {
      slider.style.setProperty('--speed', `${speed}s`)
    }

    setSpeed(speed)

    const handleMouseEnter = () => setSpeed(speedOnHover)
    const handleMouseLeave = () => setSpeed(speed)

    slider.addEventListener('mouseenter', handleMouseEnter)
    slider.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      slider.removeEventListener('mouseenter', handleMouseEnter)
      slider.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [speed, speedOnHover])

  return (
    <div
      ref={sliderRef}
      className={cn('flex overflow-hidden', className)}
      style={{
        '--gap': `${gap}px`,
      } as React.CSSProperties}
    >
      <div className="flex animate-infinite-scroll items-center">
        {React.Children.map(children, (child, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ marginRight: `${gap}px` }}
          >
            {child}
          </div>
        ))}
      </div>
      <div className="flex animate-infinite-scroll items-center" aria-hidden="true">
        {React.Children.map(children, (child, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-shrink-0"
            style={{ marginRight: `${gap}px` }}
          >
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}