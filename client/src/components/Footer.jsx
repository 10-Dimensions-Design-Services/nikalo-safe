import React from "react";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 md:py-12 w-full max-w-[1152px] mx-auto">
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 text-sm">
          
          {/* Column 1 - Company Info */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">NIKALO SAFE</h3>
            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-1 md:gap-2 text-xs md:text-sm mb-1 md:mb-2">
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-red-600" /> Corporate@nikalosafe.com
            </p>
            <p className="text-gray-600 flex items-center justify-center sm:justify-start gap-1 md:gap-2 text-xs md:text-sm mb-2 md:mb-4">
              <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-600" /> +918390703746
            </p>
            <div className="flex gap-3 md:gap-4 justify-center sm:justify-start text-red-600">
              <a href="#"><FaInstagram className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
              <a href="#"><FaLinkedin className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
              <a href="#"><FaFacebook className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
              <a href="#"><FaTwitter className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Product</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Patent Applied</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Use</a></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Company</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">How it Works</a></li>
            </ul>
          </div>

          {/* Column 4 - About */}
          <div className="flex-1 text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">About</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
              <li><a href="#" className="hover:text-gray-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-4 md:mt-8 text-center text-gray-500 text-xs">
          © {new Date().getFullYear()} NIKALO SAFE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
