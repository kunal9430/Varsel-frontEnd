import React, { useEffect, useRef, type ChangeEvent, type FormEvent } from 'react';
import {
  UserIcon,
  EmailIcon,
  MessageIcon,
  PhoneIcon,
  BuildingIcon,
  CalendarIcon,
  AnimateSpin,
  DropDownIcon,
} from '../../assets/Icons/contactUsIcons';

interface ContactFormPanelProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    company: string;
    timeline: string;
    message: string;
  };
  handleInputChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  handleSubmit: (e: FormEvent) => void;
  isSubmitting: boolean;
}

const ContactFormPanel: React.FC<ContactFormPanelProps> = ({
  formData,
  handleInputChange,
  handleSubmit,
  isSubmitting,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const handleAutofill = (e: AnimationEvent) => {
      if (e.animationName === 'onAutoFillStart') {
        const target = e.target as HTMLInputElement;
        const event = {
          target: { name: target.name, value: target.value }
        } as unknown as ChangeEvent<HTMLInputElement>;
        
        handleInputChange(event);
      }
    };

    form.addEventListener('animationstart', handleAutofill);

    return () => {
      form.removeEventListener('animationstart', handleAutofill);
    };
  }, [handleInputChange]);

  return (
    <div className="lg:w-3/5 bg-[#1C1C1C] text-gray-100 p-8 rounded-xl shadow-2xl">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="input-group">
            <div className="flex items-center pointer-events-none">
              <UserIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="p-3 rounded-lg focus:ring-2 focus:ring-[#2563EB] transition-colors duration-200"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Email Input */}
          <div className="input-group">
            <div className="flex items-center pointer-events-none">
              <EmailIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="p-3 rounded-lg focus:ring-2 focus:ring-[#2563EB] transition-colors duration-200"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Phone Input */}
          <div className="input-group">
            <div className="flex items-center pointer-events-none">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone Number"
              className="p-3 rounded-lg focus:ring-2 focus:ring-[#2563EB] transition-colors duration-200"
              disabled={isSubmitting}
            />
          </div>

          {/* Company Input */}
          <div className="input-group">
            <div className="flex items-center pointer-events-none">
              <BuildingIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="Your Company"
              className="p-3 rounded-lg focus:ring-2 focus:ring-[#2563EB] transition-colors duration-200"
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Timeline Select */}
        <div className="input-group">
          <div className="flex items-center pointer-events-none">
            <CalendarIcon className="h-5 w-5 text-gray-400" />
          </div>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleInputChange}
            className="p-3 rounded-lg appearance-none focus:ring-2 focus:ring-[#2563EB] transition-colors duration-200"
            disabled={isSubmitting}
          >
            <option value="">Project Timeline</option>
            <option value="ASAP">ASAP</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <DropDownIcon />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="input-group">
          <div className="flex items-center pointer-events-none">
            <MessageIcon className="h-5 w-5 text-gray-400" />
          </div>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Briefly describe your ERP needs and your availability for a consultation."
            className="p-3 rounded-lg focus:ring-2 focus:ring-[#2563EB] transition-colors duration-200"
            required
            disabled={isSubmitting}
          />
        </div>

        <p className="text-xs text-gray-500 text-center">
          You agree to receive email communication from us by submitting this form.
        </p>

        <button
          id="submit-btn"
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#2563EB] text-white font-bold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 hover:shadow-lg"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <AnimateSpin />
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactFormPanel;