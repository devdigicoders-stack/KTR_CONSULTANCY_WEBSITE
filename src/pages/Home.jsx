import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import HomeUSPBanner from '../components/HomeUSPBanner';
import StatsBanner from '../components/StatsBanner';
import ServicesGrid from '../components/ServicesGrid';
import HowItWorks from '../components/HowItWorks';
import CompanyStats from '../components/CompanyStats';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import TrustedBy from '../components/TrustedBy';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <HomeUSPBanner />
      <StatsBanner />
      <ServicesGrid />
      <HowItWorks />
      <CompanyStats />
      <WhyChooseUs />
      <Testimonials />
      <TrustedBy />
      <CTASection />
    </>
  );
};

export default Home;
