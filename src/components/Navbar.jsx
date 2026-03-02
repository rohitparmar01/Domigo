
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
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="backdrop-blur-sm bg-white/60 border-b">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 pl-10 md:pl-12">
            <img src="/logo.png" alt="Domigo logo" className="h-16 md:h-20 w-auto object-contain" style={{ transform: 'rotate(90deg) scale(1.6)' }} />
          </div>

          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <a href="#what-happens" className="text-black/70 hover:text-lagoon">What happens</a>
              <a href="#faq" className="text-black/70 hover:text-lagoon">F&amp;Q</a>
              <a href="#contact" className="text-black/70 hover:text-lagoon">Contact</a>
            </nav>

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onPrimary} className="hidden md:block px-4 py-2 btn-primary rounded-2xl">Book Free Trial</motion.button>
            <button className="md:hidden text-black/70 text-3xl px-2" aria-label="Open menu" onClick={()=>setMenuOpen(true)}>☰</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 bottom-0 left-0 z-50 bg-black/40 md:hidden"
            onClick={()=>setMenuOpen(false)}
          >
            <motion.div
              initial={{ x: 80 }}
              animate={{ x: 0 }}
              exit={{ x: 80 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="absolute top-0 right-0 w-64 h-full bg-white shadow-2xl flex flex-col p-6 gap-6"
              onClick={e=>e.stopPropagation()}
            >
              <button className="self-end text-2xl text-black/60 mb-2" aria-label="Close menu" onClick={()=>setMenuOpen(false)}>×</button>
              <a href="#what-happens" className="text-lg py-2 text-black/80 hover:text-lagoon border-b" onClick={()=>handleNavClick('#what-happens')}>What happens</a>
              <a href="#faq" className="text-lg py-2 text-black/80 hover:text-lagoon border-b" onClick={()=>handleNavClick('#faq')}>F&amp;Q</a>
              <a href="#contact" className="text-lg py-2 text-black/80 hover:text-lagoon border-b" onClick={()=>handleNavClick('#contact')}>Contact</a>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={()=>{setMenuOpen(false);onPrimary?.()}} className="mt-4 px-4 py-3 btn-primary rounded-2xl">Book Free Trial</motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
