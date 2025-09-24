'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import EmblemIcon from './EmblemIcon'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-all duration-500 ${
        isScrolled 
          ? 'bg-[#ECEBE1]/98 border-[#4F0D0E]/30 shadow-lg' 
          : 'bg-[#ECEBE1]/95 border-[#4F0D0E]/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Emblem Watermark */}
        <motion.div
          className="absolute top-4 right-4 opacity-5 pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
        >
          <EmblemIcon className="w-8 h-8 text-[#4F0D0E]" />
        </motion.div>

        <div className="flex items-center justify-between py-4">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/stories", label: "Wedding Stories" },
              { href: "/four-acts", label: "Our Process" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6, ease: "easeOut" }}
                className="relative group"
              >
                <Link 
                  href={item.href} 
                  className="relative font-technical-bold text-sm text-[#2C2C2C] hover:text-[#4F0D0E] transition-all duration-300 py-2 px-1 block"
                >
                  <motion.span
                    className="relative z-10 uppercase"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#4F0D0E]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#4F0D0E]/5 rounded-md -m-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Center Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative group flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <div className="h-8 w-auto relative">
                <motion.div
                  className="absolute inset-0 bg-[#4F0D0E]/10 rounded-full blur-xl"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <svg viewBox="0 0 369 67" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto relative z-10">
                  <path d="M361.201 0.446667C359.366 0.446763 359.136 0.670287 359.136 1.56709V65.8796C359.136 66.7764 359.366 66.9999 361.201 67H367.165C368.541 67.0004 369 66.5522 369 65.8796V1.56709C369 0.894469 368.541 0.446299 367.165 0.446667H361.201Z" fill="#4F0D0E"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.058 3.18249C13.9548 -1.06084 20.456 -1.06082 21.3527 3.18249L33.4584 59.2392C33.9068 61.0254 35.476 60.5788 35.476 59.2392V4.07582C35.476 -0.390828 44.219 -0.167469 45.7883 4.07582L55.428 28.8658C56.3248 31.322 60.1358 31.322 60.1358 28.6425V4.07582C60.1358 0.279157 72.0173 -0.390843 72.0173 4.07582V59.2392C72.0174 61.2486 75.38 61.4719 76.0526 59.2392L91.4654 2.23332C91.9137 0.893324 91.9137 0.446657 93.0346 0.446657H102.226C103.347 0.446657 103.347 0.893324 103.795 2.23332L121.113 59.2392C122.234 62.1419 125.373 61.6953 126.045 59.2392L144.372 2.00999C144.82 0.669991 144.82 0.223324 145.941 0.223324H156.478C157.598 0.223324 157.598 0.669991 158.047 2.00999L176.037 59.2392C176.934 61.472 180.297 61.6954 180.297 59.2392V1.17249C180.297 0.055351 180.745 0.0553509 181.193 0.0558238H209.888C226.029 0.0560479 234.548 24.8454 218.183 36.0125C216.838 36.9303 216.614 38.022 217.286 39.5858L226.029 57.2392C227.599 60.3652 233.203 60.3653 233.203 57.2392V1.17249C233.203 0.278519 234.1 0.0559428 235.669 0.0558238H244.86C246.43 0.0553178 247.326 0.278664 247.326 1.17249V18.1458C247.326 21.0486 251.362 21.0486 252.931 18.1458L261.226 1.17249C261.674 0.278671 262.122 0.0558238 263.692 0.0558238H272.210C274.228 0.0550478 275.573 0.279477 275.125 1.17249L263.243 24.8458C262.571 26.1853 262.571 26.8553 263.243 28.4192L276.694 57.2392C277.815 59.6952 279.832 59.4719 280.729 57.2392L297.543 1.17249C297.991 -0.166648 298.439 0.0546751 300.009 0.0558238H306.286C307.855 0.0554436 308.079 -0.167784 308.527 1.17249L325.462 57.2392C326.134 59.2487 329.6 58.8021 329.6 57.2392V1.17249C329.6 0.278694 329.825 0.0559199 331.618 0.0558238H337.447C338.792 0.0554869 339.24 0.502146 339.24 1.17249V53.4325C339.24 55.6654 339.913 56.5592 342.379 56.5592H351.794C353.588 56.5588 354.26 57.0055 354.26 59.2392V64.1525C354.26 65.9387 354.036 66.6087 351.794 66.6092H313.684C308.976 66.6092 309.424 60.8021 312.563 60.8021C312.563 57.62 312.563 56.1121 310.769 56.1121L295.049 56.1125C293.283 56.1125 293.283 58.7366 293.283 60.8021C296.422 60.8022 296.843 66.8329 292.135 66.8329H263.243C259.208 66.8329 260.329 60.8021 263.243 60.8021L256 42C255.5 40.5 254.5 39.5 253 41L248 45.5C247.521 46.176 247.307 47.0059 247.326 48.5V61.0258C250.689 61.026 251.137 66.8328 247.326 66.8329H211.009C207.647 66.8329 207.647 61.0258 211.009 61.0258L202.042 39.5858C201.145 37.3521 194.868 37.7988 194.868 39.5858V61.0258C198.231 61.0261 198.007 66.8327 194.868 66.8329H162.138C157.43 66.8329 158.775 61.2492 161.914 61.2492C161.914 57.8434 161.914 56.5597 159.896 56.5596H142.186C140.393 56.5596 140.393 58.0667 140.393 61.2492C143.531 61.2494 144.203 66.8328 139.496 66.8329L108.11 66.8325C103.403 66.8323 104.748 61.2489 107.886 61.2487C107.886 57.8433 108.11 56.5592 105.868 56.5592H89.5034C87.7101 56.5593 87.7099 58.0667 87.7099 61.2487C90.8484 61.2487 91.521 66.8325 86.8132 66.8325H63.9469C62.1536 66.8324 61.4809 65.9391 60.5842 63.9292L49.8235 40.7025C48.9268 38.6925 45.1158 38.6367 45.1158 40.7025V60.8025C48.7026 60.8025 49.3752 66.6092 45.1158 66.6092L26.0605 66.8325C21.353 66.8323 22.6979 61.2489 25.8363 61.2487C25.8363 57.8433 25.8363 56.5592 23.8187 56.5592H11.4888C9.69554 56.5592 9.69534 57.8434 9.69534 61.2487C12.8339 61.2487 13.5064 66.8325 8.79862 66.8325H2.29741C-0.84047 66.8323 -0.616407 61.0261 2.07323 61.0258L13.058 3.18249ZM19.4069 37.219C18.8308 34.6267 15.6924 34.8506 15.0822 37.219L13.2954 44.9957C13.0027 46.3565 12.9976 48.0266 14.3383 48.0267H20.1508C21.5211 48.0267 21.5212 46.3566 21.1942 44.9957L19.4069 37.219ZM100.201 29.7517C99.8155 27.6025 96.286 27.6031 95.6906 29.7517L92.7487 42.8386C92.1378 45.3366 92.3576 46.9 94.1218 46.9H101.77C103.732 46.9 103.795 45.3366 103.142 42.8386L100.201 29.7517ZM305.022 29.7517C304.637 27.6025 301.108 27.6031 300.512 29.7517L297.571 42.8386C296.96 45.3366 297.179 46.9 298.943 46.9H306.591C308.553 46.8999 308.617 45.3366 307.964 42.8386L305.022 29.7517ZM154.269 27.9621C153.76 25.5057 149.101 25.5063 148.315 27.9621L145.432 40.9184C144.396 43.7558 144.915 45.56 147.244 45.56H155.34C157.929 45.5599 158.188 44.0136 157.151 40.9184L154.269 27.9621ZM197.709 9.82709C195.5 9.82709 194.583 10.6776 194.588 12.9433C194.597 16.8797 194.575 22.1107 194.588 25.7635C194.598 28.5 195.5 28.916 197.709 28.916H205.576C215.440 28.916 214.243 9.82734 205.500 9.82709C203.707 9.82713 201.972 9.82640 197.709 9.82709Z" fill="#4F0D0E"/>
                </svg>
              </div>
            </Link>
          </motion.div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[
              { href: "/love-is-love", label: "Inclusive Love" },
              { href: "/our-vision", label: "About Us" },
              { href: "/begin-your-story", label: "Get Started" }
            ].map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 2), duration: 0.6, ease: "easeOut" }}
                className="relative group"
              >
                <Link 
                  href={item.href} 
                  className="relative font-technical-bold text-sm text-[#2C2C2C] hover:text-[#4F0D0E] transition-all duration-300 py-2 px-1 block"
                >
                  <motion.span
                    className="relative z-10 uppercase"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Underline animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#4F0D0E]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  
                  {/* Background glow on hover */}
                  <motion.div
                    className="absolute inset-0 bg-[#4F0D0E]/5 rounded-md -m-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#2C2C2C] hover:text-[#4F0D0E] relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="absolute inset-0 bg-[#4F0D0E]/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1.2, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5 relative z-10" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5 relative z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden py-4 border-t border-[#4F0D0E]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <motion.div 
                className="flex flex-col space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
              >
                {[
                  { href: "/stories", label: "Wedding Stories" },
                  { href: "/four-acts", label: "Our Process" },
                  { href: "/love-is-love", label: "Inclusive Love" },
                  { href: "/our-vision", label: "About Us" },
                  { href: "/begin-your-story", label: "Get Started" }
                ].map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1), duration: 0.4, ease: "easeOut" }}
                    className="relative group"
                  >
                    <Link
                      href={item.href}
                      className="relative font-technical-bold text-sm text-[#2C2C2C] hover:text-[#4F0D0E] transition-all duration-300 py-3 px-2 block"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <motion.span
                        className="relative z-10 uppercase"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.span>
                      
                      {/* Mobile underline animation */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-0.5 bg-[#4F0D0E]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                      
                      {/* Mobile background glow */}
                      <motion.div
                        className="absolute inset-0 bg-[#4F0D0E]/5 rounded-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
