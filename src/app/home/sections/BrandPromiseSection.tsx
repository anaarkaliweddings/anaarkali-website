'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import { loadGSAP, prefersReducedMotion, springEase } from '@/lib/animations'

export default function BrandPromiseSection() {
  const rulerRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [duration, setDuration] = useState(4)

  useEffect(() => {
    if (prefersReducedMotion()) return
    let revert: (() => void) | undefined
    loadGSAP().then(({ gsap, ScrollTrigger }) => {
      if (rulerRef.current && textRef.current) {
        const height = () => textRef.current!.scrollHeight
        const tween = gsap.fromTo(
          rulerRef.current,
          { height: 0 },
          {
            height: () => height(),
            ease: 'none',
            scrollTrigger: {
              trigger: textRef.current!,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: true,
            },
          }
        )
        revert = () => tween.kill()
      }
    })
    return () => revert && revert()
  }, [])

  // Hover scrub handlers for the testimonial video
  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    const video = videoRef.current
    if (!video) return
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
    const progress = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width))
    if (!isNaN(video.duration)) setDuration(video.duration)
    video.currentTime = progress * (video.duration || duration)
  }

  return (
    <section className="py-20 bg-luxury-accent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Manifesto with vertical progress ruler */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-transparent" aria-hidden>
              <div ref={rulerRef} className="w-px bg-luxury-primary" />
            </div>
            <div ref={textRef} className="pl-6 space-y-6 text-luxury-primary">
              <h2 className="font-primary-bold text-3xl md:text-4xl">Every couple plans <span className="font-highlight">two weddings</span>—</h2>
              <p className="font-primary text-lg leading-relaxed">The grand performance for the world to see, and the quiet truth that belongs only to you.</p>
              <p className="font-primary text-lg leading-relaxed">We specialize in the second one.</p>
              <div className="space-y-3 text-luxury-primary/80">
                {[
                  'The in-between moments when no one\'s watching.',
                  'The nervous laugh before the varmala.',
                  'The tear that escapes during the vidaai.',
                  'The way your nani adjusts your dupatta without being asked.'
                ].map((line, i) => (
                  <motion.p key={i} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }} viewport={{ once: true }} className="font-primary">
                    {line}
                  </motion.p>
                ))}
              </div>
              <p className="font-primary text-lg font-medium">This is where real cinema lives. This is what we hunt for. This is why we exist.</p>
            </div>
          </div>

          {/* Right: Testimonial with hover-scrub */}
          <motion.div className="relative" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
            <div onMouseMove={onMouseMove} className="relative">
              <video ref={videoRef} className="aspect-video rounded-lg overflow-hidden w-full" muted playsInline preload="metadata" loop>
                <source src="/testimonial-video.webm" type="video/webm" />
                <source src="/testimonial-video.mp4" type="video/mp4" />
              </video>
            </div>
            <motion.div className="absolute -bottom-8 -right-8 bg-luxury-primary text-luxury-accent px-6 py-3 rounded-lg shadow-lg"
              initial={{ rotate: -90, x: 100, y: 100, opacity: 0 }}
              whileInView={{ rotate: 0, x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.68, -0.55, 0.265, 1.55] }} viewport={{ once: true }}>
              <div className="text-center">
                <div className="font-primary-bold text-2xl" aria-live="polite">Client Love</div>
                <div className="font-primary text-xs tracking-wider uppercase">Hover to scrub</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


