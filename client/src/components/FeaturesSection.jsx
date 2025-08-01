import React from 'react';
import feature1 from '../assets/Images/feature1.png';
import feature2 from '../assets/Images/feature 2.PNG';
import feature3 from '../assets/Images/feature3.PNG';

// Array of feature objects containing id, title, description, and image for each card
const visualFeatures = [
  {
    id: 1,
    title: "Real-Time Hazard Detection",
    description:
      "Integrated sensors detect hazards like fire zones and instantly shows safe escape routes.",
    image: feature1,
  },
  {
    id: 2,
    title: "Smart QR-Based Evacuation",
    description:
      "Scan the nearest QR code to get live safe exit routes based on real-time sensor data.",
    image: feature2,
  },
  {
    id: 3,
    title: "Firefighter In System",
    description:
      "Automatically alerts fire teams with building information layouts, models, danger zones, and safe entry-exit paths, speeding up response and saving more lives.",
    image: feature3,
  },
];

// Main Features Section Component
// Displays a grid of feature cards showcasing Nikalo Safe's capabilities
const FeaturesSection = () => {
  return (
    // Main section container with white background and vertical padding
    <section className="pt-0 pb-12 md:pb-24 bg-white">
      {/* Centered container with max width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 md:mb-12">
            What Nikalo Safe Brings to Your <span className="text-[#F4003B]">Building</span>
          </h2>
        </div>

        {/* Feature Cards Grid */}
        {/* Responsive grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
          {/* Map through features array to render individual cards */}
          {visualFeatures.map((feature) => (
            <div
              key={feature.id}
              // Responsive card styling
              className="bg-gray-50 hover:bg-white rounded-xl w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] h-auto min-h-[320px] sm:min-h-[380px] md:min-h-[440px] p-4 sm:p-5 md:p-6 flex flex-col items-center transition-transform hover:scale-105 duration-300 shadow-[1px_2px_8px_rgba(0,0,0,0.25)]">
              {/* Responsive feature image */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[160px] sm:h-[180px] md:h-[211px] mb-3 sm:mb-4 object-cover rounded-lg"/>
              {/* Responsive feature title */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#172136] text-center mb-2 sm:mb-3 leading-none">
                {feature.title}
              </h3>
              {/* Responsive feature description */}
              <p className="text-sm sm:text-base md:text-lg text-[#172136]/50 text-center flex-grow font-rubik font-medium leading-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-6 md:mt-12">
          {/* Styled button with hover effects and brand colors */}
          <button className="bg-white text-[#F4003B] border border-[#F4003B] hover:bg-[#F4003B] hover:text-white transition-colors px-10 py-2.5 rounded-lg font-medium text-lg h-10 flex items-center justify-center">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

// Export the component for use in other parts of the application
export default FeaturesSection;
