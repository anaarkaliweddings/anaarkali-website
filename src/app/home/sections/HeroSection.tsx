'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'
import { loadGSAP, prefersReducedMotion, springEase } from '@/lib/animations'

export default function HeroSection() {
  const layer2Ref = useRef<HTMLDivElement | null>(null)
  const headlineRef = useRef<HTMLHeadingElement | null>(null)

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
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          playsInline
          preload="auto"
        >
          <source src="/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04.mp4" type="video/mp4" />
        </video>
        {/* Subtle overlay for better visual balance */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />
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
