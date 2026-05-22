import React from "react";
import "../style/Frontpage.css";
import Navbar from "./Navbar";
import Ecosystem from "./frontPageComponents/Ecosystem";
import Articles from "./frontPageComponents/Articles";
import Pricing from "./frontPageComponents/Pricing";
import OpenAccount from "./frontPageComponents/OpenAccount";
import Footer from "./Footer";

function Frontpage() {
  return (
    <div className="bg-white min-h-screen w-full font-sans antialiased text-slate-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="mx-auto flex max-w-7xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
          {/* Hero Image Section */}
          <div className="w-full max-w-[850px] mb-14 animate-fade-in">
            <img
              src="./landing.svg"
              alt="Zerodha Platform Interface"
              className="w-full h-auto select-none"
              draggable="false"
            />
          </div>

          {/* Hero Content Section */}
          <div className="flex flex-col items-center text-center max-w-3xl mb-24">
            <h1 className="text-[2.5rem] sm:text-[2.75rem] font-medium text-[#424242] leading-tight mb-4 tracking-tight">
              Invest in everything
            </h1>
            <p className="text-[1.125rem] sm:text-[1.25rem] text-[#424242] font-normal leading-relaxed mb-10 max-w-2xl">
              Online platform to invest in stocks, derivatives, mutual funds,
              ETFs, bonds, and more.
            </p>
            <a
              href="/create"
              className="inline-block bg-[#387ed1] hover:bg-[#2e74d6] text-white text-[1rem] sm:text-[1.125rem] font-medium py-2.5 px-8 rounded-[3px] transition-all duration-200 hover:shadow-lg shadow-sm active:scale-[0.98] select-none"
            >
              Sign up for free
            </a>
          </div>

          {/* Ecosystem Section ("Trust with confidence") */}
          <Ecosystem />

          {/* Grayscale Press Publications Banner */}
          <Articles />

          {/* Unbeatable Pricing Section */}
          <Pricing />

          {/* Open Account CTA Section */}
          <OpenAccount />
        </main>
      </div>

      {/* High-fidelity Global Footer */}
      <Footer />
    </div>
  );
}

export default Frontpage;
