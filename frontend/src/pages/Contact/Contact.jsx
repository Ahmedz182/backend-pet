import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            <span className="font-semibold">Name:</span>
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            <span className="font-semibold">Email:</span>
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            <span className="font-semibold">Message:</span>
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Type Your Message Here"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-green rounded-xl w-full px-40 py-2 text-white font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95">
              <span className="font-semibold">Submit:</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
