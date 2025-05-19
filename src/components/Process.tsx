
const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description: "We dive deep into your expertise, audience, and goals to create a strategic course roadmap that aligns with your business objectives."
    },
    {
      number: "02",
      title: "Content Architecture",
      description: "We structure your knowledge into a compelling learning journey, organizing modules and lessons for maximum impact and student transformation."
    },
    {
      number: "03",
      title: "Engaging Production",
      description: "Our team handles the creation of professional videos, worksheets, quizzes, and interactive elements that bring your course to life."
    },
    {
      number: "04",
      title: "Platform Integration",
      description: "We set up your course on your preferred platform, ensuring seamless student experience with proper testing and optimization."
    },
    {
      number: "05",
      title: "Launch & Scale",
      description: "We help you plan and execute your course launch, implementing strategies to continuously grow your student base and revenue."
    }
  ];

  return (
    <section id="process" className="py-20 bg-black-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Our <span className="italic text-gold">Process</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-poppins">
            How we turn your knowledge into a <span className="italic">highly scalable</span> and <span className="italic">valuable</span> course
          </p>
        </div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="flex flex-col md:flex-row items-center"
            >
              <div className={`md:w-1/3 mb-8 md:mb-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-full -rotate-6 w-48 h-48 mx-auto"></div>
                  <div className="relative w-48 h-48 rounded-full bg-gold/20 flex items-center justify-center mx-auto">
                    <span className="text-5xl font-playfair font-bold text-gold">{step.number}</span>
                  </div>
                </div>
              </div>
              
              <div className={`md:w-2/3 ${index % 2 === 1 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                <h3 className="text-2xl font-bold mb-4 font-playfair">
                  <span className="text-gold italic">{step.title}</span>
                </h3>
                <p className="text-lg text-gray-300 font-poppins">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
