'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import EmblemIcon from './EmblemIcon'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-[#3C2E23] text-[#ECEBE1] py-16 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8">
          <EmblemIcon size="lg" className="text-[#ECEBE1]" />
        </div>
        <div className="absolute top-16 right-16">
          <EmblemIcon size="md" className="text-[#ECEBE1]" />
        </div>
        <div className="absolute bottom-8 left-1/4">
          <EmblemIcon size="sm" className="text-[#ECEBE1]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Column 1: International Version */}
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="text-xs font-interface tracking-wider uppercase hover:text-[#ECEBE1] transition-all duration-300 group">
              <span className="relative">
                International Version - English →
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#ECEBE1]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </motion.div>

          {/* Column 2: Client Service */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xs font-interface tracking-wider uppercase mb-4">
              Client Service
            </h3>
            <div className="space-y-2 text-xs font-interface tracking-wider">
              <div>EMAIL US</div>
              <div>CHAT UNAVAILABLE</div>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="#" className="block hover:text-[#ECEBE1] transition-all duration-300 group relative">
                  <motion.span 
                    className="relative z-10 font-bold text-sm tracking-wider"
                    animate={{ 
                      color: ["#ECEBE1", "#D4A574", "#ECEBE1"],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    BOOK AN APPOINTMENT →
                  </motion.span>
                  
                  {/* Pulsing background glow */}
                  <motion.div
                    className="absolute inset-0 bg-[#D4A574]/20 rounded-lg -m-2"
                    animate={{ 
                      opacity: [0.3, 0.6, 0.3],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Animated underline */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#D4A574] to-[#ECEBE1]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Column 3: Legal Notices */}
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xs font-interface tracking-wider uppercase mb-4">
              Legal Notices
            </h3>
            <div className="space-y-2 text-xs font-interface tracking-wider">
              <div>ACCESSIBILITY</div>
              <div>CAREER</div>
            </div>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div 
            className="text-center md:text-right"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Link href="#" className="text-xs font-interface tracking-wider uppercase hover:text-[#ECEBE1] transition-all duration-300 group">
              <span className="relative">
                NEWSLETTER →
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-[#ECEBE1]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center space-x-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { name: 'LINE', icon: 'LINE', href: '#' },
            { name: 'Facebook', icon: 'f', href: '#' },
            { name: 'X', icon: '𝕏', href: '#' },
            { name: 'Instagram', icon: '📷', href: '#' },
            { name: 'TikTok', icon: '♫', href: '#' },
            { name: 'YouTube', icon: '▶', href: '#' }
          ].map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link 
                href={social.href} 
                className="w-8 h-8 flex items-center justify-center hover:text-[#ECEBE1] transition-all duration-300 group"
              >
                <motion.div
                  className="w-6 h-6 border border-[#ECEBE1]/50 rounded-full flex items-center justify-center group-hover:border-[#ECEBE1] group-hover:bg-[#ECEBE1]/10 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-xs font-bold">{social.icon}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center text-xs font-interface tracking-wider opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          © 2024 Anaarkali Productions. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  )
}