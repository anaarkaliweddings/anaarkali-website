'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import LuxuryVideoPlayer from '@/components/LuxuryVideoPlayer'
import EmblemIcon from '@/components/EmblemIcon'

export default function FourActs() {
  const [selectedPackage, setSelectedPackage] = useState('Essential')
  const [addOns, setAddOns] = useState<string[]>([])
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const packages = {
    Essential: {
      price: '₹2-5 lakhs',
      description: 'Perfect for intimate celebrations',
      includes: [
        'Pre-production consultation',
        'Full day coverage',
        'Basic editing',
        'Digital gallery',
        'Same-day social media content'
      ]
    },
    Cinematic: {
      price: '₹5-8 lakhs',
      description: 'Our most popular choice',
      includes: [
        'Complete four-act experience',
        'Multiple camera angles',
        'Professional color grading',
        'Cinematic film delivery',
        'Behind-the-scenes footage'
      ]
    },
    Premium: {
      price: '₹8-12 lakhs',
      description: 'For the ultimate experience',
      includes: [
        'Extended pre-production',
        'Drone coverage',
        'Live streaming',
        'Premium editing suite',
        'Physical album & USB'
      ]
    },
    Signature: {
      price: '₹12+ lakhs',
      description: 'Bespoke luxury experience',
      includes: [
        'Unlimited consultation',
        'Multiple day coverage',
        'Director\'s commentary',
        'Custom premiere event',
        'Lifetime access to content'
      ]
    }
  }

  const addOnOptions = [
    { id: 'drone', name: 'Drone Coverage', price: '+₹50,000' },
    { id: 'live', name: 'Live Streaming', price: '+₹75,000' },
    { id: 'album', name: 'Premium Album', price: '+₹25,000' },
    { id: 'rush', name: 'Rush Delivery', price: '+₹30,000' }
  ]

  const faqs = [
    {
      question: "How far in advance should we book?",
      answer: "We take on limited projects each year to ensure each couple gets our full creative attention. Book 6-12 months in advance for the best dates."
    },
    {
      question: "Do you shoot destination weddings?",
      answer: "We love to travel for love. Destination weddings are some of our favorite stories to tell. Travel costs are additional."
    },
    {
      question: "What if it rains on our outdoor events?",
      answer: "Rain creates some of the most romantic, cinematic moments. We come prepared with equipment and backup plans that turn weather into an advantage."
    },
    {
      question: "Can we see raw footage?",
      answer: "Our artistry is in the edit. Like a film director, we craft the final product. Raw footage doesn't tell the story—the edit does."
    }
  ]

  const toggleAddOn = (addOnId: string) => {
    setAddOns(prev => 
      prev.includes(addOnId) 
        ? prev.filter(id => id !== addOnId)
        : [...prev, addOnId]
    )
  }

  // Calculate total investment
  const calculateTotalInvestment = () => {
    const basePackage = packages[selectedPackage as keyof typeof packages]
    const basePriceRange = basePackage.price
    
    // Extract price range (e.g., "₹2-5 lakhs" -> [200000, 500000])
    const priceMatch = basePriceRange.match(/₹(\d+)-(\d+)\s*lakhs/)
    if (!priceMatch) return basePriceRange
    
    const minBase = parseInt(priceMatch[1]) * 100000 // Convert lakhs to rupees
    const maxBase = parseInt(priceMatch[2]) * 100000
    
    // Calculate add-on costs
    let totalAddOns = 0
    addOns.forEach(addOnId => {
      const addOn = addOnOptions.find(a => a.id === addOnId)
      if (addOn) {
        const addOnPrice = parseInt(addOn.price.replace(/[₹,]/g, ''))
        totalAddOns += addOnPrice
      }
    })
    
    const minTotal = minBase + totalAddOns
    const maxTotal = maxBase + totalAddOns
    
    // Convert back to lakhs format
    const minLakhs = Math.round(minTotal / 100000)
    const maxLakhs = Math.round(maxTotal / 100000)
    
    return `₹${minLakhs}-${maxLakhs} lakhs`
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Page Header */}
      <section className="pt-20 pb-16 bg-luxury-accent">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-primary text-4xl md:text-5xl text-luxury-primary mb-6">
              Your Director's Journey
            </h1>
            <p className="font-interface text-lg text-luxury-primary/70 max-w-3xl mx-auto leading-relaxed">
              Like any great film, your wedding story follows a four-act structure. Here's how we bring yours to life.
            </p>
          </motion.div>

          {/* Process Overview Timeline */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { id: 1, title: 'Pre-Production', subtitle: 'The Vision', duration: '1-2 months' },
              { id: 2, title: 'Production', subtitle: 'The Shoot', duration: 'Your wedding day(s)' },
              { id: 3, title: 'Post-Production', subtitle: 'The Edit', duration: '3-4 weeks' },
              { id: 4, title: 'The Premiere', subtitle: 'Your Release', duration: '1 week after' }
            ].map((act, index) => (
              <motion.div 
                key={act.id} 
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
              >
                <motion.div 
                  className="w-16 h-16 bg-luxury-primary text-luxury-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="font-primary text-xl font-bold">{act.id}</span>
                </motion.div>
                <h3 className="font-primary text-lg text-luxury-primary mb-2 group-hover:text-luxury-primary/80 transition-colors duration-300">
                  {act.title}
                </h3>
                <p className="font-interface text-sm text-luxury-primary/70 mb-2">
                  {act.subtitle}
                </p>
                <p className="font-interface text-xs text-luxury-primary font-medium">
                  {act.duration}
                </p>
                
                {/* Emblem Watermark */}
                <div className="mt-4 opacity-0 group-hover:opacity-30 transition-opacity duration-300">
                  <EmblemIcon size="sm" className="text-luxury-primary" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Act I: Pre-Production */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 bg-luxury-primary text-luxury-accent rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <span className="font-primary text-xl font-bold">1</span>
                </motion.div>
                <div>
                  <h2 className="font-primary text-3xl text-luxury-primary">
                    Act I: Pre-Production - "The Vision"
                  </h2>
                  <p className="font-interface text-sm text-luxury-primary font-medium">
                    Duration: 1-2 months before your wedding
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <motion.p 
                  className="font-interface text-lg text-luxury-primary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  This is where the magic begins.
                </motion.p>
                
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-primary text-xl text-luxury-primary">
                    The Storyboarding Session
                  </h3>
                  <p className="font-interface text-base text-luxury-primary/80 leading-relaxed">
                    We don't ask about your timeline first. We ask about your love story.
                    In our 90-minute director's meeting, we map out the emotional arc of your day.
                    Who are the supporting characters? What moments matter most to you?
                    What's the theme of your love story—romance, adventure, tradition with a twist?
                  </p>
                </motion.div>

                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-primary text-xl text-luxury-primary">
                    The Director's Treatment
                  </h3>
                  <p className="font-interface text-base text-luxury-primary/80 leading-relaxed">
                    After our session, you receive a beautiful document outlining:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="font-interface text-base text-luxury-primary/80">• The logline of your wedding film</li>
                    <li className="font-interface text-base text-luxury-primary/80">• Visual style and tone</li>
                    <li className="font-interface text-base text-luxury-primary/80">• Key characters and their roles</li>
                    <li className="font-interface text-base text-luxury-primary/80">• The emotional beats we'll capture</li>
                  </ul>
                </motion.div>

                <motion.p 
                  className="font-interface text-lg font-medium text-luxury-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  By the end of Act I, you'll feel like your love story is being taken seriously as a piece of art.
                </motion.p>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <LuxuryVideoPlayer
                  src="/hero-video"
                  className="w-full h-full object-cover"
                  muted
                  autoplay
                  showControls={false}
                />
                <div className="absolute inset-0 bg-luxury-primary/30 flex items-center justify-center">
                  <motion.div 
                    className="text-center text-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </motion.div>
                    <p className="text-sm font-interface">Pre-production consultation</p>
                  </motion.div>
                </div>
                
                {/* Emblem Watermark */}
                <div className="absolute top-4 right-4">
                  <EmblemIcon size="sm" className="text-white opacity-40" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Act II: Production */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video bg-gray-400 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-inter">Wedding day coverage</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4A574] text-white rounded-full flex items-center justify-center">
                  <span className="font-playfair text-xl font-bold">2</span>
                </div>
                <div>
                  <h2 className="font-playfair text-3xl text-[#2C2C2C]">
                    Act II: Production - "The Shoot"
                  </h2>
                  <p className="font-inter text-sm text-[#D4A574] font-medium">
                    Duration: Your wedding day(s)
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  The cameras roll, but you won't feel like you're performing.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Call Sheet
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    The day before your wedding, you receive a professional call sheet.
                    Scene by scene breakdown. Cast requirements. Everything organized.
                    No chaos. No confusion. Just clarity.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    Direction, Not Posing
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    We don't say 'smile!'
                    We say 'Tell each other what you're most excited about for your honeymoon.'
                    We direct emotions, not expressions.
                    You live your moments. We capture the truth of them.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act III: Post-Production */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4A574] text-white rounded-full flex items-center justify-center">
                  <span className="font-playfair text-xl font-bold">3</span>
                </div>
                <div>
                  <h2 className="font-playfair text-3xl text-[#2C2C2C]">
                    Act III: Post-Production - "The Edit"
                  </h2>
                  <p className="font-inter text-sm text-[#D4A574] font-medium">
                    Duration: 3-4 weeks after your wedding
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  This is where your story comes alive.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Dailies (48-hour delivery)
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    While we work on your main film, you get a sneak peek.
                    5 professionally edited Reels, ready for social media.
                    The social wedding happens in real-time. We make sure you're part of it.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Edit Process
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    Regular updates so you never wonder what's happening.
                    Color grading that makes every frame cinema-ready.
                    Sound design that brings back the feeling of being there.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-video bg-gray-400 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-inter">Editing suite</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Act IV: The Premiere */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-video bg-gray-400 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-black/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8 5v10l8-5-8-5z"/>
                      </svg>
                    </div>
                    <p className="text-sm font-inter">Premiere screening</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#D4A574] text-white rounded-full flex items-center justify-center">
                  <span className="font-playfair text-xl font-bold">4</span>
                </div>
                <div>
                  <h2 className="font-playfair text-3xl text-[#2C2C2C]">
                    Act IV: The Premiere - "Your Release"
                  </h2>
                  <p className="font-inter text-sm text-[#D4A574] font-medium">
                    Duration: 1 week after film delivery
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-[#2C2C2C] leading-relaxed">
                  Your love story deserves a proper premiere.
                </p>
                
                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Premiere Box
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    A beautifully curated package arrives at your door:
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="font-inter text-base text-[#2C2C2C]/80">• Handwritten note from your director</li>
                    <li className="font-inter text-base text-[#2C2C2C]/80">• Custom engraved USB with your film</li>
                    <li className="font-inter text-base text-[#2C2C2C]/80">• Sensory elements that bring back your day</li>
                    <li className="font-inter text-base text-[#2C2C2C]/80">• Your premiere ticket</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="font-playfair text-xl text-[#2C2C2C]">
                    The Private Screening Room
                  </h3>
                  <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                    Your personalized webpage where your film lives.
                    Not just a Dropbox link. A destination.
                    High-definition streaming. Easy downloads. Elegant presentation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              The Investment in Your Legacy
            </h2>
            <p className="font-inter text-lg text-[#2C2C2C]/70 max-w-3xl mx-auto">
              Great cinema isn't cheap. But the memories we create together? Priceless.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Package Selection */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
                Choose Your Director's Treatment
              </h3>
              
              <div className="space-y-4">
                {Object.entries(packages).map(([key, pkg]) => (
                  <div
                    key={key}
                    onClick={() => setSelectedPackage(key)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all duration-300 ${
                      selectedPackage === key
                        ? 'border-[#D4A574] bg-[#D4A574]/5'
                        : 'border-gray-200 hover:border-[#D4A574]/50'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-playfair text-xl text-[#2C2C2C] mb-2">
                          {key} Package
                        </h4>
                        <p className="font-inter text-sm text-[#2C2C2C]/70">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-playfair text-2xl text-[#D4A574] font-bold">
                          {pkg.price}
                        </p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="font-inter text-sm text-[#2C2C2C]/80 flex items-center gap-2">
                          <span className="text-[#D4A574]">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons and Summary */}
            <div className="space-y-8">
              <h3 className="font-playfair text-2xl text-[#2C2C2C] mb-6">
                Add-On Services
              </h3>
              
              <div className="space-y-4">
                {addOnOptions.map((addOn) => (
                  <label key={addOn.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={addOns.includes(addOn.id)}
                        onChange={() => toggleAddOn(addOn.id)}
                        className="w-4 h-4 text-[#D4A574] border-gray-300 rounded focus:ring-[#D4A574]"
                      />
                      <span className="font-inter text-sm text-[#2C2C2C]">
                        {addOn.name}
                      </span>
                    </div>
                    <span className="font-inter text-sm font-medium text-[#D4A574]">
                      {addOn.price}
                    </span>
                  </label>
                ))}
              </div>

              {/* Investment Summary */}
              <div className="bg-[#FAF9F6] p-6 rounded-lg">
                <h4 className="font-playfair text-lg text-[#2C2C2C] mb-4">
                  Investment Summary
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-inter text-sm text-[#2C2C2C]/70">
                      {selectedPackage} Package
                    </span>
                    <span className="font-inter text-sm text-[#2C2C2C]">
                      {packages[selectedPackage as keyof typeof packages].price}
                    </span>
                  </div>
                  {addOns.map((addOnId) => {
                    const addOn = addOnOptions.find(a => a.id === addOnId)
                    return addOn ? (
                      <div key={addOnId} className="flex justify-between">
                        <span className="font-inter text-sm text-[#2C2C2C]/70">
                          {addOn.name}
                        </span>
                        <span className="font-inter text-sm text-[#2C2C2C]">
                          {addOn.price}
                        </span>
                      </div>
                    ) : null
                  })}
                </div>
                <div className="border-t border-gray-300 pt-4 mt-4">
                  <div className="flex justify-between">
                    <span className="font-inter font-medium text-[#2C2C2C]">
                      Total Investment
                    </span>
                    <span className="font-playfair text-lg font-bold text-[#D4A574]">
                      {calculateTotalInvestment()}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#D4A574] hover:bg-[#D4A574]/90 text-white px-8 py-4 font-inter text-sm tracking-wider uppercase transition-all duration-300">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#2C2C2C] mb-4">
              Questions Every Couple Asks
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-inter text-lg text-[#2C2C2C]">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 text-[#D4A574] transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="font-inter text-base text-[#2C2C2C]/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
