
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 transform hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold font-playfair">
              Course<span className="italic text-gold">novate</span>
            </h2>
            <p className="text-gray-400 font-poppins mt-2">
              Transform your knowledge into premium courses
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="font-playfair font-bold mb-3 text-gold">Navigation</h3>
              <ul className="space-y-2 font-poppins">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-gold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-gold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-400 hover:text-gold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-gold transition-colors relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="transform hover:translate-y-[-5px] transition-transform duration-300">
              <h3 className="font-playfair font-bold mb-3 text-gold">Contact</h3>
              <ul className="space-y-2 font-poppins">
                <li className="text-gray-400 hover:text-gray-200 transition-colors">
                  info@coursenovate.com
                </li>
                <li className="text-gray-400 hover:text-gray-200 transition-colors">
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center">
          <p className="text-gray-500 font-poppins text-sm">
            © {currentYear} Coursenovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
