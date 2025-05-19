
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Process from "@/components/Process";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
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
