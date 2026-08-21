import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import StatsBanner from '../components/StatsBanner';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustedBy from '../components/TrustedBy';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <StatsBanner />
      <WhyChooseUs />
      <Testimonials />
      <TrustedBy />
      <CTASection />
    </>
  );
};

export default Home;
