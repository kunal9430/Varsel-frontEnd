import React, { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <div 
        className="bg-[#1C1C1C] p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl text-center max-w-xs sm:max-w-sm w-full border border-green-500"
        onClick={(e) => e.stopPropagation()}
      >
        <svg className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-100 mb-2">Message Sent!</h3>
        <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">Thank you for your inquiry. We'll connect with you soon to discuss your business needs.</p>
        <button
          onClick={onClose}
          className="w-full bg-[#2563EB] text-white font-medium sm:font-bold py-2.5 sm:py-3 text-sm sm:text-base rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;