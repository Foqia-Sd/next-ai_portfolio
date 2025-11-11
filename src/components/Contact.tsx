import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact <span className="text-[#00BFFF]">Me</span>
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-[#1a202c] border border-gray-700 rounded-md focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent outline-none transition"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-[#1a202c] border border-gray-700 rounded-md focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent outline-none transition"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full p-3 bg-[#1a202c] border border-gray-700 rounded-md focus:ring-2 focus:ring-[#00BFFF] focus:border-transparent outline-none transition"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#00BFFF] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#009AC1] transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
