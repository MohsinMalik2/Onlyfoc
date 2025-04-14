import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-base-50 dark:bg-base-800 py-16 px-6 rounded-lg shadow-md">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-base-900 dark:text-base-100 mb-6">Privacy Policy</h1>
        <p className="text-base-600 dark:text-base-300 mb-4">
          At <strong>OnlyFoc</strong>, your privacy is our priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">1. Information We Collect</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          We may collect the following types of information:
        </p>
        <ul className="list-disc list-inside text-base-600 dark:text-base-300 mb-4">
          <li>Personal information you provide, such as your name, email address, and contact details.</li>
          <li>Usage data, including your interactions with our website and services.</li>
          <li>Technical data, such as your IP address, browser type, and operating system.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">2. How We Use Your Information</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          We use your information to:
        </p>
        <ul className="list-disc list-inside text-base-600 dark:text-base-300 mb-4">
          <li>Provide and improve our services.</li>
          <li>Respond to your inquiries and support requests.</li>
          <li>Send you updates, notifications, and promotional materials (if you opt-in).</li>
          <li>Analyze website usage to enhance user experience.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">3. How We Protect Your Information</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">4. Sharing Your Information</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          We do not sell or rent your personal information to third parties. We may share your information with trusted partners to provide services on our behalf, but only under strict confidentiality agreements.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">5. Your Rights</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          You have the right to:
        </p>
        <ul className="list-disc list-inside text-base-600 dark:text-base-300 mb-4">
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections to your personal information.</li>
          <li>Request the deletion of your personal information.</li>
          <li>Opt-out of receiving promotional communications.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">6. Changes to This Privacy Policy</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">7. Contact Us</h2>
        <p className="text-base-600 dark:text-base-300">
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <p className="text-base-600 dark:text-base-300 mt-2">
          Email: <a href="mailto:support@onlyfoc.com" className="text-primary-500 hover:underline">support@onlyfoc.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;