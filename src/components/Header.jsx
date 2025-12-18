import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">N</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">AcaNews</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Home
            </Link>
            <Link to="/technology" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Technology
            </Link>
            <Link to="/business" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Business
            </Link>
            <Link to="/sports" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Sports
            </Link>
            <Link to="/entertainment" className="text-gray-700 hover:text-indigo-600 font-medium transition">
              Entertainment
            </Link>
          </nav>

          {/* Mobile menu button (optional — you can add mobile menu later) */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-indigo-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}