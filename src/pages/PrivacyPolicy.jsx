// src/pages/PrivacyPolicy.jsx
export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Privacy Policy</h1>
        <div className="prose prose-lg mx-auto text-gray-600">
          <p className="text-sm text-gray-500 mb-8">Last updated: December 17, 2025</p>
          <p className="mb-6">
            At NewsHub, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Information We Collect</h2>
          <p className="mb-6">
            We collect minimal information necessary to provide our service. This includes email addresses when you subscribe to our newsletter and anonymous usage data to improve user experience.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-6">
            Your email is only used to send news updates you requested. We do not sell or share your personal information with third parties for marketing purposes.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your information from unauthorized access.
          </p>
          <p className="font-semibold text-gray-800 mt-8">
            If you have any questions about this Privacy Policy, please contact us at privacy@newshub.example.com
          </p>
        </div>
      </div>
    </div>
  );
}