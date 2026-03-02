import React from 'react'
import { motion } from 'framer-motion'

export default function WhatsAppFloat(){
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '';
  const whatsappMessage = import.meta.env.VITE_WHATSAPP_MESSAGE || '';
  const encodedMsg = encodeURIComponent(whatsappMessage);
  
  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}${encodedMsg ? `?text=${encodedMsg}` : ''}`}
      target="_blank"
      rel="noreferrer"
      className="fixed right-6 bottom-24 md:bottom-20 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.5, 
        delay: 1,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ 
        scale: 1.06,
        boxShadow: "0 8px 20px rgba(37,211,102,0.25)"
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span 
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.25, 0, 0.25]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0 z-10">
        <path d="M21 12.1c0-4.96-4.04-9-9-9s-9 4.04-9 9c0 1.6.42 3.1 1.16 4.42L3 21l4.6-1.2A8.94 8.94 0 0012 21c4.96 0 9-4.04 9-8.9z" fill="white" />
      </svg>
      <span className="hidden md:inline z-10 font-medium">Chat with us about your dog's trial</span>
    </motion.a>
  )
}
