'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import EmblemIcon from './EmblemIcon'

interface EmblemLoaderProps {
  onComplete?: () => void
  duration?: number
}

const EmblemLoader: React.FC<EmblemLoaderProps> = ({ 
  onComplete,
  duration = 3000 
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => {
        onComplete?.()
      }, 500)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      className="fixed inset-0 bg-[#ECEBE1] flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="w-24 h-24 mx-auto mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.68, -0.55, 0.265, 1.55] 
          }}
        >
          <EmblemIcon 
            size="xl" 
            className="text-[#4F0D0E] emblem-glow" 
          />
        </motion.div>
        
        <motion.p
          className="text-[#4F0D0E] font-primary text-lg tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Preparing your story...
        </motion.p>
        
        <motion.div
          className="mt-4 w-32 h-1 bg-[#4F0D0E]/20 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
        >
          <motion.div
            className="h-full bg-[#4F0D0E] rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: duration / 1000, 
              ease: 'easeInOut',
              delay: 1.2
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default EmblemLoader
