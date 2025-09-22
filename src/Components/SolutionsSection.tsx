import React from 'react';
import { solutionsData } from '../Data/solutionsData';

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-gray-100">
          Our Dynamics 365 Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {solutionsData.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={solution.id}
                className="p-4 sm:p-6 rounded-xl shadow-md bg-gray-900 service-card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <IconComponent className={`h-10 w-10 sm:h-12 sm:w-12 ${solution.color} solution-icon`} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
                  {solution.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                  {solution.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;