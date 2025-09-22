import React from 'react';
import { SendIcon } from '../assets/Icons/HeroSectionIcons'; // Capitalized

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="grid-bg"></div>
      <div className="hero-content container mx-auto px-4 py-16 md:py-32 text-center relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-gray-100">
          <span className="text-[#2563EB]">Dynamics 365.</span><br /> 
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Streamlined. Integrated. Powerful.</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 text-gray-300 px-2 sm:px-0">
          We specialize in intelligent Microsoft Dynamics 365 solutions that streamline your operations and
          drive unparalleled growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6 px-2">
          <a href="#contact"
            className="bg-[#2563EB] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg hover:bg-blue-700 
                       transition-all duration-300 transform hover:scale-105 text-base sm:text-lg flex items-center justify-center space-x-2
                       w-full sm:w-auto">
            <span>Get Started</span>
            <SendIcon />
          </a>
          <a href="#solutions"
            className="border-2 border-[#2563EB] text-[#2563EB] px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold shadow-lg 
                       hover:bg-[#2563EB] hover:text-white transition-all duration-300 transform hover:scale-105 text-base sm:text-lg
                       w-full sm:w-auto flex items-center justify-center">
            Our Solutions
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;