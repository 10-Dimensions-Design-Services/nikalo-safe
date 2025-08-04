import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.querySelector('#hero-section');
    if (heroSection) {
      heroSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center h-16 md:h-20 px-4 md:px-8 lg:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/assets/images/logo.svg" 
              alt="Nikalo Safe Logo" 
              className="w-20 sm:w-24 md:w-[154px] h-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a 
              href="#home" 
              onClick={scrollToHero}
              className="text-black hover:text-[#F4003B] transition-colors font-medium px-3 py-2 text-sm xl:text-base cursor-pointer"
            >
              Home
            </a>
            <a href="#about" className="text-black hover:text-[#F4003B] transition-colors font-medium px-3 py-2 text-sm xl:text-base">
              About Us
            </a>
            <a href="#services" className="text-black hover:text-[#F4003B] transition-colors font-medium px-3 py-2 text-sm xl:text-base">
              Services
            </a>
                         <button className="bg-white text-[#F4003B] border border-[#F4003B] hover:bg-[#F4003B] hover:text-white transition-colors font-medium h-10 px-4 xl:px-6 rounded-xl text-sm xl:text-base">
               Contact Us
             </button>
          </div>

          {/* Tablet Navigation (hidden on mobile and desktop) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <a 
              href="#home" 
              onClick={scrollToHero}
              className="text-black hover:text-[#F4003B] transition-colors font-medium px-2 py-2 text-sm cursor-pointer"
            >
              Home
            </a>
            <a href="#about" className="text-black hover:text-[#F4003B] transition-colors font-medium px-2 py-2 text-sm">
              About
            </a>
            <a href="#services" className="text-black hover:text-[#F4003B] transition-colors font-medium px-2 py-2 text-sm">
              Services
            </a>
            <button className="bg-white text-[#F4003B] border border-[#F4003B] hover:bg-[#F4003B] hover:text-white transition-colors font-medium h-9 px-4 rounded-xl text-sm">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-[#F4003B] transition-colors p-2"
              aria-label="Toggle menu"
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
          <div className="md:hidden border-t border-gray-100 bg-white">
            <div className="px-4 py-4 space-y-2">
              <a 
                href="#home" 
                onClick={scrollToHero}
                className="block px-4 py-3 text-black hover:text-[#F4003B] hover:bg-gray-50 transition-colors font-medium rounded-lg cursor-pointer"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="block px-4 py-3 text-black hover:text-[#F4003B] hover:bg-gray-50 transition-colors font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#services" 
                className="block px-4 py-3 text-black hover:text-[#F4003B] hover:bg-gray-50 transition-colors font-medium rounded-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <div className="pt-4 pb-2 border-t border-gray-100">
                <button className="block w-full text-center h-12 px-6 bg-white text-[#F4003B] border border-[#F4003B] hover:bg-[#F4003B] hover:text-white transition-colors font-medium rounded-xl">
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