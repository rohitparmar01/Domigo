import React from 'react'
import { motion } from 'framer-motion'

export default function StickyFooter({ onPrimary }){
  return (
    <motion.div 
      className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-black/10 py-3 px-6 md:hidden flex justify-between items-center gap-4 shadow-lg"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.6, 0.05, 0.01, 0.9] }}
    >
      <div className="flex-1">
        <div className="font-semibold text-sm">Free Trial. First Visit Only.</div>
        <div className="text-xs text-black/60">Limited slots — Book Now</div>
      </div>
      <motion.button 
        onClick={onPrimary} 
        className="btn-primary px-6 py-2 whitespace-nowrap rounded-2xl text-sm font-semibold"
        whileHover={{ 
          scale: 1.05,
          y: -2,
          boxShadow: "0 8px 24px rgba(35, 114, 173, 0.3)"
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        Book
      </motion.button>
    </motion.div>
  )
}
