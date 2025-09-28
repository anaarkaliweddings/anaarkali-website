'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'

export default function LoveIsLove() {
  const [activeFilter, setActiveFilter] = useState('All')
  const videoRefs = useRef<HTMLVideoElement[]>([])

  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]
    if (video) video.play().catch(() => {})
  }

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]
    if (video) video.pause()
  }

  const filters = ['All', 'Interfaith', 'Cultural Traditions', 'Pre-wedding', 'Delhi', 'Jim Corbett']

  const diversePortfolio = [
    {
      id: 1,
      title: 'Anuj & Noopur',
      subtitle: 'A romantic pre-wedding celebration in the wilderness',
      category: 'Jim Corbett',
      location: 'Jim Corbett',
      description: 'Love story unfolds in the heart of nature, capturing authentic moments in the wild.',
      video: '/Anuj-Noopur-jim Corbett-2024-01.mp4'
    },
    {
      id: 2,
      title: 'Naveen & Sweeta',
      subtitle: 'Urban love story captured in the capital city',
      category: 'Delhi',
      location: 'Delhi',
      description: 'A celebration of love that bridges cultures and creates beautiful memories.',
      video: '/Naveen-Sweeta-Delhi-2024-02.mp4'
    },
    {
      id: 3,
      title: 'Pooja & Hemant',
      subtitle: 'A modern couple\'s journey to forever',
      category: 'Delhi',
      location: 'Delhi NCR',
      description: 'Contemporary love story with traditional roots, beautifully documented.',
      video: '/Pooja-Hemant-Delhi NCR-2023-05.mp4'
    },
    {
      id: 4,
      title: 'Priya & David',
      subtitle: 'A royal pre-wedding celebration in the Pink City',
      category: 'Pre-wedding',
      location: 'Jaipur',
      description: 'Cross-cultural love story set against the backdrop of royal heritage.',
      video: '/Priya-david Pre-wedding-Jaipur-2024-03.mp4'
    },
    {
      id: 5,
      title: 'Priya & Haywards',
      subtitle: 'Love story unfolds in the heart of nature',
      category: 'Jim Corbett',
      location: 'Jim Corbett',
      description: 'Another beautiful wilderness celebration, capturing love in its purest form.',
      video: '/Priya-Haywards-jim corbett-2024-06.mp4'
    },
    {
      id: 6,
      title: 'Vidhisha & Ruchir',
      subtitle: 'Urban love story captured in the capital city',
      category: 'Pre-wedding',
      location: 'Delhi',
      description: 'Modern love story with traditional values, beautifully told through our lens.',
      video: '/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04.mp4'
    }
  ]

  const filteredItems = activeFilter === 'All' 
    ? diversePortfolio 
    : diversePortfolio.filter(item => item.category === activeFilter)

  const statistics = [
    { number: '23+', label: 'LGBTQ+ weddings and counting' },
    { number: '15', label: 'interfaith ceremonies celebrating unity in diversity' },
    { number: '8', label: 'court marriages proving love needs no grand stage' },
    { number: '31', label: 'families who found their perfect storytellers' }
  ]

  const testimonials = [
    {
      quote: "Finding vendors who genuinely celebrated our love—not just tolerated it—was our biggest challenge. Anaarkali didn't just accept us; they made us feel like the love story they'd been waiting to tell.",
      author: "Priya & Meera",
      location: "Mumbai"
    },
    {
      quote: "They understood the cultural nuances of both our families and captured moments that honored everyone's traditions. That takes real skill and sensitivity.",
      author: "Sarah & Rajesh",
      location: "Delhi"
    },
    {
      quote: "We were nervous about how our trans identity would be handled, but from day one, they used our correct names and pronouns and made us feel completely comfortable.",
      author: "Alex & Jamie",
      location: "Bangalore"
    }
  ]

  const resources = [
    {
      title: 'Planning an Inclusive Wedding',
      items: [
        'Vendor vetting questions to ask',
        'How to handle family conversations',
        'Creating guest experiences for everyone',
        'Legal requirements for different ceremony types'
      ]
    },
    {
      title: 'Understanding Different Ceremonies',
      items: [
        'Hindu wedding rituals explained',
        'Sikh ceremony traditions',
        'Christian wedding customs',
        'Muslim wedding celebrations',
        'Court marriage procedures'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-luxury-primary text-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-primary text-4xl md:text-5xl text-luxury-accent mb-6">
              Every Story Deserves Telling
            </h1>
            <p className="font-interface text-lg text-luxury-accent/80 max-w-3xl mx-auto leading-relaxed">
              Love doesn't fit into one box. Neither does our lens.
            </p>
          </motion.div>

          {/* Mission Statement */}
          <motion.div 
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <motion.p 
                className="font-interface text-xl text-luxury-accent leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We believe love is love is love.
              </motion.p>
              <motion.div 
                className="space-y-4 text-luxury-accent/90"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.p 
                  className="font-interface text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >No matter who you love.</motion.p>
                <motion.p 
                  className="font-interface text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                >How you love.</motion.p>
                <motion.p 
                  className="font-interface text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                >Where you love.</motion.p>
                <motion.p 
                  className="font-interface text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >What traditions you follow.</motion.p>
                <motion.p 
                  className="font-interface text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                >What rules you break.</motion.p>
              </motion.div>
              <motion.p 
                className="font-interface text-lg text-luxury-accent leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Your love story deserves to be told with the same cinematic beauty, respect, and attention to detail as any other.
              </motion.p>
              <motion.p 
                className="font-interface text-lg font-medium text-luxury-accent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                This is more than a service—it's our promise.<br />
                A safe space where your authentic self isn't just welcomed, it's celebrated.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              The Love We've Captured So Far
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div 
                  className="font-primary text-4xl md:text-5xl text-luxury-primary font-bold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="font-interface text-sm text-luxury-primary/70 leading-relaxed">
                  {stat.label}
                </p>
                
                {/* Emblem Watermark */}
                <div className="mt-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <EmblemIcon size="sm" className="text-luxury-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Diverse Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="font-primary text-3xl md:text-4xl text-luxury-primary mb-4">
              Love Stories That Break Beautiful Rules
            </h2>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-3xl mx-auto">
              Every love story here represents a couple who refused to fit into someone else's definition of what a wedding should be. We're honored to have been their directors.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {filters.map((filter, index) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 font-interface text-sm transition-all duration-300 rounded-full ${
                  activeFilter === filter
                    ? 'bg-luxury-primary text-luxury-accent shadow-lg'
                    : 'bg-luxury-accent text-luxury-primary hover:bg-luxury-primary hover:text-luxury-accent border border-luxury-primary/30 hover:border-luxury-primary'
                }`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filter}
              </motion.button>
            ))}
          </motion.div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredItems.map((item, index) => (
                <motion.div 
                  key={item.id} 
                  className="w-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(79,13,14,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(79,13,14,0.12)] overflow-hidden"
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.9 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="w-full aspect-video overflow-hidden">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[index] = el
                      }}
                      className="w-full h-full object-cover"
                      playsInline
                      loop
                      preload="metadata"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Text Area */}
                  <div className="p-6">
                    <h3 className="font-primary-medium text-xl text-[#4F0D0E] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-primary text-sm text-[#4F0D0E] opacity-60 mb-3">
                      • {item.subtitle}
                    </p>
                    <p className="font-primary text-sm text-[#4F0D0E] opacity-80 leading-[1.4]">
                      A celebration of love in all its beautiful forms.
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Safe Space Messaging */}
      <section className="py-20 bg-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-luxury-secondary mb-4">
              In Their Own Words
            </h2>
            <p className="font-inter text-lg text-luxury-secondary/70 max-w-2xl mx-auto">
              Because when you become our client, you become our family. Here's what our diverse couples say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <p className="font-inter text-luxury-secondary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-inter text-sm font-medium text-luxury-secondary">
                      — {testimonial.author}
                    </p>
                    <p className="font-inter text-xs text-luxury-secondary/70">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-luxury-secondary mb-4">
              Resources for Every Love Story
            </h2>
            <p className="font-inter text-lg text-luxury-secondary/70 max-w-2xl mx-auto">
              Planning an inclusive wedding? We've got you covered with guides, resources, and support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {resources.map((resource, index) => (
              <div key={index} className="bg-luxury-accent p-8 rounded-lg">
                <h3 className="font-playfair text-2xl text-luxury-secondary mb-6">
                  {resource.title}
                </h3>
                <ul className="space-y-3">
                  {resource.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="font-inter text-base text-luxury-secondary/80 flex items-start gap-3">
                      <span className="text-[#D4A574] mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Safe Space Partnerships */}
          <div className="mt-16 text-center">
            <h3 className="font-playfair text-2xl text-luxury-secondary mb-8">
              Safe Space Partnerships
            </h3>
            <p className="font-inter text-lg text-luxury-secondary/70 mb-8">
              We work closely with organizations creating inclusive wedding experiences:
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                'LGBTQ+ Advocacy Groups',
                'Inclusive Wedding Planners',
                'Cultural Sensitivity Organizations',
                'Accessibility Support Networks'
              ].map((partner, index) => (
                <div key={index} className="bg-[#D4A574]/10 px-6 py-3 rounded-lg">
                  <p className="font-inter text-sm text-luxury-secondary font-medium">
                    {partner}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-luxury-secondary text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-white mb-6">
            Ready to Tell Your Love Story?
          </h2>
          <p className="font-inter text-lg text-white/80 mb-8 leading-relaxed">
            Every love story deserves to be told with respect, celebration, and joy. 
            Let's create something beautiful together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                window.location.href = '/begin-your-story'
              }}
              className="bg-[#D4A574] hover:bg-[#D4A574]/90 text-white px-8 py-4 font-primary text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Begin Your Story
            </button>
            <button 
              onClick={() => {
                window.location.href = '/our-vision'
              }}
              className="border border-white text-white hover:bg-white hover:text-luxury-secondary px-8 py-4 font-primary text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
