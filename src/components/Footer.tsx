import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Foqia-Sd" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/foqia-siddiqui-3357152b5/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00BFFF] transition-colors">
            <FaLinkedin size={28} />
          </a>
        </div>
        <p className="text-gray-500">&copy; {new Date().getFullYear()} Foqia Siddiqui. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
