import React from 'react'

export default function StickyFooter({ onPrimary }){
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 border-t py-3 px-6 md:hidden flex justify-between items-center gap-4">
      <div className="flex-1">
        <div className="font-semibold text-sm">Free Trial. First Visit Only.</div>
        <div className="text-xs text-black/60">Limited slots — Book Now</div>
      </div>
      <button onClick={onPrimary} className="btn-primary px-6 py-2 whitespace-nowrap rounded-2xl text-sm font-semibold">Book</button>
    </div>
  )
}
