import React from 'react';
import type { TestimonialData } from '../../Data/aboutSectionData';

interface TestimonialCardProps {
  data: TestimonialData;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ data }) => {
  return (
    <div className="testimonial-card w-full flex-shrink-0 p-4 sm:p-6">
      <div className="testimonial-text mb-4 sm:mb-6">
        <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
          {data.text}
        </p>
      </div>
      
      {/* Updated author section with better class structure */}
      <div className="testimonial-author flex items-center">
        <div className={`testimonial-image ${data.bgColor} w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-white font-bold text-sm sm:text-base rounded-full`}>
          {data.initials}
        </div>
        <div className="testimonial-info ml-3 sm:ml-4">
          <h4 className="font-semibold text-gray-100 text-sm sm:text-base">
            {data.author}
          </h4>
          <p className="text-gray-400 text-xs sm:text-sm">
            {data.position}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;