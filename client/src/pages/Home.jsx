import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import FireStats from '../components/Graphs';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FireStats />
      {/* <FeaturesSection />
      <CTASection />
      <Footer /> */}
    </div>
  );
};

export default Home; 