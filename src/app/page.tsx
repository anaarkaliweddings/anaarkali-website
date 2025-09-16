'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LuxuryButton from '@/components/LuxuryButton'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'
import EmblemLoader from '@/components/EmblemLoader'

export default function Home() {
  const [storyCount, setStoryCount] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const targetCount = 147
    const duration = 2000
    const increment = targetCount / (duration / 16)
    
    const timer = setInterval(() => {
      setStoryCount(prev => {
        if (prev >= targetCount) {
          clearInterval(timer)
          return targetCount
        }
        return Math.min(prev + increment, targetCount)
      })
    }, 16)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <EmblemLoader onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <LuxuryVideoPlayer
            src="/hero-video"
            className="w-full h-full"
            autoplay
          />
          {/* Luxury overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(79,13,14,0.3)] to-[rgba(79,13,14,0.7)]"></div>
        </div>

        {/* Emblem Watermark */}
        <div className="absolute top-8 right-8 z-10">
          <EmblemIcon 
            size="lg" 
            variant="watermark"
            className="text-white opacity-20" 
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            className="font-primary text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Hum Kehte Hain Haan
          </motion.h1>
          
          <motion.p 
            className="font-interface text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            To the ones who said yes to authentic love
          </motion.p>
          
          <motion.p 
            className="font-interface text-base md:text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          >
            We don't just capture your wedding.<br />
            We direct your love story.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            <LuxuryButton
              variant="primary"
              size="lg"
              withEmblem
              onClick={() => window.location.href = '/begin-your-story'}
            >
              Begin Your Story
            </LuxuryButton>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-white/70">
            <span className="font-interface text-xs tracking-wider uppercase mb-2">Scroll</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Brand Promise Section */}
      <section className="py-20 bg-[#ECEBE1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Manifesto */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="font-primary text-3xl md:text-4xl text-[#4F0D0E] leading-tight">
                Every couple plans two weddings—
              </h2>
              <div className="space-y-6 text-[#4F0D0E]">
                <p className="font-interface text-lg leading-relaxed">
                  The grand performance for the world to see,<br />
                  And the quiet truth that belongs only to you.
                </p>
                <p className="font-interface text-lg leading-relaxed">
                  We specialize in the second one.
                </p>
                <div className="space-y-4 text-[#4F0D0E]/80">
                  <motion.p 
                    className="font-interface"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    The in-between moments when no one's watching.
                  </motion.p>
                  <motion.p 
                    className="font-interface"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    The nervous laugh before the varmala.
                  </motion.p>
                  <motion.p 
                    className="font-interface"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    The tear that escapes during the vidaai.
                  </motion.p>
                  <motion.p 
                    className="font-interface"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    The way your nani adjusts your dupatta without being asked.
                  </motion.p>
                </div>
                <div className="pt-4">
                  <p className="font-interface text-lg font-medium">
                    This is where real cinema lives.<br />
                    This is what we hunt for.<br />
                    This is why we exist.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Video Testimonial */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <LuxuryVideoPlayer
                src="/testimonial-video"
                className="aspect-video rounded-lg overflow-hidden"
              />
              
              {/* Animated Counter */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-[#4F0D0E] text-[#ECEBE1] px-6 py-3 rounded-lg shadow-lg"
                initial={{ scale: 0, rotate: -10 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: [0.68, -0.55, 0.265, 1.55] }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="font-primary text-2xl font-bold">
                    {Math.floor(storyCount)}+
                  </div>
                  <div className="font-interface text-xs tracking-wider uppercase">
                    Stories told
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
