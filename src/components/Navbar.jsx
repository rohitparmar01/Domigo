
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ onPrimary }){
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNavClick(href) {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div 
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="backdrop-blur-md bg-white/70 border-b border-black/5 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3 pl-10 md:pl-12"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <img src="/logo.png" alt="Domigo logo" className="h-16 md:h-20 w-auto object-contain" style={{ transform: 'rotate(90deg) scale(1.6)' }} />
          </motion.div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <motion.a 
                href="#what-happens" 
                className="text-black/70 hover:text-lagoon transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                What happens
              </motion.a>
              <motion.a 
                href="#faq" 
                className="text-black/70 hover:text-lagoon transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                F&amp;Q
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-black/70 hover:text-lagoon transition-colors duration-300"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Contact
              </motion.a>
            </nav>

            <motion.button 
              whileHover={{ 
                scale: 1.05,
                y: -2,
                boxShadow: "0 8px 24px rgba(35, 114, 173, 0.25)"
              }} 
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={onPrimary} 
              className="hidden md:block px-4 py-2 btn-primary rounded-2xl"
            >
              Book Free Trial
            </motion.button>
            <motion.button 
              className="md:hidden text-black/70 text-3xl px-2" 
              aria-label="Open menu" 
              onClick={()=>setMenuOpen(true)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ☰
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/40 md:hidden"
            onClick={()=>setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 left-0 w-64 h-full bg-white shadow-2xl flex flex-col p-6 gap-6"
              onClick={e=>e.stopPropagation()}
            >
              <motion.button 
                className="self-end text-2xl text-black/60 mb-2" 
                aria-label="Close menu" 
                onClick={()=>setMenuOpen(false)}
                whileHover={{ scale: 1.2, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                ×
              </motion.button>
              <motion.a 
                href="#what-happens" 
                className="text-lg py-2 text-black/80 hover:text-lagoon border-b transition-colors duration-300" 
                onClick={()=>handleNavClick('#what-happens')}
                whileHover={{ x: 5 }}
              >
                What happens
              </motion.a>
              <motion.a 
                href="#faq" 
                className="text-lg py-2 text-black/80 hover:text-lagoon border-b transition-colors duration-300" 
                onClick={()=>handleNavClick('#faq')}
                whileHover={{ x: 5 }}
              >
                F&amp;Q
              </motion.a>
              <motion.a 
                href="#contact" 
                className="text-lg py-2 text-black/80 hover:text-lagoon border-b transition-colors duration-300" 
                onClick={()=>handleNavClick('#contact')}
                whileHover={{ x: 5 }}
              >
                Contact
              </motion.a>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={()=>{setMenuOpen(false);onPrimary?.()}} 
                className="mt-4 px-4 py-3 btn-primary rounded-2xl"
              >
                Book Free Trial
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}
