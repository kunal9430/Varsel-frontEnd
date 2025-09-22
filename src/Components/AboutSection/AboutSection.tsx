import React from 'react';
import { statsData, slidingBoxesData } from '../../Data/aboutSectionData';
import StatsCard from './StatsCard';
import SlidingInfoBox from './SlidingInfoBox';
import TestimonialCarousel from './TestimonialCarousel';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 text-center text-gray-100">
          About Us
        </h2>
        <p className="text-base sm:text-lg text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto text-center px-2">
          With years of experience and hundreds of successful implementations, we're the trusted partner for businesses seeking to transform their operations.
        </p>
        
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          {statsData.map((stat) => (
            <StatsCard key={stat.id} data={stat} />
          ))}
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="lg:w-1/2">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">
              Why Choose Think ERP?
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {slidingBoxesData.map((box, index) => (
                <SlidingInfoBox key={box.id} data={box} index={index} />
              ))}
            </div>
          </div>
          
          <TestimonialCarousel />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;