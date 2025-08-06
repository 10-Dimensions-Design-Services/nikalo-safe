import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VideoSection from '../components/VideoSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FireStats from '../components/Graphs';
import TestimonialSection from '../components/TestimonialSection';
import BrandValueSection from '../components/BrandValueSection';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FireStats />
      <FeaturesSection />
      <VideoSection />
      <TestimonialSection />
      <BrandValueSection />
      <Contact />
      {/* <CTASection /> */}
      <Footer />
    </div>
  );
};

export default Home; 