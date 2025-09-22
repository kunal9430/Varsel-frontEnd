import React from 'react';
import { footerData } from '../Data/footerData';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0F0F0F] text-white py-6 md:py-8">
      <div className="container mx-auto px-4 text-center">
        {/* Copyright */}
        <p className="text-xs sm:text-sm md:text-base mb-4 md:mb-0">
          &copy; {footerData.copyrightText}
        </p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 md:space-x-6 mt-4 md:mt-4">
          {footerData.socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                className="hover:text-[#2563EB] transition-colors duration-300 p-1 md:p-0"
                aria-label={social.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconComponent className="h-5 w-5 md:h-6 md:w-6" />
              </a>
            );
          })}
        </div>

        {/* Contact Information */}
        <div className="mt-4 md:mt-4 text-xs text-gray-600 space-y-1 md:space-y-1">
          <p className="break-words">Director: {footerData.contactInfo.directorEmail}</p>
          <p>Company Timings: {footerData.contactInfo.companyTimings}</p>
        </div>

        {/* Website Credit */}
        <div className="mt-3 md:mt-4 text-xs text-gray-600">
          <p>{footerData.websiteBy}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;