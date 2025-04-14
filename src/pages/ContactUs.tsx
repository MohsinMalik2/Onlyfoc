import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="bg-base-50 dark:bg-base-800 py-16 px-6 rounded-lg shadow-md">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-base-900 dark:text-base-100 mb-6">Contact Us</h1>
        <p className="text-base-600 dark:text-base-300 mb-4">
          If you have any questions, feedback, or concerns, feel free to reach out to us. We’d love to hear from you!
        </p>

        <form className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-base-700 dark:text-base-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-700 text-base-900 dark:text-base-100 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-base-700 dark:text-base-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-700 text-base-900 dark:text-base-100 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1 text-base-700 dark:text-base-300">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-3 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-base-700 text-base-900 dark:text-base-100 shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full sm:w-auto bg-primary-500 text-white py-2 px-6 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;