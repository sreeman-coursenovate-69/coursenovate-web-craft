
import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const Booking = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30mins"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  return (
    <section id="booking" className="py-20 bg-white-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-start items-center gap-10">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 w-full text-left lg:pr-8">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 animate-slide-up">
              Book a <span className="italic text-gold">Strategy Call</span>
            </h2>
            <div className="w-20 h-1 bg-gold mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 font-poppins mb-8">
              Ready to explore how we can transform your expertise into a premium online course? 
              Schedule a complimentary strategy call with our team.
            </p>
            
            {/* Alternative direct booking button for mobile */}
            <div className="mt-8 lg:mt-16 block lg:hidden">
              <Button 
                className="bg-gold hover:bg-darkGold text-white text-lg px-8 py-5 font-poppins transform hover:scale-105 transition-all duration-300"
                onClick={() => window.open("https://cal.com/sreeman-sarathy/30mins", "_blank")}
              >
                Book Your Strategy Call Now
              </Button>
            </div>
          </div>
          
          {/* Right side - Calendar */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="aspect-w-16 aspect-h-9 h-[500px]">
                <Cal 
                  namespace="30mins"
                  calLink="sreeman-sarathy/30mins"
                  style={{width:"100%", height:"100%", overflow:"scroll"}}
                  config={{"layout":"month_view"}}
                />
              </div>
              
              {/* Alternative direct booking button for desktop */}
              <div className="text-center mt-6 hidden lg:block">
                <p className="mb-4 font-poppins text-gray-600">
                  Prefer to schedule directly?
                </p>
                <Button 
                  className="bg-gold hover:bg-darkGold text-white text-lg px-8 py-5 font-poppins transform hover:scale-105 transition-all duration-300"
                  onClick={() => window.open("https://cal.com/sreeman-sarathy/30mins", "_blank")}
                >
                  Book Your Strategy Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
