
const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-white-gradient">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 animate-slide-up">
            About <span className="italic text-gold">Coursenovate</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl font-poppins">
            We're not just course creators. We're <span className="italic">strategic partners</span> in your knowledge business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-gold/30">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto transform transition-all duration-500 group-hover:bg-gold/30">
              <span className="text-gold text-3xl font-playfair font-bold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-center">
              Our <span className="italic text-gold">Mission</span>
            </h3>
            <p className="text-gray-700 font-poppins text-center">
              To transform expert knowledge into accessible, engaging, and profitable online courses that scale your impact without scaling your time commitment.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-gold/30">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto">
              <span className="text-gold text-3xl font-playfair font-bold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-center">
              Our <span className="italic text-gold">Expertise</span>
            </h3>
            <p className="text-gray-700 font-poppins text-center">
              We blend instructional design, marketing strategy, and technology expertise to create courses that don't just teach—they transform and sell.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:border-gold/30">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 mx-auto">
              <span className="text-gold text-3xl font-playfair font-bold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-center">
              Our <span className="italic text-gold">Promise</span>
            </h3>
            <p className="text-gray-700 font-poppins text-center">
              A thoughtfully designed course that represents your expertise, engages your students, and creates sustainable revenue for your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
