import React from 'react'
import { motion } from 'framer-motion'

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
}

export default function FadeInSection({ children, className='' }){
  return (
    <motion.section className={className} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal}>
      {children}
    </motion.section>
  )
}
