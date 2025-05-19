
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`flex justify-between items-center rounded-full px-6 py-2 transition-all duration-300 ${
            isScrolled 
              ? 'border border-gold/60' 
              : 'border-2 border-gold'
          }`}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair">
              Course<span className="italic text-gold">novate</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="font-poppins font-medium hover:text-gold transition-colors">About Us</button>
            <button onClick={() => scrollToSection('process')} className="font-poppins font-medium hover:text-gold transition-colors">Our Process</button>
            <button onClick={() => scrollToSection('faq')} className="font-poppins font-medium hover:text-gold transition-colors">FAQ</button>
          </div>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-gold hover:bg-darkGold text-white font-medium font-poppins"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
