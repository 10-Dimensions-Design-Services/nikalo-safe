import React, { useState } from "react";
import safetyImage from "../assets/Images/BrandImg.png";

const BrandValueSection = () => {
  const [showValues, setShowValues] = useState(false);

  return (
    <section className="pb-12 md:pb-16 lg:pb-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20">
        <div className="max-w-[1152px] mx-auto flex flex-col">
          {/* Top Center Heading */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight text-gray-900 px-4">
              Be the Brand That{" "}
              <span className="text-red-600">Prioritizes Safety</span> Above All
            </h2>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            <div className="flex justify-center mb-6 px-4">
              <img
                src={safetyImage}
                alt="Nikalo Safe"
                className="rounded-xl shadow-lg w-full max-w-[300px] sm:max-w-[400px] h-auto aspect-video object-cover"
              />
            </div>

            <div className="space-y-4 px-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Make Safety Your Signature Offering
                </h3>
                <p className="text-sm sm:text-base font-bold font-rubik text-[#172136]/60 leading-relaxed">
                  Nikalo Safe isn't just a fire response system, it's a statement.
                  A commitment to care, foresight, and protection embedded into
                  your property. When potential buyers or tenants walk in, they
                  see more than walls, they see responsibility, innovation, and
                  trust.
                </p>
                <p className="text-sm sm:text-base font-bold text-[#172136]/40 mt-3">
                  Care is the New Cornerstone.
                </p>
              </div>

              {/* Hidden Section that appears on button click */}
              {showValues && (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                  <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[160px] md:h-[160px] mx-auto">
                    <h4 className="font-bold text-gray-900 mb-2 text-center text-sm">
                      Enhanced Marketability
                    </h4>
                    <p className="text-gray-600 text-xs text-center">
                      Highlighting Nikalo Safe as a key feature in your buildings
                      can attract safety-conscious buyers and tenants, differentiating
                      your properties from competition.
                    </p>
                  </div>

                  <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[160px] md:h-[160px] mx-auto">
                    <h4 className="font-bold text-gray-900 mb-2 text-center text-sm">
                      Positive Reputation
                    </h4>
                    <p className="text-gray-600 text-xs text-center">
                      Demonstrating a proactive approach to fire safety enhances
                      your reputation as a responsible and forward-thinking developer.
                    </p>
                  </div>

                  <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition w-[200px] h-[200px] sm:w-[180px] sm:h-[180px] md:w-[160px] md:h-[160px] mx-auto sm:col-span-2 md:col-span-1">
                    <h4 className="font-bold text-gray-900 mb-2 text-center text-sm">
                      Meeting Regulatory Requirements
                    </h4>
                    <p className="text-gray-600 text-xs text-center">
                      Nikalo Safe can assist in meeting and exceeding fire safety
                      regulations, ensuring compliance and minimizing potential penalties.
                    </p>
                  </div>
                </div>
              )}

              {/* Button */}
              <button
                onClick={() => setShowValues(!showValues)}
                className="w-full sm:w-auto sm:min-w-[200px] h-10 border-2 border-red-600 text-red-600 rounded-md font-medium hover:bg-red-600 hover:text-white transition duration-300 text-sm mt-4"
              >
                {showValues ? "Hide Values" : "Learn How It Adds Value"}
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-[24px] font-bold text-gray-900 mb-3">
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

              {/* Hidden Section for desktop */}
              {showValues && (
                <div className="grid md:grid-cols-3 gap-6 mt-6 animate-fadeIn">
                  <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition w-[200px] h-[200px] mx-auto">
                    <h4 className="font-bold text-gray-900 mb-2 text-center text-sm">
                      Enhanced Marketability
                    </h4>
                    <p className="text-gray-600 text-xs text-center">
                      Highlighting Nikalo Safe as a key feature can attract
                      safety-conscious buyers and tenants, differentiating your
                      properties from competition.
                    </p>
                  </div>
                  <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition w-[200px] h-[200px] mx-auto">
                    <h4 className="font-bold text-gray-900 mb-2 text-center text-sm">
                      Positive Reputation
                    </h4>
                    <p className="text-gray-600 text-xs text-center">
                      Demonstrating a proactive approach to fire safety enhances
                      your reputation as a responsible and forward-thinking developer.
                    </p>
                  </div>
                  <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition w-[200px] h-[200px] mx-auto">
                    <h4 className="font-bold text-gray-900 mb-2 text-center text-sm">
                      Meeting Regulatory Requirements
                    </h4>
                    <p className="text-gray-600 text-xs text-center">
                      Nikalo Safe can assist in meeting and exceeding fire safety
                      regulations, ensuring compliance and minimizing penalties.
                    </p>
                  </div>
                </div>
              )}

              {/* Button */}
              <button
                onClick={() => setShowValues(!showValues)}
                className="min-w-[228px] h-[40px] border-2 border-red-600 text-red-600 rounded-md font-medium hover:bg-red-600 hover:text-white transition duration-300 text-base mt-4"
              >
                {showValues ? "Hide Values" : "Learn How It Adds Value"}
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-end">
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
