import React from 'react';
import { CheckIcon, PhoneIcon, EmailIcon } from '../../assets/Icons/contactUsIcons';
import { CompanyLogo } from '../../assets/Images/Logos/companyLogo';

const ContactInfoPanel: React.FC = () => {
  return (
    <div className="lg:w-2/5 w-full bg-[#1C1C1C] p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col justify-between">
      <div className="flex-grow">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <CompanyLogo />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">Why Partner With Us?</h3>
          <p className="text-gray-400 text-sm sm:text-base">Experience and excellence you can trust.</p>
        </div>

        <div className="mb-8 p-4 bg-[#2A2A2A] rounded-lg space-y-3">
          <div className="flex items-center">
            <EmailIcon className="w-5 h-5 text-[#2563EB] mr-3" />
            <a href="mailto:contact@yourcompany.com" className="text-gray-300 hover:text-[#2563EB] transition-colors">
              kunalkumarh2003@gmail.com
            </a>
          </div>
          <div className="flex items-center">
            <PhoneIcon className="w-5 h-5 text-[#2563EB] mr-3" />
            <a href="tel:+91-8979327756" className="text-gray-300 hover:text-[#2563EB] transition-colors">
              (+91) 8797327756
            </a>
          </div>
        </div>

        {/* Existing Benefits List */}
        <div className="border-t border-gray-700 pt-6 mt-6">
          <h4 className="text-lg font-semibold text-gray-100 mb-4">What You'll Receive:</h4>
          <ul className="space-y-3">
            <li className="flex items-center text-gray-300">
              <CheckIcon className="w-5 h-5 text-[#2563EB] mr-3 flex-shrink-0" />
              <span className="text-sm">Personalized free consultation & project estimate</span>
            </li>
            <li className="flex items-center text-gray-300">
              <CheckIcon className="w-5 h-5 text-[#2563EB] mr-3 flex-shrink-0" />
              <span className="text-sm">Transparent, no-obligation quotes</span>
            </li>
            <li className="flex items-center text-gray-300">
              <CheckIcon className="w-5 h-5 text-[#2563EB] mr-3 flex-shrink-0" />
              <span className="text-sm">Prompt response within 24 hours</span>
            </li>
            <li className="flex items-center text-gray-300">
              <CheckIcon className="w-5 h-5 text-[#2563EB] mr-3 flex-shrink-0" />
              <span className="text-sm">Dedicated support and maintenance post-launch</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoPanel;