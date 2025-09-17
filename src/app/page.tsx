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
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return <EmblemLoader onComplete={() => setIsLoading(false)} />
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-luxury-primary">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <LuxuryVideoPlayer
            src="/hero-video"
            className="w-full h-full"
            autoplay
            showControls={false}
          />
          {/* Simple overlay for text readability */}
          <div className="absolute inset-0 bg-luxury-primary/40"></div>
        </div>

        {/* Emblem Watermark */}
        <div className="absolute top-8 right-8 z-10">
          <EmblemIcon 
            size="lg" 
            variant="watermark"
            className="text-white opacity-20" 
          />
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
      <section className="py-20 bg-luxury-accent">
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
              <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary leading-tight">
                Every couple plans two weddings—
              </h2>
              <div className="space-y-6 text-luxury-primary">
                <p className="font-interface text-lg leading-relaxed">
                  The grand performance for the world to see,<br />
                  And the quiet truth that belongs only to you.
                </p>
                <p className="font-interface text-lg leading-relaxed">
                  We specialize in the second one.
                </p>
                <div className="space-y-4 text-luxury-primary/80">
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
                className="absolute -bottom-8 -right-8 bg-luxury-primary text-luxury-accent px-6 py-3 rounded-lg shadow-lg"
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

      {/* Featured Stories Carousel */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              Recent Premieres
            </h2>
            <p className="font-interface text-lg text-luxury-primary/80 max-w-2xl mx-auto">
              Each love story gets its own director's treatment. Here are some we're proud to have told.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Priya & Arjun",
                location: "Mumbai",
                excerpt: "When two families became one through the power of love",
                video: "/hero-video"
              },
              {
                title: "Sarah & Rajesh", 
                location: "Delhi",
                excerpt: "An interfaith celebration that honored both traditions",
                video: "/testimonial-video"
              },
              {
                title: "Meera & Priya",
                location: "Bangalore", 
                excerpt: "Two brides in red, breaking every rule beautifully",
                video: "/hero-video"
              },
              {
                title: "Karan & Mike",
                location: "Goa",
                excerpt: "A destination wedding that felt like a movie",
                video: "/testimonial-video"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-luxury-primary/20 group-hover:border-luxury-accent/40 transition-all duration-500">
                  {/* Video Background */}
                  <LuxuryVideoPlayer
                    src={story.video}
                    className="w-full h-full"
                    muted
                    autoplay
                    showControls={false}
                  />
                  
                  {/* Elegant Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-primary/60 via-luxury-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <motion.div 
                      className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 shadow-2xl"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="text-white">
                      <h3 className="font-primary text-xl mb-2">{story.title}</h3>
                      <p className="font-interface text-sm text-white/80 mb-2">{story.location}</p>
                      <p className="font-interface text-sm text-white/90 leading-relaxed">{story.excerpt}</p>
                    </div>
                  </div>
                  
                  {/* Emblem Watermark */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <EmblemIcon size="sm" className="text-white/60" />
                  </div>
                </div>
                
                {/* Card Content Below */}
                <div className="mt-6 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-luxury-primary/10 group-hover:border-luxury-accent/20 transition-all duration-500">
                  <h3 className="font-primary text-xl text-luxury-primary mb-3 group-hover:text-luxury-accent transition-colors duration-300">{story.title}</h3>
                  <p className="font-interface text-sm text-luxury-primary/60 mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {story.location}
                  </p>
                  <p className="font-interface text-sm text-luxury-primary/80 leading-relaxed">{story.excerpt}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Two Weddings Framework */}
      <section className="py-20 bg-luxury-accent min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              The Two Weddings
            </h2>
            <p className="font-interface text-lg text-luxury-primary/80 max-w-2xl mx-auto">
              Every couple plans two weddings—we specialize in the second one.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Performance */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <LuxuryVideoPlayer
                  src="/hero-video"
                  className="w-full h-full"
                  muted
                  autoplay
                  showControls={false}
                />
                <div className="absolute inset-0 bg-luxury-primary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-primary text-2xl md:text-3xl mb-2 text-white">The Performance</h3>
                    <p className="font-interface text-lg text-white opacity-90">Staged, polished, for the world to see</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* The Truth */}
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <LuxuryVideoPlayer
                  src="/testimonial-video"
                  className="w-full h-full"
                  muted
                  autoplay
                  showControls={false}
                />
                <div className="absolute inset-0 bg-luxury-primary/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="font-primary text-2xl md:text-3xl mb-2 text-white">The Truth</h3>
                    <p className="font-interface text-lg text-white opacity-90">Candid, emotional, belongs only to you</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Center Divider */}
          <motion.div 
            className="flex items-center justify-center mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="bg-luxury-primary text-luxury-accent px-8 py-4 rounded-full">
              <span className="font-primary text-lg">We specialize in the second one</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Footer */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              What Our Families Say
            </h2>
            <p className="font-interface text-lg text-luxury-primary/80 max-w-2xl mx-auto">
              Because when you become our client, you become our family.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "They didn't just document our wedding—they understood our love story in ways we couldn't even articulate.",
                author: "Priya & Arjun",
                location: "Mumbai"
              },
              {
                quote: "Watching our film felt like reliving the emotions, not just the events. That's the difference.",
                author: "Sarah & Rajesh", 
                location: "Delhi"
              },
              {
                quote: "We trusted them completely. That feeling was priceless.",
                author: "Meera & Priya",
                location: "Bangalore"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-luxury-accent p-8 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-luxury-primary/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="font-interface text-luxury-primary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-luxury-primary/20 pt-4">
                  <div className="font-primary text-lg text-luxury-primary">{testimonial.author}</div>
                  <div className="font-interface text-sm text-luxury-primary/60">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
