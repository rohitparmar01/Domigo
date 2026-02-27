import React from 'react'
import { motion } from 'framer-motion'

const reveal = { hidden: { opacity: 0, y: 30 }, visible: (i=0)=>({ opacity:1, y:0, transition:{ delay: i*0.12 } }) }

export function Trust({ onPrimary }){
  return (
    <motion.section className="max-w-5xl mx-auto px-6 py-16" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <motion.h2
        variants={reveal}
        className="text-3xl md:text-4xl font-bold text-lagoon mb-4 leading-tight tracking-tight"
        style={{ fontFamily: 'Quicksand, sans-serif' }}
      >
        Leaving them for the first time isn’t easy. We understand.
      </motion.h2>
      <motion.p
        variants={reveal}
        className="mt-2 text-lg md:text-xl text-black/80 max-w-3xl"
        style={{ fontFamily: 'Quicksand, sans-serif', lineHeight: '1.7' }}
      >
        For dogs, boarding anxiety doesn’t come from the place. It comes from unfamiliarity. New smells. New people. New environment. That’s why at Domigo, we never recommend boarding without a trial. We help your dog build comfort first. At their pace. Without pressure.
      </motion.p>
      <motion.div variants={reveal} className="mt-8">
        <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-6 py-3 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
      </motion.div>
    </motion.section>
  )
}

export function WhatIsTrial({ onPrimary }){
  return (
    <motion.section className="bg-white/50 max-w-6xl mx-auto px-6 py-14 rounded-2xl card-shape" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="w-full h-64 md:h-80 lg:h-96 flex items-center justify-center bg-[#FFD12A] rounded-3xl overflow-hidden">
          <motion.img
            variants={reveal}
            custom={0}
            src="/section.jpg"
            alt="daycare dog"
            className="h-full w-auto object-cover"
            style={{ maxWidth: '100%' }}
          />
        </div>
        <div>
          <motion.h3 variants={reveal} className="text-3xl md:text-4xl font-bold text-lagoon mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>What is the Free Daycare Trial?</motion.h3>
          <motion.p variants={reveal} className="mt-2 text-lg md:text-xl text-black/80" style={{ fontFamily: 'Quicksand, sans-serif', lineHeight: '1.7' }}>A 3–5 hour daytime stay designed to help your dog:</motion.p>
          <motion.ul variants={reveal} className="mt-3 space-y-1 text-lg md:text-xl text-black/80 list-disc pl-5" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            <li>Get comfortable in our environment</li>
            <li>Build trust with our caregivers</li>
            <li>Socialise with compatible dogs/Packs</li>
            <li>Reduce anxiety for future boarding</li>
          </motion.ul>
          <motion.p variants={reveal} className="mt-4 text-base text-black/50">No overnight stay. No forceful introductions. No pressure. Just a calm, guided first experience.</motion.p>
          <motion.div variants={reveal} className="mt-6">
            <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-6 py-3 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export function Benefits({ onPrimary }){
  const cards = [
    {title: 'Emotional Comfort', body: 'They learn this is a safe place & they know you’ll be coming back to take them.'},
    {title: 'Familiar Faces', body: 'They bond with caregivers before staying overnight.'},
    {title: 'Social Confidence', body: 'They meet compatible dogs gradually.'},
    {title: 'Parent Peace of Mind', body: 'You see how they adjust before boarding.'}
  ]
  return (
    <motion.section className="max-w-6xl mx-auto px-6 py-16" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <h3 className="text-3xl md:text-4xl font-bold text-lagoon text-center mb-10 tracking-tight" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        Why this trial makes boarding stress-free later
      </h3>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {cards.map((c,i)=> (
          <motion.div
            key={c.title}
            variants={reveal}
            custom={i}
            whileHover={{ scale: 1.06, y: -8, boxShadow: '0 8px 32px 0 rgba(30, 64, 175, 0.13)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-start min-h-[180px] cursor-pointer"
            style={{ boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.07)' }}
          >
            <h4 className="font-semibold text-lg md:text-xl text-lagoon mb-2" style={{ fontFamily: 'Quicksand, sans-serif' }}>{c.title}</h4>
            <p className="text-lg md:text-xl text-black/70 leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>{c.body}</p>
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-10 text-center">
        <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-6 py-3 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
      </div>
    </motion.section>
  )
}

export function Process({ onPrimary }){
  const steps = [
    'Gentle Welcome - We allow them to settle and observe.',
    'Behaviour Assessment - We understand their personality and comfort level.',
    'Gradual Introduction - They meet compatible dogs if and when ready.',
    'Rest & Relaxation - They play, relax, and start feeling at home.',
    'Happy Pick-Up - You take home a calmer, more confident dog.'
  ]
  return (
    <motion.section id="what-happens" className="bg-white/50 max-w-4xl mx-auto px-6 py-16 rounded-2xl card-shape scroll-mt-24" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <h3 className="text-3xl md:text-4xl font-bold text-lagoon text-center mb-10 tracking-tight" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        What happens during the trial?
      </h3>
      <div className="flex flex-col gap-6">
        {steps.map((s,i)=> (
          <motion.div
            key={s}
            variants={reveal}
            custom={i}
            className="bg-white rounded-2xl shadow-md p-6 flex items-start gap-4 min-h-[72px]"
            whileHover={{ scale: 1.03, y: -4, boxShadow: '0 8px 32px 0 rgba(30, 64, 175, 0.10)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ boxShadow: '0 2px 12px 0 rgba(30, 64, 175, 0.07)' }}
          >
            <span className="font-bold text-lagoon text-lg md:text-xl min-w-[70px]" style={{ fontFamily: 'Quicksand, sans-serif' }}>Step {i+1}:</span>
            <span className="text-lg md:text-xl text-black/80 leading-relaxed" style={{ fontFamily: 'Quicksand, sans-serif' }}>{s}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-10 text-center">
        <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-6 py-3 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
      </div>
    </motion.section>
  )
}

export function Emotional({ onPrimary }){
  return (
    <motion.section className="max-w-6xl mx-auto px-6 py-16" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-lagoon mb-4 leading-tight" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            So when you travel, they don’t feel left.<br />They feel at home.
          </h3>
          <p className="mt-3 text-lg md:text-xl text-black/80 max-w-2xl" style={{ fontFamily: 'Quicksand, sans-serif', lineHeight: '1.7' }}>
            Most dogs who complete the trial adjust faster. They eat normally. They play normally. They sleep peacefully. Because they’ve been here before. Because this place isn’t new anymore.
          </p>
          <div className="mt-8">
            <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-7 py-4 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
          </div>
        </div>
        <div className="w-full h-56 md:h-64 lg:h-72 flex items-center justify-center">
          <img src="/slider3.jpg" alt="calm dog" className="w-full h-full object-cover rounded-3xl shadow-xl" />
        </div>
      </div>
    </motion.section>
  )
}

export function SocialProof({ onPrimary }){
  const testimonials = [
    {text: '“His trial changed everything. He now runs inside without looking back.”', meta: '— Bruno’s Parent'},
    {text: '“I was more anxious than my dog. Domigo made both of us comfortable.”', meta: '— Coco’s Parent'}
  ]
  return (
    <motion.section className="bg-white/50 max-w-6xl mx-auto px-6 py-16 rounded-2xl card-shape" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <h3 className="text-3xl md:text-4xl font-bold text-lagoon text-center mb-10 tracking-tight" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        Trusted by caring pet parents
      </h3>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {testimonials.map((t,i)=> (
          <motion.blockquote
            key={i}
            variants={reveal}
            custom={i}
            className="flex-1 bg-white rounded-2xl shadow-md p-8 mb-0 flex flex-col justify-between min-h-[160px]"
            whileHover={{ scale: 1.03, y: -4, boxShadow: '0 8px 32px 0 rgba(30, 64, 175, 0.10)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ boxShadow: '0 2px 12px 0 rgba(30, 64, 175, 0.07)' }}
          >
            <p className="italic text-lg md:text-xl text-black/90 mb-3" style={{ fontFamily: 'Quicksand, sans-serif' }}>{t.text}</p>
            <div className="mt-auto text-lg md:text-xl text-black/50 font-medium" style={{ fontFamily: 'Quicksand, sans-serif' }}>{t.meta}</div>
          </motion.blockquote>
        ))}
      </div>
      <div className="mt-10 text-center">
        <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-7 py-4 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
      </div>
    </motion.section>
  )
}

export function WhoShouldBook({ onPrimary }){
  return (
    <motion.section className="max-w-5xl mx-auto px-6 py-16" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <div className="bg-white rounded-2xl shadow-xl p-0 w-full grid grid-cols-1 md:grid-cols-2 items-center" style={{ boxShadow: '0 4px 24px 0 rgba(30, 64, 175, 0.07)' }}>
        <div className="h-full w-full flex items-center justify-center p-6 md:p-10">
          <img src="/slider2.jpg" alt="trial dog" className="w-full h-64 md:h-80 object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col items-center p-6 md:p-10">
          <h3 className="text-3xl md:text-4xl font-bold text-lagoon text-center mb-6 tracking-tight" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            This trial is perfect if:
          </h3>
          <ul className="mb-8 space-y-3 text-lg md:text-xl text-black/80 max-w-xl" style={{ fontFamily: 'Quicksand, sans-serif' }}>
            <li className="list-disc ml-6">Your dog has never stayed at boarding before</li>
            <li className="list-disc ml-6">Your dog gets anxious in new places</li>
            <li className="list-disc ml-6">You’re planning travel soon</li>
            <li className="list-disc ml-6">You want to test comfort before boarding</li>
          </ul>
          <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-7 py-4 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
        </div>
      </div>
    </motion.section>
  )
}

export function Differentiation({ onPrimary }){
  return (
    <motion.section className="bg-white/50 max-w-5xl mx-auto px-6 py-12 rounded-2xl card-shape" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <h3 className="text-3xl md:text-4xl font-bold text-lagoon mb-4" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        Not all boarding starts this way
      </h3>
      <p className="mt-3 text-lg md:text-xl text-black/80" style={{ fontFamily: 'Quicksand, sans-serif', lineHeight: '1.7' }}>
        Most boarding facilities start with separation. We start with connection. Because comfort cannot be forced. It must be built.
      </p>
      <div className="mt-8 text-center">
        <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-7 py-4 btn-primary rounded-2xl text-base md:text-lg font-semibold">Book Free Trial</motion.button>
      </div>
    </motion.section>
  )
}

export function FAQ({ onPrimary }){
  const qas = [
    ['How long is the trial?', '3–5 hours during the day.'],
    ['What if my dog don’t get comfortable in the first trial?', 'No worries, we offer 2 – free Daycare trials for them to get comfortable at their pace.'],
    ['Is it really free?', 'Yes. It’s complimentary for first-time dogs.'],
    ['Can anxious dogs attend?', 'Yes. In fact, this trial is designed especially for them.'],
    ['Is overnight stay included?', 'No. This is only a daycare experience.'],
    ['Will I get feedback?', 'Yes. We share observations and recommendations.']
  ]
  const [open, setOpen] = React.useState(null);
  return (
    <motion.section id="faq" className="max-w-4xl mx-auto px-6 py-12 scroll-mt-24 flex flex-col items-center" initial="hidden" whileInView="visible" viewport={{once:true}}>
      <h3 className="text-3xl md:text-4xl font-bold text-lagoon mb-6 tracking-tight text-center" style={{ fontFamily: 'Quicksand, sans-serif' }}>
        FAQ
      </h3>
      <div className="mt-4 space-y-4 w-full flex flex-col items-center">
        {qas.map(([q,a],i)=> (
          <motion.div key={q} variants={reveal} custom={i} className="p-6 bg-white card-shape cursor-pointer select-none w-full max-w-3xl" onClick={()=>setOpen(open===i?null:i)}>
            <div className="flex items-center justify-between">
              <strong className="text-lg md:text-xl text-lagoon" style={{ fontFamily: 'Quicksand, sans-serif' }}>{q}</strong>
              <span className={`ml-4 transition-transform duration-200 text-2xl ${open===i ? 'text-lagoon' : 'text-black/40'}`}>{open===i ? '▲' : '▼'}</span>
            </div>
            {open===i && (
              <motion.p initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} className="mt-4 text-lg md:text-xl text-black/70" style={{ fontFamily: 'Quicksand, sans-serif' }}>{a}</motion.p>
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-6 text-center w-full">
        <motion.button whileHover={{scale:1.04}} whileTap={{scale:0.95}} onClick={onPrimary} className="px-6 py-3 btn-primary rounded-2xl">Book Free Trial</motion.button>
      </div>
    </motion.section>
  )
}

export function RepeatingText(){
  return (
    <div className="max-w-5xl mx-auto px-6 py-6 text-center text-black/50">Boarding feels better when it doesn’t feel new.</div>
  )
}
