'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'

export default function Stories() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Recent')
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const featuredVideoRef = useRef<HTMLVideoElement | null>(null)

  const filters = ['All', 'Traditional', 'Modern', 'Destination', 'Court Marriage', 'LGBTQ+']
  const sortOptions = ['Recent', 'Popular', 'Location']

  // Video hover-to-play functionality
  const handleMouseEnter = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.play().catch(console.error)
    }
  }

  const handleMouseLeave = (index: number) => {
    const video = videoRefs.current[index]
    if (video) {
      video.pause()
    }
  }

  const handleFeaturedVideoPlay = () => {
    const video = featuredVideoRef.current
    if (video) {
      video.play().catch(console.error)
    }
  }

  const portfolioItems = [
    {
      id: 1,
      title: 'Anuj & Noopur',
      location: 'Jim Corbett',
      category: 'Traditional',
      description: 'A romantic pre-wedding celebration in the wilderness, capturing authentic moments in the wild.',
      videoUrl: '/Anuj-Noopur-jim Corbett-2024-01.mp4',
      thumbnail: '/portfolio/priya-arjun-thumb.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Naveen & Sweeta',
      location: 'Delhi',
      category: 'Modern',
      description: 'Urban love story captured in the capital city, celebrating love that bridges cultures.',
      videoUrl: '/Naveen-Sweeta-Delhi-2024-02.mp4',
      thumbnail: '/portfolio/sarah-rajesh-thumb.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Pooja & Hemant',
      location: 'Delhi NCR',
      category: 'Traditional',
      description: 'A modern couple\'s journey to forever, contemporary love story with traditional roots.',
      videoUrl: '/Pooja-Hemant-Delhi NCR-2023-05.mp4',
      thumbnail: '/portfolio/meera-alex-thumb.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Priya & David',
      location: 'Jaipur',
      category: 'Destination',
      description: 'A royal pre-wedding celebration in the Pink City, cross-cultural love story set against royal heritage.',
      videoUrl: '/Priya-david Pre-wedding-Jaipur-2024-03.mp4',
      thumbnail: '/portfolio/kai-river-thumb.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Priya & Haywards',
      location: 'Jim Corbett',
      category: 'Destination',
      description: 'Love story unfolds in the heart of nature, another beautiful wilderness celebration.',
      videoUrl: '/Priya-Haywards-jim corbett-2024-06.mp4',
      thumbnail: '/portfolio/anjali-dev-thumb.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Vidhisha & Ruchir',
      location: 'Delhi',
      category: 'Modern',
      description: 'Urban love story captured in the capital city, modern love story with traditional values.',
      videoUrl: '/Vidhisha-Ruchir-Pre-wedding-Delhi-2025-04.mp4',
      thumbnail: '/portfolio/priya-meera-thumb.jpg',
      featured: false
    }
  ]

  const filteredItems = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Portfolio Header */}
      <section className="pt-32 pb-20 bg-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-primary text-4xl md:text-5xl text-luxury-primary mb-6">
              The Cinema We Create
            </h1>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-3xl mx-auto leading-relaxed">
              Every wedding is a movie waiting to be directed. Here are some we're honored to have told.
            </p>
          </motion.div>

          {/* Filter and Search Controls */}
          <motion.div 
            className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 font-interface text-sm transition-all duration-300 rounded-full ${
                    activeFilter === filter
                      ? 'bg-luxury-primary text-luxury-accent shadow-lg'
                      : 'bg-white text-luxury-primary hover:bg-luxury-primary hover:text-luxury-accent border border-luxury-primary/30 hover:border-luxury-primary'
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter}
                </motion.button>
              ))}
            </div>

            {/* Search and Sort */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.input
                type="text"
                placeholder="Search by couple or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="px-4 py-3 border border-luxury-primary/30 rounded-lg font-interface text-sm focus:outline-none focus:ring-2 focus:ring-luxury-primary focus:border-luxury-primary transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              />
              <motion.select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-luxury-primary/30 rounded-lg font-interface text-sm focus:outline-none focus:ring-2 focus:ring-luxury-primary focus:border-luxury-primary transition-all duration-300"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </motion.select>
            </div>
          </motion.div>

          {/* Filter Introduction */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-interface text-base text-luxury-primary/70">
              Browse by the kind of love story that speaks to you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredItems.map((item, index) => (
                <motion.div 
                  key={item.id} 
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
                  className="w-full bg-white rounded-2xl shadow-[0_4px_20px_rgba(79,13,14,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(79,13,14,0.12)] overflow-hidden"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  <div className="w-full aspect-video overflow-hidden relative">
                    <video
                      ref={(el) => { videoRefs.current[index] = el }}
                      className="w-full h-full object-cover"
                      playsInline
                      loop
                      muted
                      preload="metadata"
                    >
                      <source src={item.videoUrl} type="video/mp4" />
                    </video>
                    {/* Play overlay */}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 ml-1 text-luxury-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Text Area */}
                  <div className="p-6">
                    <h3 className="font-primary-medium text-xl text-[#4F0D0E] mb-2">
                      {item.title}
                    </h3>
                    <p className="font-primary text-sm text-[#4F0D0E] opacity-60 mb-3">
                      • {item.location}
                    </p>
                    <p className="font-primary text-sm text-[#4F0D0E] opacity-80 leading-[1.4]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Featured Case Study */}
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
              Behind the Director's Cut: Priya & Arjun
            </h2>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-4xl mx-auto leading-relaxed">
              Some stories demand to be told differently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <motion.p 
                  className="font-interface text-lg text-luxury-primary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  Priya and Arjun's families hadn't spoken in years. The wedding was their chance to heal old wounds, but the pressure was immense.
                </motion.p>
                <motion.p 
                  className="font-interface text-lg text-luxury-primary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Our approach: Focus on the quiet bridge-building moments. Capture the aunties finding common ground over mehendi designs. The fathers sharing a laugh during the baraat. The mothers crying together during the vidaai.
                </motion.p>
                <motion.p 
                  className="font-interface text-lg text-luxury-primary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  The result: A film that didn't just document a wedding—it told the story of two families becoming one.
                </motion.p>
                <motion.p 
                  className="font-interface text-lg font-medium text-luxury-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  This is what happens when you treat love stories like cinema.
                </motion.p>
              </div>
            </motion.div>

            {/* Video */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl relative">
                <video
                  ref={featuredVideoRef}
                  className="w-full h-full object-cover"
                  playsInline
                  loop
                  muted
                  preload="metadata"
                >
                  <source src="/Anuj-Noopur-jim Corbett-2024-01.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-luxury-primary/30 flex items-center justify-center">
                  <motion.div 
                    className="text-center text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm cursor-pointer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleFeaturedVideoPlay}
                    >
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </motion.div>
                    <p className="text-sm font-interface">Director's commentary video</p>
                  </motion.div>
                </div>
                
                {/* Emblem Watermark */}
                <div className="absolute top-4 right-4">
                  <EmblemIcon size="sm" className="text-white opacity-40" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Love Section */}
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
              What Our Families Tell Their Families
            </h2>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-2xl mx-auto">
              The ultimate test: Would our couples recommend us to their closest friends? Here's what they say.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Six months later, I still get chills watching our film. They captured moments I didn't even know happened.",
                author: "Priya & Arjun",
                location: "Delhi"
              },
              {
                quote: "Everyone asks who our photographer was. Not because of the technical quality—that's expected. Because of how it feels.",
                author: "Sarah & Rajesh",
                location: "Mumbai"
              },
              {
                quote: "They made us feel like the main characters in our own love story. Because we were.",
                author: "Meera & Alex",
                location: "Goa"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="bg-luxury-accent p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
              >
                <div className="mb-6">
                  <svg className="w-8 h-8 text-luxury-primary/60 mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <p className="font-interface text-luxury-primary mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="border-t border-luxury-primary/20 pt-4">
                  <p className="font-primary text-lg text-luxury-primary">
                    — {testimonial.author}
                  </p>
                  <p className="font-interface text-sm text-luxury-primary/60">
                    {testimonial.location}
                  </p>
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
