import React, {useRef} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import FinalCTA from './components/FinalCTA'
import StickyFooter from './components/StickyFooter'
import WhatsAppFloat from './components/WhatsAppFloat'
import * as Sections from './components/Sections'

export default function App(){
  const contactRef = useRef()
  function openForm(){ contactRef.current?.scrollIntoView({behavior:'smooth', block:'center'}) }

  return (
    <div className="min-h-screen text-black font-quicksand">
      <Navbar onPrimary={openForm} />
      <div className="pt-0" />
      <Hero onPrimary={openForm} />

      <main className="space-y-8">
        <Sections.Trust onPrimary={openForm} />
        <Sections.RepeatingText />
        <Sections.WhatIsTrial onPrimary={openForm} />
        <Sections.RepeatingText />
        <Sections.Benefits onPrimary={openForm} />
        <Sections.RepeatingText />
        <Sections.Process onPrimary={openForm} />
        <Sections.RepeatingText />
        <Sections.Emotional onPrimary={openForm} />
        <Sections.RepeatingText />
        <Sections.SocialProof onPrimary={openForm} />
        <Sections.WhoShouldBook onPrimary={openForm} />
        <Sections.Differentiation onPrimary={openForm} />
        <div ref={contactRef} id="contact" className="scroll-mt-24"><FinalCTA /></div>
        <Sections.FAQ onPrimary={openForm} />
      </main>

      <StickyFooter />
      <WhatsAppFloat />
    </div>
  )
}
