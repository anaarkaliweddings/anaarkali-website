'use client'

import React from 'react'
import { motion } from 'framer-motion'
import EmblemIcon from './EmblemIcon'

interface LuxuryButtonProps {
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg'
  withEmblem?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
}

const LuxuryButton: React.FC<LuxuryButtonProps> = ({
  variant,
  size,
  withEmblem,
  children,
  onClick,
  className = '',
  disabled = false
}) => {
  const baseClasses = "relative overflow-hidden transition-all duration-300 ease-out font-interface font-medium tracking-wider uppercase"
  
  const variantClasses = {
    primary: "bg-[#4F0D0E] text-[#ECEBE1] hover:bg-[#7A1F20] border border-[#4F0D0E]",
    secondary: "bg-[#3C2E23] text-[#ECEBE1] hover:bg-[#5C4A3F] border border-[#3C2E23]", 
    ghost: "bg-transparent border border-[#4F0D0E] text-[#4F0D0E] hover:bg-[#4F0D0E] hover:text-[#ECEBE1]"
  }
  
  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base"
  }

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : ""

  return (
    <motion.button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses} ${className}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
    >
      {withEmblem && (
        <EmblemIcon 
          size="sm" 
          className="absolute top-2 right-2 opacity-30" 
        />
      )}
      <span className="relative z-10">{children}</span>
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      />
    </motion.button>
  )
}

export default LuxuryButton
