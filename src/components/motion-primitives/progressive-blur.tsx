'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressiveBlurProps {
  className?: string
  direction: 'left' | 'right'
  blurIntensity?: number
}

export function ProgressiveBlur({
  className,
  direction,
  blurIntensity = 1
}: ProgressiveBlurProps) {
  const gradientDirection = direction === 'left' 
    ? 'to right' 
    : 'to left'
  
  const maskImage = `linear-gradient(${gradientDirection}, transparent, rgba(0, 0, 0, ${blurIntensity}))`

  return (
    <div
      className={cn('pointer-events-none', className)}
      style={{
        maskImage,
        WebkitMaskImage: maskImage,
        backdropFilter: `blur(${blurIntensity * 2}px)`,
        background: 'linear-gradient(to ' + (direction === 'left' ? 'right' : 'left') + ', rgba(255, 255, 255, 0.1), transparent)'
      }}
    />
  )
}