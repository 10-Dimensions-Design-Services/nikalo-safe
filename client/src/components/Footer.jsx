// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SiX } from "react-icons/si";

const Footer = () => {
const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  return (
    <footer className="bg-white flex flex-col items-center justify-center">
      <div className="w-full px-4 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 md:gap-y-12 text-sm w-full py-8">
          
          {/* Column 1 - Company Info */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Nikalo Safe</h3>
                      {/* Email clickable */}
            <a
              href={
                isMobile
                  ? "mailto:corporate@nikalosafe.ai"
                  : "https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai"
              }
              target={isMobile ? "_self" : "_blank"}
              rel="noopener noreferrer"
              className="text-gray-600 flex items-center gap-1 md:gap-2 text-xs md:text-sm mb-1 md:mb-2 hover:text-gray-900 transition-colors"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4 text-red-600" />
              corporate@nikalosafe.ai
            </a>

            <div className="flex flex-col gap-1 md:gap-2 text-gray-600 text-xs md:text-sm mb-2 md:mb-4">
              <span className="flex items-center hover:text-gray-900 transition-colors cursor-pointer">
              <a 
                  href="tel:+918390703746" 
                  className="flex items-center hover:text-gray-900 transition-colors cursor-pointer"
                >
                  <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-600" /> +918390703746
              </a>
              </span>
              <span className="flex items-center hover:text-gray-900 transition-colors cursor-pointer">
                <a 
                    href="tel:+918329709173" 
                    className="flex items-center hover:text-gray-900 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3 h-3 md:w-4 md:h-4 text-red-600" /> +918329709173
                </a>
              </span>
            </div>
            <div className="flex gap-3 md:gap-4 justify-center sm:justify-start text-red-600">
              <a href={isMobile ? "mailto:corporate@nikalosafe.ai" : "https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai"} target="_blank" rel="noopener noreferrer"><FaInstagram className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
              <a href={isMobile ? "mailto:corporate@nikalosafe.ai" : "https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai"} target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
              <a href={isMobile ? "mailto:corporate@nikalosafe.ai" : "https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai"} target="_blank" rel="noopener noreferrer"><FaFacebook className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
              <a href={isMobile ? "mailto:corporate@nikalosafe.ai" : "https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai"} target="_blank" rel="noopener noreferrer"><SiX className="w-4 h-4 md:w-5 md:h-5 hover:text-gray-900" /></a>
            </div>
          </div>

          {/* Column 2 - Product */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Product</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
              <li>
                <Link
                  to="/about#leadership"
                  onClick={(e) => {
                    if (window.location.pathname === "/about" && window.location.hash === "#leadership") {
                      e.preventDefault();
                      document.querySelector("#leadership")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-gray-900 transition-colors"
                >
                  Patent Applied
                </Link>
              </li>
              <li><Link to="/privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-gray-900 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Company */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">Company</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
            <li>
            <a
              href="https://10dimensionsdesign.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              10dimensionsdesign (Parent company)
            </a>
          </li>
          <li>
            <a
              href={
                /Mobi|Android/i.test(navigator.userAgent)
                  ? "mailto:corporate@nikalosafe.ai?subject=Career%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20apply%20for%20a%20position%20%5Bxyz%20-%20position%5D%20at%20Nikalo%20Safe.%20Please%20find%20my%20CV%20attached."
                  : "https://mail.google.com/mail/?view=cm&fs=1&to=corporate@nikalosafe.ai&su=Career%20Inquiry&body=Hello%2C%20I%20would%20like%20to%20apply%20for%20a%20position%20%5Bxyz%20-%20position%5D%20at%20Nikalo%20Safe.%20Please%20find%20my%20CV%20attached."
              }
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
            >
              Careers
            </a>
          </li>
            </ul>
          </div>

          {/* Column 4 - About */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-sm md:text-lg font-semibold mb-2 md:mb-4">About</h3>
            <ul className="space-y-1 md:space-y-2 text-gray-600 text-xs md:text-sm">
             <li>
                <Link 
                  to="/about" 
                  className="hover:text-gray-900 transition-colors">
                   About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about#leadership"
                  onClick={(e) => {
                    if (window.location.pathname === "/about" && window.location.hash === "#leadership") {
                      e.preventDefault();
                      document.querySelector("#leadership")?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="hover:text-gray-900 transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>       
               <Link to="/contactus" className="hover:text-gray-900 transition-colors">
                Contact Us
               </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-4 md:mt-8 text-center text-gray-500 text-xs px-2">
          © {new Date().getFullYear()} NIKALO SAFE. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
