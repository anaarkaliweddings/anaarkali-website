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
          {/* Column 1: Contact Info */}
          <motion.div 
            className="text-center md:text-left"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs font-interface tracking-wider uppercase mb-2">
              Contact Us
            </div>
            <div className="space-y-1 text-xs font-interface">
              <div>hello@anaarkali.com</div>
              <div>+91 98765 43210</div>
            </div>
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
              <Link href="mailto:hello@anaarkali.com" className="block hover:text-[#ECEBE1] transition-all duration-300">
                EMAIL US
              </Link>
              <Link href="/begin-your-story" className="block hover:text-[#ECEBE1] transition-all duration-300">
                GET STARTED
              </Link>
              <motion.div
                className="relative"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Link href="/begin-your-story" className="block hover:text-[#ECEBE1] transition-all duration-300 group relative">
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
              <Link href="/our-vision" className="block hover:text-[#ECEBE1] transition-all duration-300">
                ABOUT US
              </Link>
              <Link href="/love-is-love" className="block hover:text-[#ECEBE1] transition-all duration-300">
                INCLUSIVE LOVE
              </Link>
              <Link href="/stories" className="block hover:text-[#ECEBE1] transition-all duration-300">
                OUR STORIES
              </Link>
            </div>
          </motion.div>

          {/* Column 4: Process */}
          <motion.div 
            className="text-center md:text-right"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-xs font-interface tracking-wider uppercase mb-2">
              Our Process
            </div>
            <div className="space-y-1 text-xs font-interface">
              <Link href="/four-acts" className="block hover:text-[#ECEBE1] transition-all duration-300">
                THE FOUR ACTS
              </Link>
              <div className="text-xs opacity-70">
                Your journey with us
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { 
              name: 'WhatsApp', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              ), 
              href: 'https://wa.me/919876543210' 
            },
            { 
              name: 'Instagram', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              ), 
              href: 'https://instagram.com/anaarkali' 
            },
            { 
              name: 'Facebook', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              ), 
              href: 'https://facebook.com/anaarkali' 
            },
            { 
              name: 'Linktree', 
              icon: (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z"/>
                </svg>
              ), 
              href: 'https://linktr.ee/anaarkali' 
            }
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
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center hover:text-[#ECEBE1] transition-all duration-300 group"
                title={social.name}
              >
                <motion.div
                  className="w-8 h-8 border-2 border-[#ECEBE1]/50 rounded-full flex items-center justify-center group-hover:border-[#ECEBE1] group-hover:bg-[#ECEBE1]/10 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {social.icon}
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