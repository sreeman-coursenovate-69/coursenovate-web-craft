
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 bg-black-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-white leading-tight mb-6">
              Transform Your <span className="italic text-gold">Knowledge</span> Into Premium <span className="italic text-gold">Courses</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-poppins mb-10 max-w-xl">
              At <span className="italic">Coursenovate</span>, we help experts like you turn valuable insights into scalable, high-impact online courses. Your expertise deserves a wider audience.
            </p>
            <Button 
              onClick={scrollToBooking}
              className="bg-gold hover:bg-darkGold text-white text-lg px-10 py-6 font-poppins"
            >
              Book a Strategy Call
            </Button>
          </div>
          <div className="lg:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 bg-gold/20 rounded-2xl -rotate-6"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <h2 className="text-2xl font-bold font-playfair mb-4">
                  We <span className="italic text-gold">Craft</span> Courses That:
                </h2>
                <ul className="space-y-4 font-poppins">
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Generate <span className="italic font-medium">consistent revenue</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Establish your <span className="italic font-medium">authority</span> in your field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold mr-3 text-xl">✓</span>
                    <span>Scale your <span className="italic font-medium">impact</span> without scaling your time</span>
                  </li>
                  <li className="flex items-start">
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
