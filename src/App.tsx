import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import AboutSection from "./Components/AboutSection/AboutSection";
import ContactSection from "./Components/ContactSection/ContactSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ServicesSection from "./Components/ServicesSection/ServicesSection";
import SolutionsSection from "./Components/SolutionsSection";
import SuccessModal from './Components/ContactSection/SuccessModal';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    timeline: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://varcel-back-end.vercel.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
        mode: 'no-cors', 
      });

      if (response.ok) {
        setShowModal(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          timeline: '',
          message: '',
        });
      } else {
        const error = await response.json();
        alert(`Failed to send message: ${error.message || 'Unknown error'}`);
      }
    } catch (error: any) {
      alert(`An error occurred: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const updateScrollPadding = () => {
      const header = document.querySelector('header');
      if (header) {
        const headerHeight = header.offsetHeight;
        document.documentElement.style.scrollPaddingTop = `${headerHeight}px`;
      }
    };

    updateScrollPadding();
    
    window.addEventListener('resize', updateScrollPadding);
    window.addEventListener('load', updateScrollPadding);
    
    return () => {
      window.removeEventListener('resize', updateScrollPadding);
      window.removeEventListener('load', updateScrollPadding);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SolutionsSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isSubmitting={isSubmitting}
        />
        <Footer />
      </main>
      <SuccessModal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}

export default App;
