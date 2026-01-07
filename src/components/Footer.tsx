
import { Link } from "react-router-dom";
import { Mail, Phone, Home, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-jidem-green text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          <div>
            <img 
              src="/lovable-uploads/586912a3-f844-4c34-ad0c-2d306958f516.png" 
              alt="JIDEM Foundation" 
              className="h-20 mb-4 bg-white rounded-full p-1"
            />
            <p className="text-sm mb-4">
              JIDEM Foundation is committed to promoting the well-being of children with a special focus on children with disabilities.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-jidem-yellow" aria-label="Facebook">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-lg">f</span>
                </div>
              </a>
              <a href="#" className="hover:text-jidem-yellow" aria-label="Twitter">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-lg">t</span>
                </div>
              </a>
              <a href="#" className="hover:text-jidem-yellow" aria-label="Instagram">
                <div className="w-8 h-8 border border-white rounded-full flex items-center justify-center">
                  <span className="text-lg">ig</span>
                </div>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-jidem-yellow pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-jidem-yellow transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-jidem-yellow transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-jidem-yellow transition-colors">Programs</Link></li>
              <li><Link to="/contact" className="hover:text-jidem-yellow transition-colors">Donate</Link></li>
              <li><Link to="/contact" className="hover:text-jidem-yellow transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 border-b border-jidem-yellow pb-2">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Home size={20} />
                <span>54 Zik's Avenue, Fegge, Onitsha</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} />
                <span>+234 806 508 2988</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} />
                <span>info@jidemfoundation.org</span>
              </li>
              {/* <li className="flex items-center space-x-3">
                <Globe size={20} />
                <span>RC: 114515 | Registered: July 13, 2018</span>
              </li> */}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 py-6 text-center">
          <p>&copy; {currentYear} JIDEM Foundation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
