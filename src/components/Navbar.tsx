
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/586912a3-f844-4c34-ad0c-2d306958f516.png" 
              alt="JIDEM Foundation" 
              className="h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-700 font-medium hover:text-jidem-green transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 font-medium hover:text-jidem-green transition-colors">
              About Us
            </Link>
            <Link to="/programs" className="text-gray-700 font-medium hover:text-jidem-green transition-colors">
              Programs
            </Link>
            <Link to="/contact" className="text-gray-700 font-medium hover:text-jidem-green transition-colors">
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-jidem-green hover:bg-jidem-green/90 text-white rounded-full">
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3">
            <Link 
              to="/" 
              className="block px-4 py-2 text-gray-700 hover:bg-jidem-green hover:text-white rounded-md"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-4 py-2 text-gray-700 hover:bg-jidem-green hover:text-white rounded-md"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/programs" 
              className="block px-4 py-2 text-gray-700 hover:bg-jidem-green hover:text-white rounded-md"
              onClick={toggleMenu}
            >
              Programs
            </Link>
            <Link 
              to="/contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-jidem-green hover:text-white rounded-md"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-jidem-green hover:bg-jidem-green/90 text-white rounded-full">
                Donate Now
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
