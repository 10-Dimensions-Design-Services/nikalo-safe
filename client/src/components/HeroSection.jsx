import React from 'react';  

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-max">
        <div className="relative bg-cover bg-center bg-no-repeat rounded-lg" style={{ backgroundImage: "url('/assets/images/HeroImageForHomePage.jpg')", minHeight: '600px' }}>
          {/* Gradient overlay from left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent rounded-lg"></div>
          
          <div className="relative py-12 md:py-24 px-4 md:px-8">
            <div className="max-w-2xl">
              {/* Headline */}
              <h1 className="title-1 mb-4 md:mb-6">
                <span className="text-black">Nikalo Safe – </span>
                <span className="text-primary">Every Life Deserves a Way Out</span>
              </h1>
              
              {/* Description */}
              <p className="title-3 text-black mb-6 md:mb-8 max-w-xl">
                Smart fire safety powered by real-time evacuation guidance and firefighter intelligence. 
                Protecting lives with technology that thinks ahead.
              </p>
              
              {/* TagLine */}
              <p className="title-4 text-black mb-8 md:mb-8 max-w-xl"> 
                Protecting lives with technology that thinks ahead.
              </p>
              
              {/* Button */}
              <div className="pb-12 md:pb-24">
                <button className="bg-transparent text-primary hover:bg-primary hover:text-white transition-colors paragraph-bold-1 h-10 px-6 rounded-lg border-2 border-primary">
                  Discover How It Works
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 