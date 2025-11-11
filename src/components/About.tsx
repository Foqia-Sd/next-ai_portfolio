import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-36 px-4 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          About <span className="text-[#00BFFF]">Me</span>
        </h2>
        
        <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
          I am a dedicated and innovative software engineer with a passion for crafting impactful digital solutions. My expertise spans full-stack development, specializing in modern web technologies and scalable architectures. I thrive on transforming complex challenges into elegant, user-friendly applications that drive business growth and enhance user experiences.
        </p>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">React</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">Next.js</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">TypeScript</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">Node.js</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">Tailwind CSS</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">AI Integration</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">Cloud Platforms</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">Database Management</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">OpenAI Agents SDK</span>
          <span className="bg-gray-700 text-white text-sm font-semibold px-3 py-1 rounded-full">AI Driven Development</span>
        </div>
      </div>
    </section>
  );
};

export default About;
