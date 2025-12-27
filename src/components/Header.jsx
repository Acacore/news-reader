import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#2c354f] shadow-lg sticky top-0 z-50 transition-all duration-300"> {/* Dark navy-ish background */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white text-2xl font-bold">N</span>
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">AcaNews</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/business">Business</NavLink>
            <NavLink to="/sports">Sports</NavLink>
            <NavLink to="/entertainment">Entertainment</NavLink>
          </nav>

          {/* Mobile menu button - WHITE lines */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (          
                // White X icon when open
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // White hamburger icon (thicker & cleaner look)
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-4 space-y-1 bg-[#2e3650] border-t border-indigo-900/30">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink to="/technology" onClick={() => setIsOpen(false)}>
            Technology
          </MobileNavLink>
          <MobileNavLink to="/business" onClick={() => setIsOpen(false)}>
            Business
          </MobileNavLink>
          <MobileNavLink to="/sports" onClick={() => setIsOpen(false)}>
            Sports
          </MobileNavLink>
          <MobileNavLink to="/entertainment" onClick={() => setIsOpen(false)}>
            Entertainment
          </MobileNavLink>
        </div>
      </div>
    </header>
  );
}

// Reusable components (unchanged)
function NavLink({ to, children }) {
  return (
    <Link
      to={to}
      className="text-gray-200 hover:text-white font-medium transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-4 py-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}