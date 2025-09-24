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
      {/* Layer 1: Video */}
      <div className="absolute inset-0 z-0">
        <LuxuryVideoPlayer src="/hero-video" className="w-full h-full" autoplay muted showControls={false} />
        {/* TODO: Film grain shader could be a canvas overlay; placeholder tint */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden style={{ mixBlendMode: 'overlay', opacity: 0.08 }} />
      </div>

      {/* Layer 2: Emblem silhouette moving slower */}
      <div ref={layer2Ref} className="absolute inset-0 z-[1] flex items-center justify-center opacity-20">
        <EmblemIcon size="lg" className="text-black" aria-label="Anaarkali emblem silhouette" />
      </div>

      {/* Layer 3: Headline */}
      <div className="relative z-[2] px-6">
        <h1 ref={headlineRef} className="font-highlight text-white text-4xl md:text-6xl lg:text-7xl tracking-tight text-center">
          {"Hum Kehte Hain Haan".split('').map((ch, i) => (
            <span key={i} className="inline-block overflow-hidden align-baseline">
              <span className="letter inline-block">{ch === ' ' ? '\u00A0' : ch}</span>
            </span>
          ))}
        </h1>
      </div>

      {/* Scroll cue placeholder (fades after first scroll) - intentionally omitted per prior request */}
    </section>
  )
}
