import React, { useState } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaTimes, FaComments } from 'react-icons/fa';

const Message = () => {
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const whatsappNumber = "+918390703746"; // Replace with your WhatsApp number
  const callNumber = "tel:+918390703746"; // Replace with your call number

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center">
      {/* Option Buttons */}
      <div
        className={`flex flex-col items-center gap-3 transform transition-all ease-in-out duration-500 
        ${showOptions ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-90'} 
        ${showOptions ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-md 
          hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        >
          <span className="absolute -z-10 w-full h-full rounded-full group-hover:scale-150 group-hover:opacity-20 transition-all duration-300 bg-white"></span>
          <FaWhatsapp size={24} />
        </a>

        {/* Phone */}
        <a
          href={callNumber}
          className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-500 text-white shadow-md 
          hover:shadow-2xl hover:scale-110 transition-all duration-300 relative group"
        >
          <span className="absolute -z-10 w-full h-full rounded-full group-hover:scale-150 group-hover:opacity-20 transition-all duration-300 bg-white"></span>
          <FaPhoneAlt size={24} />
        </a>
      </div>

      {/* Toggle Button */}
      <button
        onClick={toggleOptions}
        className={`mt-3 w-14 h-14 flex items-center justify-center rounded-full shadow-lg text-white 
        transition-all duration-300 ease-in-out transform hover:shadow-2xl hover:scale-105 relative overflow-hidden
        ${showOptions ? 'bg-red-500' : 'bg-primary animate-pulse'}`}
      >
        {/* Ripple effect */}
        <span className="absolute w-full h-full rounded-full bg-white opacity-10 scale-0 hover:scale-150 transition-transform duration-500"></span>
        {showOptions ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>
    </div>
  );
};

export default Message;
