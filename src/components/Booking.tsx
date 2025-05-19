
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
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 animate-slide-up">
            Book a <span className="italic text-gold">Strategy Call</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl font-poppins mb-8">
            Ready to explore how we can transform your expertise into a premium online course? 
            Schedule a complimentary strategy call with our team.
          </p>
          <div className="max-w-3xl w-full mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="aspect-w-16 aspect-h-9 mb-6 h-[600px]">
                <Cal 
                  namespace="30mins"
                  calLink="sreeman-sarathy/30mins"
                  style={{width:"100%", height:"100%", overflow:"scroll"}}
                  config={{"layout":"month_view"}}
                />
              </div>
              
              {/* Alternative direct booking button */}
              <div className="text-center">
                <p className="mb-4 font-poppins text-gray-600">
                  Prefer to schedule directly?
                </p>
                <Button 
                  className="bg-gold hover:bg-darkGold text-white text-lg px-10 py-6 font-poppins transform hover:scale-105 transition-all duration-300"
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
