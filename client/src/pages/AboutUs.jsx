import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import purposeImage from '../assets/Images/namepurpose.png';
import missionImage from '../assets/Images/mission.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

{/* Hero Section */}
<section id="about-hero" className="relative overflow-hidden pb-16 md:pb-24">
  <div className="container-max px-2.5">
 <div
      className="relative bg-cover bg-center bg-no-repeat rounded-lg w-full h-[350px] sm:h-[500px] md:h-[600px] lg:h-[720px]"
      style={{
        backgroundImage: "url('/assets/images/about-hero-image.jpg')",
        minHeight: "720px",
      }}
    >
      <div className="absolute inset-0 rounded-lg" style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1 }} />
      <div className="relative py-8 md:py-20 px-2 sm:px-6 md:px-12 z-10 max-w-2xl">
        <h1 className="title-h1 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-[32px] lg:text-6xl leading-tight">
          <span className="text-white">About </span>
          <span className="text-primary">Us</span>
        </h1>
        <h2 className="title-h3 md:text-2xl lg:text-3xl mb-4 md:mb-6 text-white">
          Evacuate Smart, Evacuate Safe with Nikalo Safe
        </h2>
        <p className="paragraph-bold mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed w-full text-white max-w-md">
          In emergency situations, clear and accessible escape routes are vital. Our smart evacuation system guides you through the safest route during emergencies and leads to the safe path and away from danger.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Purpose Section */}
      <section id="purpose" className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 flex-shrink-0">
            <img
              src={purposeImage}
              alt="Nikalo Safe branding"
              className="w-full h-auto max-h-[340px] md:max-h-[372px] object-cover rounded-3xl"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="title-h2 sm:text-3xl lg:text-4xl">
              <span className="text-primary">Nikalo Safe:</span>{' '}
              <span className="text-black">A Name with Purpose</span>
            </h2>
            <p className="paragraph-bold sm:text-lg leading-relaxed">
              The brand name <strong>"Nikalo Safe"</strong> carries a dual meaning in Hindi that reflects the very essence of our mission.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed">
              <li>
                <strong>“Nikālo” निकलो</strong> – “Exit immediately”
              </li>
              <li>
                <strong>“Nikalo” निकालो</strong> – “Help others evacuate”
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-4 mt-7 md:mt-0">
            <h2 className="title-h2 md:text-3xl lg:text-4xl">
              <span className="text-black">Our </span>
              <span className="text-primary">Mission</span>
            </h2>
            <p className="paragraph-bold sm:text-lg leading-relaxed">
              At Nikalo Safe, our mission is to deliver real-time, building-specific fire escape guidance through smart technology — ensuring no one is ever left without direction in an emergency.
            </p>
            <ul className="paragraph-regular list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed">
              <li>Every life finds a clear way out in emergencies.</li>
              <li>Every building is equipped with smart evacuation guidance.</li>
              <li>Every person feels empowered and guided during disasters.</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full sm:w-[320px] md:w-[350px] lg:w-[400px] xl:w-[480px] max-w-full min-h-[260px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-[480px] h-auto rounded-xl overflow-hidden shadow-md">
              <img
                src={missionImage}
                alt="Mission QR Code"
                className="w-full h-full object-cover rounded-xl"
              />
              <div
                className="absolute inset-0 rounded-xl"
                style={{
                  background: `linear-gradient(
                    to right,
                    rgba(255,255,255,1) 25%,
                    rgba(255,255,255,0) 44%
                  )`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-10 md:py-16 px-4 md:px-8 lg:px-16 bg-white text-center">
        <h2 className="title-h2 mb-4 md:mb-6">
          Let’s get <span className="text-primary">started</span>
        </h2>
        <p className="max-w-2xl md:max-w-3xl mx-auto paragraph-regular leading-relaxed mb-8 text-[#1F2937]">
          Take safety into your own hands with Nikalo Safe – your emergency evacuation guide. Harness the power of intelligent navigation to protect lives during fires, gas leaks, and critical emergencies. Save time, prevent panic, and ensure safe escapes with cutting-edge, AI-driven technology. Join the safety revolution now and make every second count!
        </p>
        <Link to="/contactus" className="bg-white text-primary border border-primary hover:bg-primary hover:text-white transition-colors font-medium h-10 px-4 py-2 xl:px-6 rounded-xl text-sm xl:text-base">
              Contact Us
        </Link>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
