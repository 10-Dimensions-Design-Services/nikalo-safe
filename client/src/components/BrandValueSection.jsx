import React from "react";
import safetyImage from "../assets/Images/BrandImg.png"; // update with your image path

const BrandValueSection = () => {
  return (
    <section className="pb-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-[1152px] h-[542px] mx-auto flex flex-col">
          
          {/* Top Center Heading */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-snug text-gray-900">
              Be the Brand That{" "}
              <span className="text-red-600">Prioritizes Safety</span> Above All
            </h2>
          </div>

          {/* Content and Image Row */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[24px] font-bold text-gray-900 mb-2">
                  Make Safety Your Signature Offering
                </h3>
                <p className="text-[18px] font-bold font-rubik text-[#172136]/60 leading-relaxed">
                  Nikalo Safe isn't just a fire response system, it's a statement.
                  A commitment to care, foresight, and protection embedded into
                  your property. When potential buyers or tenants walk in, they
                  see more than walls, they see responsibility, innovation, and
                  trust.
                </p>
                <p className="text-[18px] font-bold text-[#172136]/40 mt-4">
                  Care is the New Cornerstone.
                </p>
              </div>

              <button className="w-[228px] h-[40px] border-2 border-red-600 text-red-600 rounded-md font-medium hover:bg-red-600 hover:text-white transition duration-300">
                Learn How It Adds Value
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={safetyImage}
                alt="Nikalo Safe"
                className="rounded-2xl shadow-lg w-[542px] h-[455px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandValueSection;
