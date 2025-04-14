import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-base-50 dark:bg-base-800 py-16 px-6 rounded-lg shadow-md">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-base-900 dark:text-base-100 mb-6">Terms of Service</h1>
        <p className="text-base-600 dark:text-base-300 mb-4">
          Welcome to <strong>OnlyFoc</strong>. By using our website, you agree to the following terms and conditions. Please read them carefully.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">1. Use of the Platform</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          <strong>OnlyFoc</strong> is a frontend-only platform designed to help users manage their time and productivity. All data is stored locally on your device, and we do not collect or store any personal information on our servers.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">2. User Responsibilities</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          By using our platform, you agree to:
        </p>
        <ul className="list-disc list-inside text-base-600 dark:text-base-300 mb-4">
          <li>Use the platform for lawful purposes only.</li>
          <li>Ensure that any data entered into the platform complies with applicable laws and regulations.</li>
          <li>Understand that all data is stored locally on your device and is your responsibility to manage.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">3. Disclaimer of Warranties</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          The platform is provided "as is" without any warranties, express or implied. We do not guarantee that the platform will meet your requirements or that it will be error-free or uninterrupted.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">4. Limitation of Liability</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          To the fullest extent permitted by law, <strong>OnlyFoc</strong> shall not be liable for any damages arising out of or in connection with your use of the platform. This includes, but is not limited to, direct, indirect, incidental, or consequential damages.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">5. Changes to the Terms</h2>
        <p className="text-base-600 dark:text-base-300 mb-4">
          We reserve the right to update these terms at any time. Any changes will be posted on this page with an updated "Last Updated" date. Your continued use of the platform after changes are made constitutes your acceptance of the new terms.
        </p>

        <h2 className="text-2xl font-semibold text-base-900 dark:text-base-100 mt-8 mb-4">6. Contact Us</h2>
        <p className="text-base-600 dark:text-base-300">
          If you have any questions or concerns about these Terms of Service, please contact us at:
        </p>
        <p className="text-base-600 dark:text-base-300 mt-2">
          Email: <a href="mailto:support@onlyfoc.com" className="text-primary-500 hover:underline">support@onlyfoc.com</a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;