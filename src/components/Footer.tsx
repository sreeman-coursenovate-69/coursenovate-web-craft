
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold font-playfair">
              Course<span className="italic text-gold">novate</span>
            </h2>
            <p className="text-gray-400 font-poppins mt-2">
              Transform your knowledge into premium courses
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="font-playfair font-bold mb-3 text-gold">Navigation</h3>
              <ul className="space-y-2 font-poppins">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-gold transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#process" className="text-gray-400 hover:text-gold transition-colors">
                    Our Process
                  </a>
                </li>
                <li>
                  <a href="#booking" className="text-gray-400 hover:text-gold transition-colors">
                    Book a Call
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-gold transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-playfair font-bold mb-3 text-gold">Contact</h3>
              <ul className="space-y-2 font-poppins">
                <li className="text-gray-400">
                  info@coursenovate.com
                </li>
                <li className="text-gray-400">
                  +1 (555) 123-4567
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 font-poppins text-sm">
            © {currentYear} Coursenovate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
