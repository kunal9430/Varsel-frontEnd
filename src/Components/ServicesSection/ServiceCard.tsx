import React from 'react';
import type { ServiceData } from '../../Data/servicesData';

interface ServiceCardProps {
  data: ServiceData;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
  const IconComponent = data.icon;
  
  return (
    <div className="p-4 sm:p-6 rounded-xl shadow-md bg-gray-900 service-card hover:scale-105 transition-transform duration-300">
      <div className="flex justify-center mb-3 sm:mb-4">
        <div className={`${data.bgColor} p-3 rounded-full`}>
          <IconComponent className={`h-10 w-10 sm:h-12 sm:w-12 ${data.iconColor} solution-icon`} />
        </div>
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
        {data.title}
      </h3>
      <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
        {data.description}
      </p>
      <ul className="space-y-2">
        {data.features.map((feature, index) => (
          <li key={index} className="flex items-start text-sm sm:text-base text-gray-300 leading-relaxed">
            <svg className="w-4 h-4 mt-0.5 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;