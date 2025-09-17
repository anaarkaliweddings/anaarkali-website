'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'

export default function Stories() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('Recent')

  const filters = ['All', 'Traditional', 'Modern', 'Destination', 'Court Marriage', 'LGBTQ+']
  const sortOptions = ['Recent', 'Popular', 'Location']

  const portfolioItems = [
    {
      id: 1,
      title: 'Priya & Arjun',
      location: 'Delhi',
      category: 'Traditional',
      description: 'A three-day celebration of love, tradition, and family bonds in the heart of Delhi.',
      videoUrl: '/portfolio/priya-arjun.mp4',
      thumbnail: '/portfolio/priya-arjun-thumb.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Sarah & Rajesh',
      location: 'Mumbai',
      category: 'Modern',
      description: 'Contemporary elegance meets timeless romance in this intimate Mumbai celebration.',
      videoUrl: '/portfolio/sarah-rajesh.mp4',
      thumbnail: '/portfolio/sarah-rajesh-thumb.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Meera & Alex',
      location: 'Goa',
      category: 'Destination',
      description: 'Sunset vows by the Arabian Sea, captured in cinematic perfection.',
      videoUrl: '/portfolio/meera-alex.mp4',
      thumbnail: '/portfolio/meera-alex-thumb.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Kai & River',
      location: 'Bangalore',
      category: 'LGBTQ+',
      description: 'A celebration of love that transcends boundaries, documented with authenticity.',
      videoUrl: '/portfolio/kai-river.mp4',
      thumbnail: '/portfolio/kai-river-thumb.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'Anjali & Dev',
      location: 'Court House',
      category: 'Court Marriage',
      description: 'A courthouse "I do" that was more romantic than any grand affair.',
      videoUrl: '/portfolio/anjali-dev.mp4',
      thumbnail: '/portfolio/anjali-dev-thumb.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Priya & Meera',
      location: 'Mumbai',
      category: 'LGBTQ+',
      description: 'When two brides wore red and broke every rule beautifully.',
      videoUrl: '/portfolio/priya-meera.mp4',
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
      <section className="pt-20 pb-16 bg-luxury-accent">
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
                  className="group cursor-pointer"
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
                >
                  <div className="relative aspect-video bg-luxury-primary/5 rounded-lg overflow-hidden mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    {/* Elegant Film Strip Border Effect */}
                    <div className="absolute inset-0 border border-luxury-primary/15 group-hover:border-luxury-primary/30 transition-all duration-300 rounded-lg"></div>
                    <div className="absolute inset-1 border border-luxury-accent/20 group-hover:border-luxury-accent/40 transition-all duration-300 rounded-lg"></div>
                    
                    {/* Video Background */}
                    <LuxuryVideoPlayer
                      src="/hero-video"
                      className="w-full h-full object-cover"
                      muted
                      autoplay
                      showControls={false}
                    />
                    
                    {/* Elegant Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-primary/40 via-luxury-primary/10 to-transparent group-hover:from-luxury-primary/50 group-hover:via-luxury-primary/20 transition-all duration-300"></div>
                    
                    {/* Elegant Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div 
                        className="w-16 h-16 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className="w-6 h-6 ml-1 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 5v10l8-5-8-5z"/>
                        </svg>
                      </motion.div>
                    </div>
                    
                    {/* Content Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                        <h3 className="text-white font-primary text-lg mb-1 drop-shadow-lg">
                          {item.title}
                        </h3>
                        <p className="text-white/90 font-interface text-sm drop-shadow-md">
                          {item.location} • {item.category}
                        </p>
                      </div>
                    </div>
                    
                    {/* Emblem Watermark */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                      <EmblemIcon size="sm" className="text-white" />
                    </div>
                  </div>
                  
                  <motion.p 
                    className="font-interface text-sm text-luxury-primary/70 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  >
                    {item.description}
                  </motion.p>
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
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <LuxuryVideoPlayer
                  src="/testimonial-video"
                  className="w-full h-full"
                  muted
                  autoplay
                  showControls={false}
                />
                <div className="absolute inset-0 bg-luxury-primary/30 flex items-center justify-center">
                  <motion.div 
                    className="text-center text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-20 h-20 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
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
