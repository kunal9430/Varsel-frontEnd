import React, { useEffect, useRef } from 'react';
import type { SlidingBoxData } from '../../Data/aboutSectionData';

interface SlidingInfoBoxProps {
  data: SlidingBoxData;
  index: number;
}

const SlidingInfoBox: React.FC<SlidingInfoBoxProps> = ({ data, index }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={boxRef}
      className="sliding-box p-4 sm:p-6"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <h4 className={`text-lg sm:text-xl font-semibold mb-2 ${data.color}`}>
        {data.title}
      </h4>
      <p className="text-sm sm:text-base text-gray-400">
        {data.description}
      </p>
    </div>
  );
};

export default SlidingInfoBox;