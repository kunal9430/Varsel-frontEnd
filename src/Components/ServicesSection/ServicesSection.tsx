import React from 'react';
import { servicesData } from '../../Data/servicesData';
import ServiceCard from './ServiceCard';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-12 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-gray-100">
          Our Services
        </h2>
        <p className="text-sm sm:text-base text-gray-400 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          From implementation to ongoing support, we provide comprehensive Dynamics 365 services tailored to your business needs.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} data={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;