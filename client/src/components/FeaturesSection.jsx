import React from 'react';
import feature1 from '../assets/Images/SmartFireAlarm.jpg';

// Array of feature objects containing id, title, description, and image for each card
const visualFeatures = [
  {
    id: 1,
    title: "Smart QR-Based Evacuation",
    description:
      "Scan the nearest QR code to get live, dynamic exit routes based on real-time sensor data. Escape paths update instantly as conditions change.",
    image: feature1,
  },
  {
    id: 2,
    title: "Real-Time Hazard Detection",
    description:
      "Integrated sensors detect fire zones and instantly reroute evacuation paths. No dead ends. No delays.",
    image: feature1,
  },
  {
    id: 3,
    title: "Firefighter Intel System",
    description:
      "Automatically alerts fire teams with exact layouts, danger zones, and safe entry points, speeding up response and saving more lives.",
    image: feature1,
  },
  {
    id: 4,
    title: "Live Building Dashboard",
    description:
      "One dashboard, total visibility. See fire zones, active sensors, exits, and refuge areas, all live and interactive.",
    image: feature1,
  },
];

// Main Features Section Component
// Displays a grid of feature cards showcasing Nikalo Safe's capabilities
const FeaturesSection = () => {
  return (
    // Main section container with white background and vertical padding
    <section className="pt-0 pb-[98px] bg-white">
      {/* Centered container with max width and horizontal padding */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-12">
            What Nikalo Safe Brings to Your <span className="text-red-500">Building</span>
          </h2>
        </div>

        {/* Spacing between heading and cards */}

        {/* Feature Cards Grid */}
        {/* Responsive grid: 1 column on mobile, 2 on small screens, 4 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 justify-items-center">
          {/* Map through features array to render individual cards */}
          {visualFeatures.map((feature) => (
            <div
              key={feature.id}
              // Card styling with hover effects and responsive padding
              className="bg-gray-50 hover:bg-white shadow-md rounded-xl w-full max-w-[290px] p-4 md:p-6 flex flex-col items-center transition-transform hover:scale-105 duration-00">
              {/* Feature image with responsive sizing */}
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-[180px] mb-3 md:mb-4 object-cover rounded-lg"/>
              {/* Feature title with responsive text sizing */}
              <h3 className="text-sm md:text-base font-semibold text-gray-900 text-center mb-2 md:mb-3 leading-tight">
                {feature.title}
              </h3>
              {/* Feature description with responsive text sizing */}
              <p className="text-xs md:text-sm text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>


        {/* Call-to-Action Button */}
        <div className="flex justify-center mt-12">
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
