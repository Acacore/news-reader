// src/pages/AboutUs.jsx

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">About NewsHub</h1>
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="lead text-xl mb-6">
            AcaNews is your trusted source for the latest and most reliable news from around the world.
          </p>
          <p className="mb-6">
            Founded in 2025, our mission is to deliver accurate, unbiased, and timely news to keep you informed about what matters most. We aggregate stories from reputable sources across various categories including technology, business, sports, entertainment, and more.
          </p>
          <p className="mb-6">
            Our team is dedicated to journalistic integrity and user experience. We believe in the power of information and strive to present it in a clean, accessible, and modern format.
          </p>
          <p className="font-semibold text-gray-800">
            Thank you for choosing NewsHub as your daily news companion.
          </p>
        </div>
      </div>
    </div>
  );
}