'use client'

import { useState, useEffect } from 'react'
import { loadGSAP } from '@/lib/animations'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EmblemLoader from '@/components/EmblemLoader'
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('./home/sections/HeroSection'), { ssr: false })
const BrandPromiseSection = dynamic(() => import('./home/sections/BrandPromiseSection'), { ssr: false })
const RecentPremieresSection = dynamic(() => import('./home/sections/RecentPremieresSection'), { ssr: false })

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const target = 147
    let tween: ReturnType<typeof gsap.fromTo> | null = null
    loadGSAP().then(({ gsap }) => {
      tween = gsap.fromTo(
        { value: 0 },
        { value: target },
        {
          duration: 2,
          ease: 'power2.out',
          onUpdate: function (this: { targets(): { value: number }[] }) {
            setStoryCount(Math.round(this.targets()[0].value))
          },
        }
      )
    })
    return () => {
      if (tween) {
        tween.kill()
      }
    }
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
      
      <HeroSection />

      <BrandPromiseSection />

      <RecentPremieresSection />

      {/* The Two Weddings Framework */}
      <section className="py-20 bg-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary-bold text-3xl md:text-4xl text-luxury-primary mb-4">
              The <span className="font-highlight">Two Weddings</span>
            </h2>
            <p className="font-primary text-lg text-luxury-primary/80 max-w-2xl mx-auto">
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
                    <h3 className="font-primary-bold text-2xl md:text-3xl mb-2 text-white">The Performance</h3>
                    <p className="font-primary text-lg text-white opacity-90">Staged, polished, for the world to see</p>
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
                    <h3 className="font-primary-bold text-2xl md:text-3xl mb-2 text-white">The Truth</h3>
                    <p className="font-primary text-lg text-white opacity-90">Candid, emotional, belongs only to you</p>
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
              <span className="font-primary-bold text-lg">We specialize in the second one</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Footer */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary-bold text-3xl md:text-4xl text-luxury-primary mb-4">
              What Our <span className="font-highlight">Families</span> Say
            </h2>
            <p className="font-primary text-lg text-luxury-primary/80 max-w-2xl mx-auto">
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
                <blockquote className="font-primary text-luxury-primary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-luxury-primary/20 pt-4">
                  <div className="font-primary-bold text-lg text-luxury-primary">{testimonial.author}</div>
                  <div className="font-primary text-sm text-luxury-primary/60">{testimonial.location}</div>
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
