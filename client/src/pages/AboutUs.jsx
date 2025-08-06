import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section id="about-hero" className="relative overflow-hidden">
        <div className="container-max">
          <div
            className="relative bg-cover bg-center bg-no-repeat rounded-lg w-full"
            style={{
              backgroundImage: "url('/assets/images/about-hero-image.jpg')",
              minHeight: "600px",
            }}
          >
            {/* Darker overlay for stronger contrast */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: 'rgba(0,0,0,0.5)',
                zIndex: 1,
              }}
            />
            
            <div className="relative py-12 md:py-24 px-4 md:px-8" style={{ zIndex: 2 }}>
              <div className="max-w-2xl">
                {/* Headline */}
                <h1 className="title-1 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-[32px] lg:text-6xl leading-tight">
                  <span className="text-white">About </span>
                  <span className="text-[#F4003B]">Us</span>
                </h1>

                {/* Subtitle */}
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-white">
                  Evacuate Smart, Evacuate Safe with Nikalo Safe
                </h2>

                {/* Description */}
                <p className="title-3 mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 text-white">
                  In emergency situations, clear and accessible escape routes are vital. Our smart evacuation system guides you through the safest route during emergencies and leads to the safe path and away from danger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section: “Nikalo Safe: A Name with Purpose” */}
      <section id="purpose" className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          
          {/* Left: Image */}
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
            <img
              src="/assets/images/nikalo-purpose.jpg"
              alt="Nikalo Safe branding"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              <span className="text-[#F4003B]">Nikalo Safe:</span>{' '}
              <span className="text-black">A Name with Purpose</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed">
              The brand name <strong>"Nikalo Safe"</strong> carries a dual meaning in Hindi that reflects the very essence of our mission.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed">
              <li>
                <strong>“Nikālo” निक़ालो</strong> – “Exit immediately”  
                (captures the urgency of self-evacuation during emergencies)
              </li>
              <li>
                <strong>“Nikalo” निकालो</strong> – “Help others evacuate”  
                (reflects the user’s role to guide others to safety using the same escape route)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* …rest of AboutUs sections… */}

      <Footer />
    </div>
  );
};

export default AboutUs;
