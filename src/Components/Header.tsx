// Header.tsx
import React, { useState, useEffect } from 'react';
import { CompanyLogo } from '../assets/Images/Logos/companyLogo';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    // Close the mobile menu immediately
    setIsMobileMenuOpen(false);

    // Delay the scroll to allow the mobile menu's collapse animation to finish
    // The delay (400ms) should be slightly longer than the CSS transition duration (300ms)
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 400); // Adjust this value if your transition duration changes
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const nav = document.querySelector('nav');
      const hamburger = document.querySelector('.hamburger-menu');
      
      if (nav && hamburger && 
          !nav.contains(event.target as Node) && 
          !hamburger.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="bg-[#1C1C1C] sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => scrollToSection('home')}
          className="flex items-center space-x-3 cursor-pointer"
        >
          <CompanyLogo />
          <span className={`text-xl md:text-2xl font-bold text-gray-100 transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-0 md:opacity-100' : 'opacity-100'
          }`}>
            Think ERP Solutions
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8">
          {['solutions', 'about', 'services', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-[#2563EB] font-medium transition-colors duration-300 cursor-pointer capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden hamburger-menu p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <span className={`block h-0.5 w-6 bg-gray-300 transition-transform duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
            }`}></span>
            <span className={`block h-0.5 w-6 bg-gray-300 transition-opacity duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`block h-0.5 w-6 bg-gray-300 transition-transform duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
            }`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-[#1C1C1C] transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <nav className="container mx-auto px-4 pb-4 flex flex-col space-y-3">
          {['solutions', 'about', 'services', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-[#2563EB] font-medium transition-colors duration-300 cursor-pointer capitalize py-2 text-left"
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;