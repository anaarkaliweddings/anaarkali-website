import React from 'react'

interface EmblemIconProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'watermark' | 'interactive'
}

const EmblemIcon: React.FC<EmblemIconProps> = ({ 
  className = '', 
  size = 'md',
  variant = 'default'
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const variantClasses = {
    default: '',
    watermark: 'emblem-watermark',
    interactive: 'emblem-watermark--interactive'
  }

  return (
    <svg 
      className={`${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Anaarkali Emblem Design */}
      <circle 
        cx="50" 
        cy="50" 
        r="45" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="none"
        opacity="0.3"
      />
      
      {/* Inner decorative elements */}
      <path 
        d="M30 30 L70 30 L70 70 L30 70 Z" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        fill="none"
        opacity="0.4"
      />
      
      {/* Central motif */}
      <circle 
        cx="50" 
        cy="50" 
        r="15" 
        stroke="currentColor" 
        strokeWidth="2" 
        fill="currentColor"
        opacity="0.6"
      />
      
      {/* Corner accents */}
      <circle cx="25" cy="25" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="75" cy="25" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="25" cy="75" r="3" fill="currentColor" opacity="0.5" />
      <circle cx="75" cy="75" r="3" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

export default EmblemIcon
