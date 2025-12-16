// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">N</span>
              </div>
              <span className="text-2xl font-bold">NewsHub</span>
            </div>
            <p className="text-gray-400">
              Your trusted source for the latest news from around the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Technology</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Business</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Sports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Entertainment</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest news delivered to your inbox.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg text-gray-900 flex-1 focus:outline-none"
              />
              <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-r-lg font-medium transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 NewsHub. All rights reserved.</p>
          <p>Powered by Acacore</p>
        </div>
      </div>
    </footer>
  )
}