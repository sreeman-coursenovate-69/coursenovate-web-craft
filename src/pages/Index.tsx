
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

    return () => {
      // Remove the class when the component unmounts
      document.body.classList.remove('animate-fade-in');
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
