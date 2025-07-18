import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/images/logo.svg" 
              alt="Nikalo Safe Logo" 
              className="w-24 md:w-[154px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black hover:text-primary transition-colors font-medium px-3 py-2">
              Home
            </a>
            <a href="#about" className="text-black hover:text-primary transition-colors font-medium px-3 py-2">
              About Us
            </a>
            <a href="#services" className="text-black hover:text-primary transition-colors font-medium px-3 py-2">
              Services
            </a>
            <button className="bg-primary text-white hover:bg-primary-dark transition-colors paragraph-bold-1 h-10 px-6 rounded-xl">
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100">
            <div className="px-4 py-2 space-y-1">
              <a href="#home" className="block px-3 py-2 text-black hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="#about" className="block px-3 py-2 text-black hover:text-primary transition-colors font-medium">
                About Us
              </a>
              <a href="#services" className="block px-3 py-2 text-black hover:text-primary transition-colors font-medium">
                Services
              </a>
              <div className="pt-4 pb-3 border-t border-gray-100">
                <button className="block w-full text-left h-10 px-6 bg-primary text-white hover:bg-primary-dark transition-colors paragraph-bold-1 rounded-xl">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 