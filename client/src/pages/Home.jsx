import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import VideoSection from '../components/VideoSection';
import TestimonialSection from '../components/TestimonialSection';
import BrandValueSection from '../components/BrandValueSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FireStats from '../components/Graphs';
import Message from '../components/Message'; // Assuming you have a MessageIcon component


const Home = () => {
  return (
    <div className="min-h-screen">
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
      <Message />
    </div>
  );
};

export default Home; 