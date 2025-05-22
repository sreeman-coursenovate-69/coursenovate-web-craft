
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does it take to create a complete course?",
      answer: "Typically, it takes 6 to 8 weeks to create a high-quality, structured online course—this includes everything from planning and scripting to recording and publishing. Timelines can vary slightly based on the course complexity and content availability."
    },
    {
      question: "What types of courses do you specialize in?",
      answer: "We work with coaches, consultants, educators, and service-based professionals to turn their expertise into impactful digital courses. Whether it's a coaching framework, skill-based training, or transformation-led program—we’ve got you covered."
    },
    {
      question: "Do you help with marketing the course after it's created?",
      answer: "Yes! We offer course marketing support as an add-on. This can include sales funnel setup, email campaigns, social media strategy, and launch planning to ensure your course reaches the right audience."
    },
    // {
    //   question: "What platforms do you work with?",
    //   answer: "We work with all major course platforms including Teachable, Kajabi, Thinkific, Podia, LearnDash, and custom WordPress solutions. We can recommend the best platform for your specific needs or work with your existing platform."
    // },
    {
      question: "What's included in your course creation package?",
      answer: "Our package typically includes: Course strategy and structure, Scripting & content refinement, Slide design & video editing, Course website creation (landing pages, sign-up flow, payment setup), Entire Course Backend Management, Marketing the course to scale further."
    },
    {
      question: "I don't have all my content organized yet. Can you still help?",
      answer: "Absolutely. Many of our clients start with just an idea or a rough outline. We’ll guide you through our signature framework to help extract your knowledge, organize your content, and shape it into a clear, engaging course."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Frequently Asked <span className="italic text-gold">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gold mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl font-poppins">
            Everything you need to know about working with <span className="italic">Coursenovate</span>
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gray-800/50 rounded-lg px-6 border border-gray-700"
              >
                <AccordionTrigger className="text-left font-playfair text-lg py-5 hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-poppins text-gray-300 pt-2 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
