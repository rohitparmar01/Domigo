import React, {useState} from 'react'
import { motion } from 'framer-motion'

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
    <motion.section className="max-w-4xl mx-auto px-6 py-12" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
      <h3 className="text-2xl font-semibold text-lagoon">Give them familiarity before you give them a stay.</h3>
      <p className="mt-2 text-black/75">Few hours today can change their entire boarding experience.</p>

      <form onSubmit={submit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
        <input value={form.parentName} onChange={e=>setForm({...form,parentName:e.target.value})} placeholder="Your name" required className="p-3 rounded-2xl border" />
        <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" required className="p-3 rounded-2xl border" />
        <input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} placeholder="Phone" required className="p-3 rounded-2xl border" />
        <input value={form.dogName} onChange={e=>setForm({...form,dogName:e.target.value})} placeholder="Dog's name" className="p-3 rounded-2xl border" />
        <input value={form.dogAge} onChange={e=>setForm({...form,dogAge:e.target.value})} placeholder="Dog's age" className="p-3 rounded-2xl border" />
        <input value={form.dogBreed} onChange={e=>setForm({...form,dogBreed:e.target.value})} placeholder="Dog's breed" className="p-3 rounded-2xl border" />
        <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="A quick note" className="p-3 rounded-2xl border md:col-span-2" />

        <div className="md:col-span-2 flex gap-3 items-center">
          <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }} type="submit" className="px-6 py-3 btn-primary shadow-md" style={{boxShadow:'0 8px 24px rgba(255,204,0,0.12)'}}>Book Free Daycare Trial</motion.button>
          <motion.a whileHover={{ scale:1.03 }} href="#" className="px-4 py-3 bg-white rounded-2xl">Talk to Our Team</motion.a>
        </div>
        <div className="md:col-span-2 text-sm text-black/60">✔ No commitment required &nbsp; ✔ First visit exclusive &nbsp; ✔ Limited trial slots per day</div>
      </form>

      {status === 'done' && <div className="mt-4 text-green-600">Thanks — we’ll be in touch soon.</div>}
      {status === 'error' && <div className="mt-4 text-red-600">Something went wrong. Try again later.</div>}
    </motion.section>
  )
}
