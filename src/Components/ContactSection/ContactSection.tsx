import React from 'react';
import ContactInfoPanel from './ContactInfoPanel';
import ContactFormPanel from './ContactFormPanel';

interface ContactSectionProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    timeline: string;
    message: string;
  };
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
}

const ContactSection: React.FC<ContactSectionProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
}) => {
  return (
    <>
      <section id="contact" className="py-16 md:py-24 relative overflow-hidden contact-section">
        <div className="contact-content container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-100">Let's Discuss Your ERP Needs</h2>
            <p className="text-base sm:text-lg mb-8 text-gray-400">
              Ready to take your business to the next level? Fill out the form below to schedule a free consultation.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
            <ContactInfoPanel />
            <ContactFormPanel
              formData={formData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              isSubmitting={isSubmitting}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;