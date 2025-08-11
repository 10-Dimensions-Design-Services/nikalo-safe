import React from "react";

const SolutionHeroSection = () => {
  return (
    <section
      id="solution-hero-section"
      className="pb-24 relative overflow-hidden bg-white"
    >
      <div className="container-max">
        <div
          className="relative bg-top bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/SolutionHeroSection.png')",
            minHeight: "720px",
          }}
        >
          {/* Dark overlay for contrast */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `rgba(0, 0, 0, 0.2)`,
            }}
          />

          <div className="relative pt-12 pb-12 md:pt-24 px-4 md:px-8">
            <div className="w-full md:w-1/2 text-white">
              <h1 className="title-h1 mb-4 md:mb-6 leading-tight">
                <span className="text-white">Our </span>
                <span className="text-primary">Solutions</span>
              </h1>

              <p className="title-h3 mb-4 md:mb-6 leading-relaxed">
                Flexible safety solution for every building
              </p>

              <p className="paragraph-bold text-white">
                Nikalo Safe provides smart, real-time evacuation solutions tailored
                for all kinds of buildings like- Commercial buildings, malls,
                hospitals, airports, schools, industries, residential buildings and
                during mass gathering events ensuring every space is equipped with
                intelligent safety guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionHeroSection;
