// src/pages/Contact.jsx

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Contact Us</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="prose prose-lg text-gray-600">
            <p className="text-xl mb-6">
              We'd love to hear from you!
            </p>
            <p className="mb-6">
              Whether you have feedback, suggestions, or questions about our content, feel free to reach out.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex items-center space-x-3">
                <span className="font-semibold">Email:</span>
                <a href="mailto:contact@newshub.example.com" className="text-indigo-600 hover:underline">
                  contact@newshub.example.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-semibold">Support:</span>
                <a href="mailto:support@newshub.example.com" className="text-indigo-600 hover:underline">
                  support@newshub.example.com
                </a>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
            <form className="space-y-6">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
              <textarea rows="5" placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
              <button type="submit" className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}