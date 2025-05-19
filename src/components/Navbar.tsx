
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
          ? 'py-3 bg-white/80 backdrop-blur-sm shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div 
          className={`flex justify-between items-center rounded-full px-6 py-2 transition-all duration-300 bg-white ${
            isScrolled 
              ? 'border border-gold/60' 
              : 'border-2 border-gold'
          }`}
        >
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-playfair transition-transform hover:scale-105 duration-300">
              Course<span className="italic text-gold">novate</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('about')} 
              className="font-poppins font-medium hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="font-poppins font-medium hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              Our Process
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="font-poppins font-medium hover:text-gold transition-colors duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              FAQ
            </button>
          </div>
          <Button 
            onClick={() => scrollToSection('booking')}
            className="bg-gold hover:bg-darkGold text-white font-medium font-poppins transform hover:scale-105 transition-all duration-300"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
