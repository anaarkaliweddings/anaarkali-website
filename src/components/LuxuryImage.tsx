'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import EmblemIcon from './EmblemIcon'

interface LuxuryImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
}

const LuxuryImage: React.FC<LuxuryImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  fill = false,
  width,
  height
}) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 bg-gradient-to-br from-[#ECEBE1] to-[rgba(79,13,14,0.1)] animate-pulse flex items-center justify-center">
          <EmblemIcon 
            size="lg" 
            className="text-[#4F0D0E] opacity-30" 
          />
        </div>
      )}
      
      {imageError ? (
        <div className="absolute inset-0 bg-[#ECEBE1] flex items-center justify-center">
          <div className="text-center">
            <EmblemIcon 
              size="lg" 
              className="text-[#4F0D0E] opacity-50 mx-auto mb-2" 
            />
            <p className="text-[#4F0D0E] text-sm opacity-70">Image unavailable</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={width}
          height={height}
          priority={priority}
          sizes={sizes}
          className={`object-cover transition-opacity duration-700 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      )}
      
      {/* Brand watermark overlay */}
      <div className="absolute top-4 right-4 pointer-events-none">
        <EmblemIcon 
          size="sm" 
          variant="watermark"
          className="text-white opacity-20" 
        />
      </div>
    </div>
  )
}

export default LuxuryImage
