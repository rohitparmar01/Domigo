import React, {useState} from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
}

export default function FinalCTA(){
  const [form, setForm] = useState({parentName:'', email:'', phone:'', dogName:'', dogAge:'', dogBreed:'', message:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const res = await fetch(`${API}/api/trial-booking`, {method:'POST', headers:{'content-type':'application/json'}, body: JSON.stringify(form)})
      if(res.ok){ setStatus('done'); setForm({parentName:'',email:'',phone:'',dogName:'',dogAge:'',dogBreed:'',message:''}) }
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }

  return (
    <motion.section 
      className="max-w-4xl mx-auto px-6 py-12" 
      initial="hidden"
      whileInView="visible"
      viewport={{once:true, margin: "-100px"}}
      variants={containerVariants}
    >
      <motion.h3 
        variants={itemVariants}
        className="text-2xl font-semibold text-lagoon"
      >
        Give them familiarity before you give them a stay.
      </motion.h3>
      <motion.p 
        variants={itemVariants}
        className="mt-2 text-black/75"
      >
        Few hours today can change their entire boarding experience.
      </motion.p>

      <motion.form 
        onSubmit={submit} 
        className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3"
        variants={containerVariants}
      >
        <motion.input 
          variants={itemVariants}
          value={form.parentName} 
          onChange={e=>setForm({...form,parentName:e.target.value})} 
          placeholder="Your name" 
          required 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.input 
          variants={itemVariants}
          value={form.email} 
          onChange={e=>setForm({...form,email:e.target.value})} 
          placeholder="Email" 
          required 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.input 
          variants={itemVariants}
          value={form.phone} 
          onChange={e=>setForm({...form,phone:e.target.value})} 
          placeholder="Phone" 
          required 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.input 
          variants={itemVariants}
          value={form.dogName} 
          onChange={e=>setForm({...form,dogName:e.target.value})} 
          placeholder="Dog's name" 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.input 
          variants={itemVariants}
          value={form.dogAge} 
          onChange={e=>setForm({...form,dogAge:e.target.value})} 
          placeholder="Dog's age" 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.input 
          variants={itemVariants}
          value={form.dogBreed} 
          onChange={e=>setForm({...form,dogBreed:e.target.value})} 
          placeholder="Dog's breed" 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300"
          whileFocus={{ scale: 1.01 }}
        />
        <motion.textarea 
          variants={itemVariants}
          value={form.message} 
          onChange={e=>setForm({...form,message:e.target.value})} 
          placeholder="A quick note" 
          className="p-3 rounded-2xl border border-gray-200 focus:border-primary transition-all duration-300 md:col-span-2"
          whileFocus={{ scale: 1.01 }}
        />

        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 flex flex-col gap-3 items-stretch sm:items-center sm:flex-row"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.06, 
              y: -3,
              boxShadow: "0 16px 40px rgba(35, 114, 173, 0.35)"
            }} 
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            type="submit" 
            className="w-full sm:w-auto px-6 py-3 btn-primary shadow-md text-center" 
            style={{boxShadow:'0 8px 24px rgba(35,114,173,0.15)'}}
          >
            Book Free Daycare Trial
          </motion.button>
          <motion.a 
            whileHover={{ 
              scale: 1.03,
              y: -2,
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)"
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            href="#" 
            className="w-full sm:w-auto px-4 py-3 bg-white rounded-2xl text-center border border-gray-200"
          >
            Talk to Our Team
          </motion.a>
        </motion.div>
        <motion.div 
          variants={itemVariants}
          className="md:col-span-2 text-sm text-black/60"
        >
          ✔ No commitment required &nbsp; ✔ First visit exclusive &nbsp; ✔ Limited trial slots per day
        </motion.div>
      </motion.form>

      {status === 'done' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-green-600 font-medium"
        >
          Thanks — we'll be in touch soon.
        </motion.div>
      )}
      {status === 'error' && (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 text-red-600 font-medium"
        >
          Something went wrong. Try again later.
        </motion.div>
      )}
    </motion.section>
  )
}
