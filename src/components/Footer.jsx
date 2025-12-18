
import { Link } from 'react-router-dom';  // ← Add this import at the top of Footer.jsx




export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-3xl font-bold">A</span>
              </div>
              <span className="text-4xl font-extrabold tracking-tight">AcaNews</span>  {/* Increased from text-3xl to text-4xl */}
            </div>
            <p className="text-gray-400 text-base leading-relaxed">  {/* Slightly larger description */}
              Your trusted source for the latest news from around the world.
            </p>
          </div>

          {/* Quick Links */}
          

<div>
  <h3 className="text-2xl font-extrabold mb-5 tracking-wide">Quick Links</h3>
  <ul className="space-y-8">  {/* Reduced from space-y-8 to space-y-4 for better spacing */}
    <li>
      <Link to="/about" className="text-gray-300 hover:text-white transition text-base">
        About Us
      </Link>
    </li>
    <li>
      <Link to="/contact" className="text-gray-300 hover:text-white transition text-base">
        Contact
      </Link>
    </li>
    <li>
      <Link to="/privacy" className="text-gray-300 hover:text-white transition text-base">
        Privacy Policy
      </Link>
    </li>
    <li>
      <Link to="/terms" className="text-gray-300 hover:text-white transition text-base">
        Terms of Service
      </Link>
    </li>
  </ul>
</div>

          {/* Categories */}
          <div>
            <h3 className="text-2xl font-extrabold mb-5 tracking-wide">Categories</h3>  {/* Increased from text-xl to text-2xl */}
            <ul className="space-y-8">
              <li><a href="#" className="text-gray-300 hover:text-white transition text-base">Technology</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition text-base">Business</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition text-base">Sports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition text-base">Entertainment</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="md:col-span-1">
            <div className="bg-gray-800/50 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>  {/* Slightly larger */}
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to get the latest news delivered to your inbox.
              </p>

              <form className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  className="w-full px-5 py-3 bg-gray-700/70 border border-gray-600 rounded-xl text-white placeholder-gray-400 
                             focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 
                             transition-all duration-300"
                  aria-label="Email for newsletter"
                />
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl 
                             shadow-md hover:shadow-lg transition-all duration-300 active:scale-98"
                >
                  Subscribe
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p className="text-base">&copy; 2025 NewsHub. All rights reserved.</p>  {/* Larger copyright */}
          <p className="mt-1 text-sm">Powered by Acacore</p>
        </div>
      </div>
    </footer>
  );
}