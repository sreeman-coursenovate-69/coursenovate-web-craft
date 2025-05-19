
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Add a class to the body when the component mounts
    document.body.classList.add('animate-fade-in');

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    return () => {
      // Remove the class when the component unmounts
      document.body.classList.remove('animate-fade-in');
      
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function(e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Process />
      <Booking />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
