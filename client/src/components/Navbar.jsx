import React, { useState, useEffect, useRef } from 'react'

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const menuRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    window.addEventListener('click', handleClickOutside)
    return () => window.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white border-gray-200 shadow-sm fixed w-full z-10 top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-600 left-0">ZERODHA</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About</a>

            <div className="relative" ref={menuRef}>
              <button
                onClick={() => setProductsOpen(p => !p)}
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
                className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
                aria-expanded={productsOpen}
                aria-haspopup="true"
              >
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {productsOpen && (
                <div
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute left-0 top-full mt-3 w-[760px] bg-white shadow-lg border rounded-md p-6 z-20"
                >
                  <div className="grid grid-cols-4 gap-6">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-3">Products</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="font-medium">Kite</li>
                        <li>Kite Connect</li>
                        <li>Console</li>
                        <li>Coin</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-3">Utilities</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>Calculators</li>
                        <li>Brokerage calculator</li>
                        <li>Margin calculator</li>
                        <li>SIP calculator</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-3">Updates</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>Z-Connect blog</li>
                        <li>Circulars / Bulletin</li>
                        <li>Markets</li>
                        <li>IPOs</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-500 mb-3">Education</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>Varsity</li>
                        <li>Trading Q&A</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Support</a>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <a href="#" className="px-4 py-1 text-sm bg-blue-600 text-white rounded">Signup</a>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setMobileOpen(v => !v)}
                aria-label="Toggle menu"
                className="p-2 inline-flex items-center justify-center rounded-md text-gray-700 hover:bg-gray-100"
              >
                {mobileOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <a href="#" className="block text-gray-700">Home</a>
            <a href="#" className="block text-gray-700">About</a>
            <button onClick={() => setProductsOpen(p => !p)} className="w-full text-left flex items-center justify-between text-gray-700">
              <span>Products</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div className="pl-4 pt-2 space-y-2">
                <a className="block text-gray-700">Kite</a>
                <a className="block text-gray-700">Console</a>
                <a className="block text-gray-700">Kite Connect</a>
                <a className="block text-gray-700">Coin</a>
              </div>
            )}

            <a href="#" className="block text-gray-700">Pricing</a>
            <a href="#" className="block text-gray-700">Support</a>
            <a href="#" className="block text-blue-600 font-medium">Signup</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar