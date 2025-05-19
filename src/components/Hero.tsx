
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 min-h-screen flex items-center bg-black-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div 
            className={`lg:w-1/2 mb-12 lg:mb-0 transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white leading-tight mb-6">
              Transform Your <span className="italic text-gold">Knowledge</span> Into Premium <span className="italic text-gold">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-poppins mb-10 max-w-xl">
              At <span className="italic">Coursenovate</span>, we help experts like you turn valuable insights into scalable, high-impact online courses. Your expertise deserves a wider audience.
            </p>
            <Button 
              onClick={scrollToBooking}
              className="bg-gold hover:bg-darkGold text-white text-lg px-10 py-6 font-poppins transform hover:scale-105 transition-all duration-300"
            >
              Book a Strategy Call
            </Button>
          </div>
          <div 
            className={`lg:w-2/5 transform transition-all duration-700 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-2xl -rotate-6 transform hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl transform hover:-translate-y-2 transition-all duration-500">
                <h2 className="text-2xl font-bold font-playfair mb-4">
                  We <span className="italic text-gold">Craft</span> Courses That:
                </h2>
                <ul className="space-y-4 font-poppins">
                  <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Generate <span className="italic font-medium">consistent revenue</span></span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Establish your <span className="italic font-medium">authority</span> in your field</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Scale your <span className="italic font-medium">impact</span> without scaling your time</span>
                  </li>
                  <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Create <span className="italic font-medium">transformative</span> experiences for students</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
