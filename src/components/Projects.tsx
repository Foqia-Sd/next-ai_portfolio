import React from 'react';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      image: '/images/project1.png',
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce site with payment gateway integration.'
    },
    {
      image: '/images/project2.png',
      title: 'Real Estate Website',
      description: 'A real estate website to showcase properties and facilitate client interactions.',
    },
    {
      image: '/images/project3.png',
      title: 'Blog Management App',
      description: 'A blog management app to help users organize posts and collaborate with teams.',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-[#00BFFF]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-[#1a202c] rounded-lg overflow-hidden group">
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href="#" className="inline-block bg-[#00BFFF] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#009AC1] transition duration-300">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
