import React from "react";

const SolutionHeroSection = () => {
  return (
    <section
      id="solution-hero-section"
      className="pb-24 relative overflow-hidden bg-white "
    >
      <div className="container-max">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/SolutionHeroSection.png')",
            minHeight: "600px",
          }}
        >
          {/* Dark overlay for contrast */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `rgba(0, 0, 0, 0.5)`,
            }}
          />

          <div className="relative py-12 md:py-24 px-4 md:px-8">
            <div className="max-w-2xl text-white">
              <h1 className="title-3 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-[32px] lg:text-6xl leading-tight">
                <span className="text-white">Our </span>
                <span className="text-primary">Solutions</span>
              </h1>

              <p className="title-3 mb-4 md:mb-6 text-base sm:text-lg md:text-xl leading-relaxed w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
                Flexible safety solution for every building
              </p>

              <p className="paragraph-2 text-white text-sm sm:text-base md:text-lg leading-relaxed w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3">
                Nikalo Safe provides smart, real-time evacuation solutions tailored for all kinds of buildings like- Commercial buildings, malls, hospitals, 
                airports, schools, industries, residential buildings and during mass gathering events ensuring every space is equipped with intelligent 
                safety guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHeroSection;
