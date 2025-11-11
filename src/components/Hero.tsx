import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Hero = () => {
    return (
        <section className='relative z-10 text-center max-w-4xl mx-auto px-4 mt-26'>
            <div className="animate-fade-in">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                    <span className="text-white">Hi, I'm</span>{' '}
                    <span className="text-[#00BFFF]">
                        Foqia Siddiqui
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 font-normal animate-slide-up">
                    I help businesses grow their online presence with Agentic AI solutions
                </p>

                <div className='flex flex-col md:flex-row justify-center items-center gap-4 mt-8 animate-slide-up'>
                    <a href="#projects">
                        <button className='bg-[#00BFFF] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#009AC1] transition duration-300'>
                            View Projects
                            <IoIosArrowDown className='inline-block ml-2' />
                        </button>
                    </a>

                    <a href="https://drive.google.com/file/d/1i9_3255QI5sa-ZNnGIWKskcrX3NoFndP/view?usp=sharing">
                        <button className='bg-gray-700 text-white font-semibold py-2 px-4 rounded-md hover:bg-gray-600 transition duration-300'>
                            Download Resume
                        </button>
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Hero