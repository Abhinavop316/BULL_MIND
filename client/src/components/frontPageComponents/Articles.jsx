import React from 'react'

function Articles() {
  return (
    <div>
      <div className="w-full max-w-[1100px] border-t border-slate-100/70 mt-20 pt-12 pb-8 flex flex-wrap items-center justify-center gap-12 sm:gap-16 md:gap-20 opacity-[0.45] select-none grayscale hover:opacity-[0.65] transition-opacity duration-300">
        <div className="font-serif text-[18px] font-bold italic text-slate-800 tracking-tight">
          The Economic Times
        </div>
        <div className="font-serif text-[24px] font-black uppercase text-slate-900 tracking-tight">
          Forbes
        </div>
        <div className="font-serif text-[16px] font-bold text-slate-800 tracking-wide">
          Business Standard
        </div>
        <div className="font-serif text-[18px] font-extrabold uppercase text-slate-800 tracking-wide">
          THE HINDU
        </div>
        <div className="font-sans text-[18px] font-extrabold lowercase text-slate-800 flex items-center tracking-tighter">
          live<span className="font-light text-slate-500">mint</span>
          <div className="w-2.5 h-2.5 bg-[#424242] ml-1 rounded-[1px]" />
        </div>
      </div>
    </div>
  );
}

export default Articles