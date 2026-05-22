import { useEffect, useRef, useState } from "react";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuWrapperRef = useRef(null);
  const handleMenuToggle = () => {
    setIsMenuOpen((current) => !current);
  };

  const navLinks = [
    { name: "Signup", href: "/create" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Pricing", href: "#pricing" },
    { name: "Support", href: "#support" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuWrapperRef.current &&
        !menuWrapperRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    const escapeListener = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", escapeListener);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", escapeListener);
    };
  }, []);

  const primaryProducts = [
    {
      name: "Kite",
      desc: "Trading platform",
      href: "#kite",
      icon: "./kite-logo.svg",
    },
    {
      name: "Console",
      desc: "Backoffice",
      href: "#console",
      icon: "./console.svg",
    },
    {
      name: "Kite Connect",
      desc: "Trading APIs",
      href: "#connect",
      icon: "./kite-connect.svg",
    },
    {
      name: "Coin",
      desc: "Mutual funds",
      href: "#coin",
      icon: "./coin.svg",
    },
  ];

  const categories = [
    {
      title: "Utilities",
      links: [
        { name: "Calculators", href: "#calculators" },
        { name: "Brokerage calculator", href: "#brokerage" },
        { name: "Margin calculator", href: "#margin" },
        { name: "SIP calculator", href: "#sip" },
      ],
    },
    {
      title: "Updates",
      links: [
        { name: "Z-Connect blog", href: "#blog" },
        { name: "Circulars / Bulletin", href: "#circulars" },
        { name: "IPOs", href: "#ipos" },
        { name: "Markets", href: "#markets" },
      ],
    },
  ];

  return (
    <nav className="w-full border-b border-[#eeeeee] bg-white sticky top-0 z-50">
      <div className="mx-auto flex h-[70px] max-w-[1100px] items-center justify-between px-6 sm:px-8 relative">
        {/* Brand Logo */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="Zerodha"
            className="h-[18px] w-auto select-none"
            draggable="false"
          />
        </a>

        {/* Navigation Links & Hamburger */}
        <div className="flex items-center gap-9 text-[14px] font-normal text-slate-600">
          <div className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#666666] hover:text-[#387ed1] transition-colors duration-150 font-sans"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hamburger Icon */}
          <div ref={menuWrapperRef} className="relative flex items-center">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-label="Open menu"
              onClick={handleMenuToggle}
              className="flex h-10 w-10 items-center justify-center text-[#424242] transition-colors hover:text-[#387ed1] focus:outline-none"
            >
              <LuMenu className="h-5 w-5 stroke-[2]" />
            </button>

            {/* Mega-Menu Dropdown */}
            {isMenuOpen && (
              <div className="absolute right-0 top-[50px] w-[90vw] sm:w-[680px] bg-white border border-[#eeeeee] shadow-2xl rounded-[4px] py-8 px-8 sm:px-10 z-50 animate-dropdown-fade-in font-sans text-left">
                {/* Row 1: Primary Products */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4 pb-8 border-b border-[#f5f5f5]">
                  {primaryProducts.map((product) => (
                    <a
                      key={product.name}
                      href={product.href}
                      className="group flex flex-col items-center text-center p-3 rounded-[4px] hover:bg-slate-50 transition-all duration-150"
                    >
                      <img
                        src={product.icon}
                        className="transform transition-transform duration-200 group-hover:scale-[1.04]"
                        alt=""
                      />
                      <span className="text-[15px] font-medium text-[#424242] group-hover:text-[#387ed1] transition-colors duration-150 mt-1">
                        {product.name}
                      </span>
                      <span className="text-[12px] text-slate-400 mt-0.5 leading-tight">
                        {product.desc}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Row 2: Secondary Directories */}
                <div className="grid grid-cols-2 gap-8 pt-8">
                  {categories.map((category) => (
                    <div key={category.title} className="flex flex-col">
                      <h3 className="text-[16px] font-medium text-[#424242] mb-4">
                        {category.title}
                      </h3>
                      <div className="flex flex-col gap-3">
                        {category.links.map((link) => (
                          <a
                            key={link.name}
                            href={link.href}
                            className="text-[14px] text-slate-500 hover:text-[#387ed1] transition-colors duration-150 w-fit"
                          >
                            {link.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
