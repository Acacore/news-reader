// src/pages/TermsOfService.jsx
import React from 'react'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold  text-[#0a0f4a] mb-8 text-center !text-[#0a0f4a]">Terms of Service</h1>
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last updated: December 17, 2025</p>
          <p className="mb-6">
            Welcome to AcaNews. By using our website, you agree to these Terms of Service.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Use of Service</h2>
          <p className="mb-6">
          AcaNews provides news aggregation services for personal, non-commercial use. You may not reproduce, distribute, or create derivative works from our content without permission.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Content</h2>
          <p className="mb-6">
            All news articles are sourced from third-party providers. We do not create or endorse the content and are not responsible for its accuracy.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Limitation of Liability</h2>
          <p className="mb-6">
          AcaNews is provided "as is" without warranties. We are not liable for any damages arising from use of our service.
          </p>
          <p className="font-semibold text-gray-800 mt-8">
            Questions? Contact us at legalacanews@example.com
          </p>
        </div>
      </div>
    </div>
  );
}