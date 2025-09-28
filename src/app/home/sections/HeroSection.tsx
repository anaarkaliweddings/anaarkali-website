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

  // Video loading optimization
  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoLoaded(true)
      video.play().catch(console.error)
    }

    const handleLoadedData = () => {
      setVideoLoaded(true)
    }

    const handleCanPlayThrough = () => {
      setVideoLoaded(true)
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('canplaythrough', handleCanPlayThrough)
    
    // Set video properties for faster loading
    video.preload = 'auto'
    video.load()

    // Force play as soon as possible
    const playVideo = () => {
      if (video.readyState >= 2) { // HAVE_CURRENT_DATA
        video.play().catch((error) => {
          // If unmuted autoplay fails, try muted autoplay
          console.log('Unmuted autoplay failed, trying muted:', error)
          video.muted = true
          video.play().catch(console.error)
        })
      }
    }

    // Try to play immediately and on various events
    playVideo()
    video.addEventListener('loadedmetadata', playVideo)
    video.addEventListener('loadeddata', playVideo)

    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('canplaythrough', handleCanPlayThrough)
      video.removeEventListener('loadedmetadata', playVideo)
    }
  }, [])

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
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = !videoRef.current.muted
            }
          }}
        >
          <source src="/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for better visual balance */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
        
        {/* Sound indicator */}
        <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-2 rounded-full text-sm font-primary-medium cursor-pointer hover:bg-black/70 transition-colors">
          <span className="flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.793L5.5 14H3a1 1 0 01-1-1V7a1 1 0 011-1h2.5l2.883-2.793a1 1 0 011.617.793zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Click to unmute
          </span>
        </div>
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
