'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import EmblemIcon from './EmblemIcon'

interface LuxuryVideoPlayerProps {
  src: string
  poster?: string
  autoplay?: boolean
  className?: string
  showControls?: boolean
  muted?: boolean
}

const LuxuryVideoPlayer: React.FC<LuxuryVideoPlayerProps> = ({ 
  src, 
  poster, 
  autoplay = false,
  className = '',
  showControls = true,
  muted = false
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControlsState, setShowControlsState] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
  }

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const togglePlay = () => {
    if (isPlaying) {
      handlePause()
    } else {
      handlePlay()
    }
  }

  return (
    <div 
      className={`relative group ${className}`}
      onMouseEnter={() => showControls && setShowControlsState(true)}
      onMouseLeave={() => showControls && setShowControlsState(false)}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={poster}
        autoPlay={autoplay}
        muted={muted}
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={`${src}.webm`} type="video/webm" />
        <source src={`${src}.mp4`} type="video/mp4" />
      </video>
      
      {/* Custom play button overlay */}
      {!isPlaying && showControls && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: showControlsState ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="w-20 h-20 bg-[#4F0D0E] bg-opacity-80 rounded-full flex items-center justify-center cursor-pointer backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            <svg 
              className="w-8 h-8 text-[#ECEBE1] ml-1" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M8 5v10l8-5-8-5z"/>
            </svg>
          </motion.button>
        </motion.div>
      )}
      
      {/* Brand watermark */}
      {showControls && (
        <div className="absolute top-4 right-4">
          <EmblemIcon 
            size="sm" 
            variant="watermark"
            className="text-white opacity-30" 
          />
        </div>
      )}
      
      {/* Play/Pause controls */}
      {showControls && showControlsState && (
        <motion.div
          className="absolute bottom-4 left-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={togglePlay}
            className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm hover:bg-black/70 transition-colors"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z"/>
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
            )}
          </button>
        </motion.div>
      )}
    </div>
  )
}

export default LuxuryVideoPlayer
