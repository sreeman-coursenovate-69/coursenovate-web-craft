
import { Button } from "@/components/ui/button";

const Booking = () => {
  return (
    <section id="booking" className="py-20 bg-white-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Book a <span className="italic text-gold">Strategy Call</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl font-poppins mb-8">
            Ready to explore how we can transform your expertise into a premium online course? 
            Schedule a complimentary strategy call with our team.
          </p>
          <div className="max-w-3xl w-full mx-auto">
            {/* Cal.com embed */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="aspect-w-16 aspect-h-9 mb-6">
                {/* This is where you'd insert the Cal.com embed code */}
                <div className="cal-embed w-full h-[600px] border border-gray-200 rounded-lg">
                  {/* Replace this with actual Cal.com embed */}
                  <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                    <p className="text-gray-500 font-poppins text-center px-4">
                      Cal.com embed would appear here. <br />
                      Please add the Cal.com embed code in the Booking component.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Alternative direct booking button */}
              <div className="text-center">
                <p className="mb-4 font-poppins text-gray-600">
                  Prefer to schedule directly?
                </p>
                <Button 
                  className="bg-gold hover:bg-darkGold text-white text-lg px-10 py-6 font-poppins"
                  onClick={() => window.open("https://cal.com/your-link-here", "_blank")}
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
