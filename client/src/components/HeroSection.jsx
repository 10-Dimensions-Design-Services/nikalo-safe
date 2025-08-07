import React from "react";

const HeroSection = () => {
  return (
    <section id="hero-section" className="relative overflow-hidden">
      <div className="container-max px-2.5 pb-24">
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-lg"
          style={{
            backgroundImage: "url('/assets/images/HeroImageForHomePage.jpg')",
            minHeight: "720px",
          }}
        >
          {/* Updated gradient overlay for a gentler fade */}
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(245,247,250,0.85) 0%,
                  rgba(245,247,250,0.85) 20%,
                  rgba(245,247,250,0.6) 70%,
                  rgba(245,247,250,0.4) 80%,
                  rgba(245,247,250,0.6) 100%
                )
              `,
            }}
          />
          <div className="relative py-12 md:py-24 px-4 md:px-8">
            <div className="max-w-2xl">
              {/* Headline */}
              <h1 className="title-h1 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-[32px] lg:text-6xl leading-tight">
                <span className="text-black">Nikalo Safe – </span>
                <span className="text-primary">
                  Every Life Deserves a Way Out
                </span>
              </h1>

              {/* Description */}
              <p
                className="title-h3 mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3"
                style={{ color: "rgba(23, 33, 54, 0.8)" }}
              >
                Smart fire safety powered by real-time evacuation guidance and
                firefighter intelligence. Protecting lives with technology that
                thinks ahead {/*<br className="hidden sm:block" />*/}
              </p>

              {/* Button */}
              <div className="pt-4 md:pb-24">
                <button className="bg-transparent text-primary hover:bg-primary hover:text-white transition-colors paragraph-bold h-10 px-6 rounded-lg border-2 border-primary">
                  Discover How It Works
                </button>
              </div>
              {/* Extra spacing to match FeaturesSection gap */}
              <div className="mt-6 md:mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
