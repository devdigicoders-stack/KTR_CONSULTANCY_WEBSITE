import React from 'react';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import ServicesCTA from '../components/ServicesCTA';
import HowItWorks from '../components/HowItWorks';
import LoansBottomCTA from '../components/LoansBottomCTA';

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <HowItWorks />
      <LoansBottomCTA />
    </>
  );
};

export default Services;
