
import { useEffect, useState } from "react";

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const stepIndex = parseInt(entry.target.getAttribute('data-step-index') || '0');
          setVisibleSteps(prev => [...prev, stepIndex]);
        }
      });
    }, { threshold: 0.2 });
    
    const stepElements = document.querySelectorAll('.process-step');
    stepElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      stepElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

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
        <div className="flex flex-col items-center text-center mb-16 opacity-0 animate-fade-in">
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
              data-step-index={index}
              className={`flex flex-col md:flex-row items-center process-step transition-all duration-1000 transform ${
                visibleSteps.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              }`}
            >
              <div className={`md:w-1/3 mb-8 md:mb-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gold/10 rounded-full -rotate-6 w-48 h-48 mx-auto transition-transform duration-500 hover:rotate-0"></div>
                  <div className="relative w-48 h-48 rounded-full bg-gold/20 flex items-center justify-center mx-auto transform hover:scale-110 transition-transform duration-500">
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
