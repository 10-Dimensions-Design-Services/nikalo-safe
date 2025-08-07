import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FeedbackCarousel from '../components/FeedbackCarousel';
import purposeImage from '../assets/Images/namepurpose.png';
import missionImage from '../assets/Images/mission.png';
import TeamImg1 from '../assets/Images/Dpsir.jpeg';
import TeamImg2 from '../assets/Images/Manisir.jpeg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section id="about-hero" className="relative overflow-hidden pb-24">
        <div className="container-max">
          <div
            className="relative bg-cover bg-center bg-no-repeat rounded-lg w-full"
            style={{
              backgroundImage: "url('/assets/images/about-hero-image.jpg')",
              minHeight: '720px',
            }}
          >
            <div
              className="absolute inset-0 rounded-lg"
              style={{ background: 'rgba(0,0,0,0.5)', zIndex: 1 }}
            />
            <div className="relative py-12 md:py-24 px-4 md:px-8" style={{ zIndex: 2 }}>
              <div className="max-w-2xl">
                <h1 className="title-1 mb-4 md:mb-6 text-3xl sm:text-4xl md:text-[32px] lg:text-6xl leading-tight">
                  <span className="text-white">About </span>
                  <span className="text-[#F4003B]">Us</span>
                </h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-6 text-white">
                  Evacuate Smart, Evacuate Safe with Nikalo Safe
                </h2>
                <p className="title-3 mb-6 md:mb-8 text-base sm:text-lg md:text-xl leading-relaxed w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 text-white">
                  In emergency situations, clear and accessible escape routes are vital. Our smart evacuation system guides you through the safest route during emergencies and leads to the safe path and away from danger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section id="purpose" className="py-16 px-4 md:px-8 lg:px-16 bg-white pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-[564px] h-[372px] md:w-1/2 overflow-hidden rounded-[64px]">
            <img
              src={purposeImage}
              alt="Nikalo Safe branding"
              className="w-full h-auto object-cover shadow-none"
            />
          </div>
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
                <strong>“Nikālo” निक़ालो</strong> – “Exit immediately” (captures the urgency of self-evacuation during emergencies)
              </li>
              <li>
                <strong>“Nikalo” निकालो</strong> – “Help others evacuate” (reflects the user’s role to guide others to safety using the same escape route)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 px-4 md:px-8 lg:px-16 bg-white pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-[32px] font-bold">
              <span className="text-black">Our </span>
              <span className="text-[#F4003B]">Mission</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-[#6d6d6d]">
              At Nikalo Safe, our mission is to deliver real-time, building-specific fire escape guidance through smart technology — ensuring no one is ever left without direction in an emergency.
            </p>
            <ul className="list-disc list-inside space-y-2 text-base sm:text-lg leading-relaxed text-[#6d6d6d]">
              <li>Every life finds a clear way out in emergencies.</li>
              <li>Every building is equipped with smart evacuation guidance.</li>
              <li>Every person feels empowered and guided during disasters.</li>
            </ul>
          </div>
          <div className="relative w-[564px] h-[601px] md:w-1/2 overflow-hidden rounded-[20px]">
            <img
              src={missionImage}
              alt="Mission QR Code"
              className="w-full h-full object-cover shadow-none"
            />
            <div
              className="absolute inset-0 rounded-[20px]"
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
      </section>

{/* Leadership Team Section */}
<section id="leadership" className="py-16 px-4 md:px-8 lg:px-16 bg-white pb-24">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">
      <span className="text-black">Our </span>
      <span className="text-[#F4003B]">Leadership Team</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
      {/* Card 1 */}
      <div className="bg-[#FDFDFE] rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center w-full sm:w-[501px] h-auto p-8">
        <div
          className="rounded-full overflow-hidden mb-6"
          style={{ width: '225.67px', height: '225.67px' }}
        >
          <img
            src={TeamImg1}
            alt="Dharmendra Patil Sir"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-[#0046BE]">Mr. Dharmendra Patil</h3>
        <p className="text-[#F4003B] font-semibold">Founder & Director</p>
        <p className="text-sm text-[#6d6d6d] mb-4">
          CPI Digital Transformation and AI for Leaders, IIM Indore
        </p>
        <p className="text-sm text-[#6d6d6d] h-[182px] leading-relaxed overflow-hidden">
          The visionary with decades of experience in various technologies and processes implementation during fire and life safety design, construction and facility management in the buildings, industries and infrastructure sector. He is the innovator of “Digital Twin – Based System and Method for Disaster Management” with patent application number: 202421054472 PCT International Application Number: PCT/IN2025/051041
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-[#FDFDFE] rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center w-full sm:w-[501px] h-auto p-8">
        <div
          className="rounded-full overflow-hidden mb-6"
          style={{ width: '225.67px', height: '225.67px' }}
        >
          <img
            src={TeamImg2}
            alt="Maniteja Sundara"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-lg font-bold text-[#0046BE]">Mr. Maniteja Sundara</h3>
        <p className="text-[#F4003B] font-semibold">Co-founder & Director</p>
        <p className="text-sm text-[#6d6d6d] mb-4">
          PG Diploma in the Business Management, NMIMS
        </p>
        <p className="text-sm text-[#6d6d6d] h-[182px] leading-relaxed overflow-hidden">
          Mechanical Engineer with experience in applying advanced technologies such as Digital Twin, Smart Facility Management, IoT, Augmented Reality (AR), Virtual Reality (VR), and Cloud-based BIM collaboration platforms. Knowledgeable in integrating trends like building analytics, predictive maintenance, and sustainability-focused design. Skilled in the design and implementation of fire fighting systems across all types of buildings.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Get Started Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white text-center pb-24">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Let’s get <span className="text-[#F4003B]">started</span>
        </h2>
        <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed mb-8 text-[#1F2937]">
          Take safety into your own hands with Nikalo Safe – your emergency evacuation guide. Harness the power of
          intelligent navigation to protect lives during fires, gas leaks, and critical emergencies. Save time,
          prevent panic, and ensure safe escapes with cutting-edge, AI-driven technology. Join the safety revolution
          now and make every second count!
        </p>
        <button className="px-6 py-3 border-2 border-[#F4003B] text-[#F4003B] rounded-full font-medium hover:bg-[#F4003B] hover:text-white transition">
          Contact Us
        </button>
      </section>

      {/* Innovation Feedback Carousel */}
      <FeedbackCarousel />

      <Footer />
    </div>
  );
};

export default AboutUs;
