import React from 'react';

function Ecosystem() {
  const startupCards = [
    {
      name: "Streak",
      desc: "",
      category: "",
      position: "top-[4%] left-[10%]",
      logo: (
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" fill="#0066ff" className="w-5 h-5 mr-1.5">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
          <span className="font-semibold text-[15px] text-slate-700 tracking-tight">Streak</span>
          <span className="text-[10px] text-slate-400 font-light ml-0.5">™</span>
        </div>
      )
    },
    {
      name: "ditto",
      desc: "",
      category: "Insurance",
      position: "top-[4%] right-[10%]",
      logo: (
        <span className="font-sans font-black text-[20px] text-slate-800 tracking-tighter">ditto</span>
      )
    },
    {
      name: "console",
      desc: "",
      category: "Backoffice",
      position: "top-[25%] left-[26%]",
      logo: (
        <span className="font-sans font-semibold text-[16px] text-blue-600 tracking-tight">console</span>
      )
    },
    {
      name: "Kite",
      desc: "",
      category: "Investing",
      position: "top-[32%] right-[10%]",
      logo: (
        <div className="flex items-center">
          <svg viewBox="0 0 100 100" className="w-4 h-4 mr-1.5">
            <path d="M10,50 L55,15 L55,50 L10,50 Z" fill="#D93E2B" />
            <path d="M55,15 L90,50 L55,85 L55,50 Z" fill="#FF4F30" />
            <path d="M10,50 L55,50 L55,85 L10,50 Z" fill="#E23E26" />
          </svg>
          <span className="font-medium text-[16px] text-slate-700">Kite</span>
        </div>
      )
    },
    {
      name: "SENSIBULL",
      desc: "",
      category: "Options",
      position: "top-[42%] left-[2%]",
      logo: (
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" fill="#ff5a00" className="w-4.5 h-4.5 mr-1.5">
            <path d="M3,4C3,4 3,9 8,9C13,9 11,4 11,4C11,4 12,6 13,6C14,6 15,4 15,4C15,4 13,9 18,9C23,9 23,4 23,4C23,4 22,12 17,14C15.5,14.6 14,15 12,15C10,15 8.5,14.6 7,14C2,12 3,4 3,4Z" />
          </svg>
          <span className="font-sans font-extrabold text-[12px] text-slate-700 tracking-wide uppercase">SENSIBULL</span>
        </div>
      )
    },
    {
      name: "coin",
      desc: "",
      category: "Mutual funds",
      position: "bottom-[28%] left-[45%]",
      logo: (
        <div className="flex items-center">
          <span className="font-sans font-semibold text-[17px] text-slate-800 tracking-tight">c</span>
          <svg viewBox="0 0 100 100" className="w-4 h-4 mx-0.5">
            <circle cx="50" cy="50" r="36" fill="#f8c301" />
            <circle cx="50" cy="50" r="28" fill="none" stroke="#424242" strokeWidth="10" />
            <path d="M50,14 A36,36 0 0,1 86,50 A36,36 0 0,1 50,86 A28,28 0 0,0 50,14" fill="#d99b00" />
          </svg>
          <span className="font-sans font-semibold text-[17px] text-slate-800 tracking-tight">in</span>
        </div>
      )
    },
    {
      name: "smallcase",
      desc: "",
      category: "",
      position: "bottom-[16%] right-[3%]",
      logo: (
        <div className="flex items-center">
          <svg viewBox="0 0 24 24" fill="#0066ff" className="w-[18px] h-[18px] mr-1.5">
            <rect x="2" y="2" width="8" height="8" rx="1.5" />
            <rect x="14" y="2" width="8" height="8" rx="1.5" />
            <rect x="2" y="14" width="8" height="8" rx="1.5" />
            <rect x="14" y="14" width="8" height="8" rx="1.5" />
          </svg>
          <span className="font-sans font-bold text-[14px] text-[#0066ff] tracking-tight">smallcase</span>
        </div>
      )
    },
    {
      name: "TIJORI",
      desc: "",
      category: "",
      position: "bottom-[8%] left-[34%]",
      logo: (
        <div className="flex flex-col items-center">
          <span className="font-sans font-semibold text-[15px] text-slate-800 tracking-[0.1em] uppercase">TIJORI</span>
          <div className="w-full h-[2.5px] bg-[#d99b00] mt-0.5 rounded-[1px]" />
        </div>
      )
    }
  ];

  return (
    <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center py-8">
      {/* Left Column: Trust features */}
      <div className="lg:col-span-5 flex flex-col text-left">
        <h2 className="text-[#424242] text-[2rem] sm:text-[2.25rem] font-medium leading-tight mb-12 tracking-tight">
          Trust with confidence
        </h2>

        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-[#424242] text-[1.25rem] font-medium mb-2.5">
              Customer-first always
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India's largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div>
            <h3 className="text-[#424242] text-[1.25rem] font-medium mb-2.5">
              No spam or gimmicks
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.{" "}
              <a
                href="#philosophy"
                className="text-[#387ed1] hover:text-[#2e74d6] hover:underline transition-colors duration-150"
              >
                Our philosophies.
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-[#424242] text-[1.25rem] font-medium mb-2.5">
              The Zerodha universe
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h3 className="text-[#424242] text-[1.25rem] font-medium mb-2.5">
              Do better with money
            </h3>
            <p className="text-slate-500 text-[15px] leading-relaxed font-normal">
              With initiatives like{" "}
              <a
                href="#nudge"
                className="text-[#387ed1] hover:text-[#2e74d6] hover:underline transition-colors duration-150"
              >
                Nudge
              </a>{" "}
              and{" "}
              <a
                href="#killswitch"
                className="text-[#387ed1] hover:text-[#2e74d6] hover:underline transition-colors duration-150"
              >
                Kill Switch
              </a>
              , we don't just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Orbit Visualizer */}
      <div className="lg:col-span-7 flex flex-col items-center">
        {/* The Orbit Arena */}
        <div className="relative w-full max-w-[480px] h-[480px] flex items-center justify-center select-none">
          {/* Concentric Circles Background SVG */}
          <svg className="absolute w-full h-full inset-0 pointer-events-none text-slate-100/80" viewBox="0 0 480 480" fill="none">
            {/* Outer Orbit */}
            <circle cx="240" cy="240" r="215" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" className="animate-spin-slow-outer origin-center" />
            {/* Middle Orbit */}
            <circle cx="240" cy="240" r="145" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" className="animate-spin-slow-middle origin-center" />
            {/* Inner Orbit */}
            <circle cx="240" cy="240" r="80" stroke="currentColor" strokeWidth="1.2" strokeDasharray="4 6" className="animate-spin-slow-inner origin-center" />
          </svg>

          {/* Startup Product Cards */}
          {startupCards.map((card) => (
            <div
              key={card.name}
              className={`absolute ${card.position} bg-white shadow-md shadow-slate-100/50 border border-slate-100/70 rounded-[5px] flex flex-col items-center justify-center transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 hover:border-slate-200/90 cursor-pointer overflow-hidden z-10 group`}
            >
              {/* Category Pill Tag if present */}
              {card.category && (
                <div className="text-[9px] text-slate-400 font-semibold tracking-wider bg-slate-50 border-b border-slate-100/60 px-3.5 py-1 w-full text-center select-none uppercase">
                  {card.category}
                </div>
              )}
              {/* Logo / Content Body */}
              <div className="py-2.5 px-4 flex items-center justify-center min-h-[44px]">
                {card.logo}
              </div>
            </div>
          ))}
        </div>

        {/* Orbit Arena Links */}
        <div className="mt-8 flex flex-wrap gap-8 justify-center items-center text-[16px]">
          <a href="#products" className="text-[#387ed1] hover:text-[#2e74d6] hover:underline font-medium flex items-center transition-all duration-150 group">
            Explore our products
            <span className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
          <a href="#demo" className="text-[#387ed1] hover:text-[#2e74d6] hover:underline font-medium flex items-center transition-all duration-150 group">
            Try Kite demo
            <span className="ml-1.5 transform transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Ecosystem;