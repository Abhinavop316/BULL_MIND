import React from "react";
import {
  FaTwitter,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  const companyLinks = [
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Pricing", href: "#pricing" },
    { name: "Referral programme", href: "#referral" },
    { name: "Careers", href: "#careers" },
    { name: "Zerodha.tech", href: "#tech" },
    { name: "Press & media", href: "#press" },
    { name: "Zerodha Cares (CSR)", href: "#csr" },
  ];

  const supportLinks = [
    { name: "Support portal", href: "#support" },
    { name: "Z-Connect blog", href: "#blog" },
    { name: "List of charges", href: "#charges" },
    { name: "Downloads & resources", href: "#downloads" },
    { name: "Videos", href: "#videos" },
    { name: "Market overview", href: "#market-overview" },
    { name: "How to file a complaint?", href: "#file-complaint" },
    { name: "Status of your complaints", href: "#complaint-status" },
  ];

  const accountLinks = [
    { name: "Open an account", href: "/create" },
    { name: "How to open an account", href: "#how-to-open" },
    { name: "Underage account opening", href: "#underage" },
    { name: "NRI account opening", href: "#nri" },
    { name: "Corporate/Partnership account opening", href: "#corporate" },
    { name: "HUF account opening", href: "#huf" },
  ];

  const quickTerms = [
    { name: "NSE", href: "#nse" },
    { name: "BSE", href: "#bse" },
    { name: "MCX", href: "#mcx" },
    { name: "Terms & conditions", href: "#terms" },
    { name: "Privacy policy", href: "#privacy" },
    { name: "Disclosure", href: "#disclosure" },
    { name: "For investor's attention", href: "#investor-attention" },
    { name: "Investor charter", href: "#investor-charter" },
  ];

  return (
    <footer className="w-full bg-[#fbfbfb] border-t border-[#eeeeee] text-slate-500 font-sans pt-16 pb-10 mt-6 select-none">
      <div className="mx-auto max-w-[1100px] px-6 sm:px-8">
        
        {/* Main Footer Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-12">
          
          {/* Brand & Contacts */}
          <div className="flex flex-col">
            <a href="/" className="mb-5 inline-block">
              <img
                src="/logo.svg"
                alt="Zerodha"
                className="h-[18px] w-auto opacity-90 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-[13px] text-slate-400 leading-relaxed mb-4">
              © 2010 - 2026 Zerodha Broking Ltd.<br />
              All rights reserved.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex items-center gap-4 text-[#777777] text-[18px] mb-6">
              <a href="#twitter" aria-label="Twitter" className="hover:text-[#387ed1] transition-colors duration-150">
                <FaTwitter />
              </a>
              <a href="#facebook" aria-label="Facebook" className="hover:text-[#387ed1] transition-colors duration-150">
                <FaFacebookSquare />
              </a>
              <a href="#instagram" aria-label="Instagram" className="hover:text-[#387ed1] transition-colors duration-150">
                <FaInstagram />
              </a>
              <a href="#linkedin" aria-label="LinkedIn" className="hover:text-[#387ed1] transition-colors duration-150">
                <FaLinkedinIn />
              </a>
              <a href="#telegram" aria-label="Telegram" className="hover:text-[#387ed1] transition-colors duration-150">
                <FaTelegramPlane />
              </a>
              <a href="#youtube" aria-label="YouTube" className="hover:text-[#387ed1] transition-colors duration-150">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Company Column */}
          <div className="flex flex-col">
            <h3 className="text-[15px] font-medium text-[#424242] mb-4">
              Company
            </h3>
            <div className="flex flex-col gap-2.5">
              {companyLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[13px] text-slate-500 hover:text-[#387ed1] transition-colors duration-150 w-fit font-normal"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Support Column */}
          <div className="flex flex-col">
            <h3 className="text-[15px] font-medium text-[#424242] mb-4">
              Support
            </h3>
            <div className="flex flex-col gap-2.5">
              {supportLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[13px] text-slate-500 hover:text-[#387ed1] transition-colors duration-150 w-fit font-normal"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Account Column */}
          <div className="flex flex-col">
            <h3 className="text-[15px] font-medium text-[#424242] mb-4">
              Account
            </h3>
            <div className="flex flex-col gap-2.5">
              {accountLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className="text-[13px] text-slate-500 hover:text-[#387ed1] transition-colors duration-150 w-fit font-normal"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Regulatory & Disclaimers Section */}
        <div className="border-t border-slate-100 pt-8 mt-4 text-[10.5px] leading-relaxed text-slate-400 font-normal">
          
          {/* Quick Legal Directories Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
            {quickTerms.map((term, idx) => (
              <a
                key={idx}
                href={term.href}
                className="text-slate-400 hover:text-[#387ed1] transition-colors font-medium text-[11px]"
              >
                {term.name}
              </a>
            ))}
          </div>

          {/* Corporate / Licensing Info */}
          <p className="mb-4">
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 | CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 | Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 | Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="mailto:complaints@zerodha.com" className="text-[#387ed1] hover:underline">complaints@zerodha.com</a>, for DP write to <a href="mailto:dpcomplaints@zerodha.com" className="text-[#387ed1] hover:underline">dpcomplaints@zerodha.com</a>.
          </p>

          {/* SCORES / KYC Disclosures */}
          <p className="mb-4">
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances.
          </p>

          <p className="mb-4">
            Attention Investors: Prevent unauthorized transactions in your trading/demat account. Update your mobile numbers/email IDs with your stock brokers/depository participant. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary.
          </p>

          {/* Risk Disclaimer */}
          <p className="border-t border-slate-100/60 pt-4 text-slate-400/90 italic">
            Disclaimer: Stock investing and trading in securities markets are subject to market risks, read all the related documents carefully before investing. Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
