'use client'

// Lightweight dynamic GSAP loader with ScrollTrigger tree-shaken
// Import this only on client components to avoid SSR costs

export type GSAPBundle = {
  gsap: typeof import('gsap').gsap
  ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger
}

let cached: Promise<GSAPBundle> | null = null

export function loadGSAP(): Promise<GSAPBundle> {
  if (cached) return cached
  cached = (async () => {
    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)
    return { gsap, ScrollTrigger }
  })()
  return cached
}

export const springEase = [0.68, -0.55, 0.265, 1.55] as const

export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}


