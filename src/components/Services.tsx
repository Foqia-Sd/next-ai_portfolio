import React from 'react';
import { FaCode, FaRobot, FaPalette } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode size={40} className="text-[#00BFFF]" />,
      title: 'Web Development',
      description: 'Building responsive and high-performance websites and web applications.',
    },
    {
      icon: <FaRobot size={40} className="text-[#00BFFF]" />,
      title: 'Agentic AI Integrations',
      description: 'Integrating intelligent AI agents to automate and enhance your business processes.',
    },
    {
      icon: <FaPalette size={40} className="text-[#00BFFF]" />,
      title: 'UI/UX & Design Systems',
      description: 'Creating intuitive user interfaces and scalable design systems for a seamless user experience.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#00BFFF]">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a202c] p-8 rounded-lg text-center transform hover:scale-105 hover:shadow-2xl hover:shadow-[#00BFFF]/20 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
