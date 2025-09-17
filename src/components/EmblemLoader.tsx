'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface EmblemLoaderProps {
  onComplete?: () => void
  duration?: number
}

const EmblemLoader: React.FC<EmblemLoaderProps> = ({ 
  onComplete,
  duration = 2000 
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
          className="w-32 h-32 mx-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: [0.68, -0.55, 0.265, 1.55] 
          }}
        >
          <Image
            src="/Emblem_Anaarkali.png"
            alt="Anaarkali Emblem"
            width={128}
            height={128}
            className="w-full h-full object-contain"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default EmblemLoader
