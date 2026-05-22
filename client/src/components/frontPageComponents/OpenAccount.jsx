import React from "react";

function OpenAccount() {
  return (
    <section className="w-full max-w-[1100px] flex flex-col items-center text-center py-20 border-t border-slate-100/70 mt-4 animate-fade-in font-sans">
      <h2 className="text-[2rem] sm:text-[2.25rem] font-medium text-[#424242] leading-tight mb-4 tracking-tight">
        Open a Zerodha account
      </h2>
      <p className="text-[1rem] sm:text-[1.05rem] text-[#666666] font-normal leading-relaxed mb-8 max-w-2xl">
        Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
      </p>
      <a
        href="/create"
        className="inline-block bg-[#387ed1] hover:bg-[#2e74d6] text-white text-[1rem] font-medium py-2.5 px-8 rounded-[3px] transition-all duration-200 hover:shadow-lg shadow-sm active:scale-[0.98] select-none"
      >
        Sign up for free
      </a>
    </section>
  );
}

export default OpenAccount;
