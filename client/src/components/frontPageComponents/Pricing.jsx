import React from 'react';

function Pricing() {
  const pricingCards = [
    {
      value: "0",
      desc: "Free account opening"
    },
    {
      value: "0",
      desc: "Free equity delivery and direct mutual funds"
    },
    {
      value: "20",
      desc: "Intraday and F&O"
    }
  ];

  return (
    <section className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-16 border-t border-slate-100/70 mt-12 animate-fade-in font-sans">
      
      {/* Left Column: Narrative */}
      <div className="lg:col-span-5 flex flex-col">
        <h2 className="text-[#424242] text-[2rem] sm:text-[2.25rem] font-medium leading-tight mb-6 tracking-tight">
          Unbeatable pricing
        </h2>
        <p className="text-slate-500 text-[15px] leading-relaxed font-normal mb-8 max-w-md">
          We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
        </p>
        <a 
          href="#pricing" 
          className="text-[#387ed1] hover:text-[#2e74d6] hover:underline font-medium flex items-center transition-all duration-150 group text-[16px] w-fit"
        >
          See pricing
          <span className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
        </a>
      </div>

      {/* Right Column: Pricing Badges */}
      <div className="lg:col-span-7 flex flex-row flex-wrap gap-8 sm:gap-10 md:gap-12 lg:justify-end items-center">
        {pricingCards.map((card, idx) => (
          <div key={idx} className="flex items-center gap-4 relative py-2 select-none group">
            {/* Dotted Accent SVG Background */}
            <svg 
              className="absolute left-[8px] top-[4px] -z-10 w-[70px] h-[70px] text-blue-500 opacity-20 pointer-events-none transform transition-transform duration-300 group-hover:scale-110" 
              viewBox="0 0 100 100" 
              fill="currentColor"
            >
              <circle cx="10" cy="10" r="3.5" />
              <circle cx="30" cy="10" r="3.5" />
              <circle cx="50" cy="10" r="3.5" />
              <circle cx="20" cy="25" r="3.5" />
              <circle cx="40" cy="25" r="3.5" />
              <circle cx="60" cy="25" r="3.5" />
              <circle cx="30" cy="40" r="3.5" />
              <circle cx="50" cy="40" r="3.5" />
              <circle cx="70" cy="40" r="3.5" />
              <circle cx="40" cy="55" r="3.5" />
              <circle cx="60" cy="55" r="3.5" />
              <circle cx="80" cy="55" r="3.5" />
            </svg>

            {/* Orange Number */}
            <div className="flex items-start text-[#f8a21e] font-sans font-medium tracking-tighter">
              <span className="text-[26px] mt-2.5 font-normal mr-0.5">₹</span>
              <span className="text-[64px] sm:text-[72px] leading-none">{card.value}</span>
            </div>

            {/* Description Text */}
            <p className="text-[#666666] text-[12px] sm:text-[13px] leading-[1.3] font-normal max-w-[125px]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Pricing;
