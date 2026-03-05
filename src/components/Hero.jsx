import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reveal = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Hero({ onPrimary }){
  // Use the two approved public images only
  const images = ['/slider1.jpg','/slider2.jpeg',"/slider4.JPG"];
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const t = setInterval(()=> setIndex(i => (i+1) % images.length), 3000)
    return ()=> clearInterval(t)
  },[])
  return (
    <motion.header className="relative overflow-hidden bg-white pb-12" initial="hidden" whileInView="visible" viewport={{ once:true }}>
      <div className="absolute inset-0 -z-10">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover brightness-75">
          <source src="https://images.pexels.com/videos/1108099/free-video-1108099.mp4" type="video/mp4" />
        </video>
      </div>

      <motion.div variants={reveal} className="max-w-6xl mx-auto px-6 pt-24 pb-12 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-lagoon leading-tight">Try the day, before you stay.</h1>
            <p className="mt-4 text-lg text-black/80">Few hours apart today. Stress-free boarding tomorrow.</p>
            <p className="mt-4 text-sm text-black/70">Because boarding shouldn’t feel like being left behind. It should feel like coming back to a familiar place.</p>

            <div className="mt-8 flex flex-col gap-3 w-full sm:flex-row sm:w-auto">
              <motion.button whileHover={{ scale: 1.04, y: -4 }} onClick={onPrimary} className="w-full sm:w-auto px-6 py-3 btn-primary font-medium rounded-2xl shadow-lg text-center">Book Free Trial</motion.button>
              <motion.button whileHover={{ scale: 1.03 }} className="w-full sm:w-auto px-4 py-3 bg-white/90 text-black rounded-2xl text-center">Schedule a Visit First</motion.button>
            </div>
            <p className="mt-3 text-sm text-black/60">
              <span className="paw-check"></span>No commitment required 
              <span className="paw-check ml-2"></span>First visit exclusive 
              <span className="paw-check ml-2"></span>Limited trial slots per day
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full md:w-[520px] lg:w-[640px] h-72 md:h-[420px] rounded-3xl shadow-xl overflow-hidden">
              {/** Image slider using public images dog1.jpg, dog2.jpg, dog3.jpg **/}
              <AnimatePresence initial={false} mode="wait">
                <motion.img
                  key={images[index]}
                  src={images[index]}
                  alt={`dog slide ${index+1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                />
              </AnimatePresence>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex items-center gap-2 z-10">
                {images.map((src,i)=> (
                  <button key={src} onClick={()=> setIndex(i)} className={`w-2 h-2 rounded-full ${i===index? 'bg-lemon':'bg-white/60'}`} aria-label={`Slide ${i+1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.header>
  )
}
