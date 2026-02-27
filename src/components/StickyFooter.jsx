import React from 'react'

export default function StickyFooter(){
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 border-t py-3 px-6 md:hidden flex justify-between items-center">
      <div>
        <div className="font-semibold">Free Trial. First Visit Only.</div>
        <div className="text-sm text-black/60">Limited slots — Book Now</div>
      </div>
      <a href="#" className="btn-primary px-4 py-2">Book Now</a>
    </div>
  )
}
