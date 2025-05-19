
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
      answer: "Typically, our course creation process takes 6-12 weeks from initial consultation to launch-ready product. The timeline varies based on course complexity, content volume, and your availability for feedback and approvals."
    },
    {
      question: "What types of courses do you specialize in?",
      answer: "We specialize in creating courses across various domains including business, marketing, personal development, creative skills, and professional training. Our approach is adaptable to different subject matters and teaching styles."
    },
    {
      question: "Do you help with marketing the course after it's created?",
      answer: "Yes! We offer course launch strategies and marketing support to ensure your course reaches your target audience. Our comprehensive approach includes launch planning, email sequences, sales page optimization, and promotional content creation."
    },
    {
      question: "What platforms do you work with?",
      answer: "We work with all major course platforms including Teachable, Kajabi, Thinkific, Podia, LearnDash, and custom WordPress solutions. We can recommend the best platform for your specific needs or work with your existing platform."
    },
    {
      question: "What's included in your course creation package?",
      answer: "Our comprehensive package includes course strategy, curriculum design, content organization, production guidance, visual design elements, platform setup, and launch support. We can customize our services based on your specific needs and budget."
    },
    {
      question: "I don't have all my content organized yet. Can you still help?",
      answer: "Absolutely! Many clients come to us with just their expertise and ideas. We have a structured process to extract your knowledge and organize it into a coherent, engaging curriculum that resonates with your audience."
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
