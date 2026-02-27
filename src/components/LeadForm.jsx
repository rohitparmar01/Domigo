import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function LeadForm({ onSuccess }){
  const [form, setForm] = useState({parentName:'', phone:'', email:'', dogName:'', dogAge:'', dogBreed:'', message:''})
  const [status, setStatus] = useState(null)

  async function submit(e){
    e.preventDefault()
    setStatus('sending')
    try{
      const API = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      const res = await axios.post(`${API}/api/trial-booking`, form)
      if(res.status === 201){ setStatus('done'); setForm({parentName:'', phone:'', email:'', dogName:'', dogAge:'', dogBreed:'', message:''}); onSuccess?.() }
      else setStatus('error')
    }catch(err){ setStatus('error') }
  }

  return (
    <motion.form onSubmit={submit} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-6 bg-white rounded-2xl shadow-xl max-w-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <input required placeholder="Your name" value={form.parentName} onChange={e=>setForm({...form,parentName:e.target.value})} className="p-4 text-lg rounded-2xl border" />
        <input required placeholder="Phone" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="p-4 text-lg rounded-2xl border" />
        <input required placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="p-4 text-lg rounded-2xl border" />
        <input placeholder="Dog's name" value={form.dogName} onChange={e=>setForm({...form,dogName:e.target.value})} className="p-4 text-lg rounded-2xl border" />
        <input placeholder="Dog's age" value={form.dogAge} onChange={e=>setForm({...form,dogAge:e.target.value})} className="p-4 text-lg rounded-2xl border" />
        <input placeholder="Dog's breed" value={form.dogBreed} onChange={e=>setForm({...form,dogBreed:e.target.value})} className="p-4 text-lg rounded-2xl border" />
        <textarea placeholder="A note" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} className="p-4 text-lg rounded-2xl border md:col-span-2" />
      </div>
      <div className="mt-6 flex items-center gap-3">
        <motion.button whileHover={{scale:1.08}} whileTap={{scale:0.95}} className="px-7 py-4 text-lg btn-primary rounded-2xl">Request Free Trial</motion.button>
        <div className="text-base text-black/60">✔ No commitment required &nbsp; ✔ First visit exclusive</div>
      </div>
      {status === 'done' && <div className="mt-4 text-lg text-green-600">Thanks — we’ll be in touch soon.</div>}
      {status === 'error' && <div className="mt-4 text-lg text-red-600">Something went wrong. Try again later.</div>}
    </motion.form>
  )
}
