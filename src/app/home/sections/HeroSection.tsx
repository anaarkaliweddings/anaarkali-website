'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'
import { loadGSAP, prefersReducedMotion, springEase } from '@/lib/animations'

export default function HeroSection() {
  const layer2Ref = useRef<HTMLDivElement | null>(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [showUnmuteButton, setShowUnmuteButton] = useState(false)

  // Video loading optimization
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoReady = () => {
      setVideoLoaded(true)
      setShowUnmuteButton(true)
      setIsMuted(video.muted)
      
      // Try to play unmuted first
      video.play().catch((error) => {
        console.log('Unmuted autoplay failed, trying muted:', error)
        video.muted = true
        setIsMuted(true)
        video.play().catch(console.error)
      })
    }

    // Simple approach - just wait for video to be ready
    if (video.readyState >= 3) { // HAVE_FUTURE_DATA
      handleVideoReady()
    } else {
      video.addEventListener('canplay', handleVideoReady, { once: true })
    }

    return () => {
      video.removeEventListener('canplay', handleVideoReady)
    }
  }, [])

  // Toggle mute function
  const toggleMute = () => {
    const video = videoRef.current
    if (!video) {
      console.error('Video element not found')
      return
    }
    
    console.log('Toggling mute, current state:', video.muted)
    video.muted = !video.muted
    setIsMuted(video.muted)
    console.log('New mute state:', video.muted)
  }

  useEffect(() => {
    if (prefersReducedMotion()) return
    let ctx: ReturnType<typeof gsap.context> | null = null
    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      ctx = gsap.context(() => {
        // Parallax for emblem silhouette
        if (layer2Ref.current) {
          gsap.to(layer2Ref.current, {
            yPercent: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: '#hero-root',
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          })
        }

        // Headline letters cascade
        if (headlineRef.current) {
          const letters = headlineRef.current.querySelectorAll('.letter')
          gsap.fromTo(
            letters,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.8, ease: 'power2.out', stagger: 0.04 }
          )
        }
      })
    })
    return () => {
      if (ctx && ctx.revert) {
        ctx.revert()
      }
    }
  }, [])

  return (
    <section id="hero-root" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-primary">
      {/* Layer 1: Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Loading fallback background */}
        {!videoLoaded && (
          <div className="absolute inset-0 bg-luxury-primary flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          </div>
        )}
        
        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source src="/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for better visual balance */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        {/* Sound control button - bottom right */}
        {showUnmuteButton && (
          <div 
            className="absolute bottom-4 right-4 z-30 bg-black/70 text-white px-4 py-2 rounded-lg text-sm font-primary-medium cursor-pointer hover:bg-black/90 transition-all duration-200 select-none"
            style={{ 
              pointerEvents: 'auto',
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none'
            }}
            onMouseDown={(e) => {
              e.preventDefault()
              e.stopPropagation()
              console.log('Button clicked!')
              toggleMute()
            }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                {isMuted ? (
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.5l2.883-2.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.5l2.883-2.793a1 1 0 011.617.793z" clipRule="evenodd" />
                )}
              </svg>
              <span>{isMuted ? 'Unmute' : 'Mute'}</span>
            </div>
          </div>
        )}
      </div>

      {/* Layer 2: Emblem silhouette moving slower */}
      <div ref={layer2Ref} className="absolute inset-0 z-[1] flex items-center justify-center opacity-20">
        <EmblemIcon size="lg" className="text-black" aria-label="Anaarkali emblem silhouette" />
      </div>

      {/* Layer 3: Clean hero without text */}
      <div className="relative z-[2] px-6">
        {/* Removed text overlay as requested */}
      </div>

      {/* Scroll cue placeholder (fades after first scroll) - intentionally omitted per prior request */}
    </section>
  )
}
