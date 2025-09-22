import React, { useState, useEffect, useRef } from 'react';
import { testimonialsData } from '../../Data/aboutSectionData';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setCarouselHeights = () => {
      if (trackRef.current) {
        const slides = Array.from(trackRef.current.children) as HTMLElement[];
        
        // Reset heights for mobile responsiveness
        slides.forEach(slide => slide.style.height = 'auto');
        
        // Only set equal heights on larger screens
        if (window.innerWidth >= 768) {
          let maxHeight = 0;
          slides.forEach(slide => {
            if (slide.offsetHeight > maxHeight) maxHeight = slide.offsetHeight;
          });
          slides.forEach(slide => slide.style.height = `${maxHeight}px`);
        }
      }
    };

    setCarouselHeights();
    window.addEventListener('resize', setCarouselHeights);
    
    return () => window.removeEventListener('resize', setCarouselHeights);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <div className="w-full lg:w-1/2">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-100">What Our Clients Say</h3>
      
      <div className="carousel-container relative bg-[#1C1C1C] rounded-xl p-4 sm:p-6">
        <div 
          ref={trackRef}
          className="carousel-track flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <TestimonialCard data={testimonial} />
            </div>
          ))}
        </div>
        
        <button 
          className="carousel-btn prev absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-all duration-200"
          onClick={prevSlide}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <button 
          className="carousel-btn next absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full transition-all duration-200"
          onClick={nextSlide}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;