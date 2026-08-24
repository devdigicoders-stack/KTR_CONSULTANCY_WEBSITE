import React, { useEffect } from 'react';
import PropertyLegalHero from '../components/PropertyLegalHero';
import ChainDeedForm from '../components/ChainDeedForm';
import CriticalDetails from '../components/CriticalDetails';
import ServiceHowItWorks from '../components/ServiceHowItWorks';
import ApplicationBottomCTA from '../components/ApplicationBottomCTA';

const PropertyLegalServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#fafafa] min-h-screen">
      <PropertyLegalHero />
      <ChainDeedForm />
      <CriticalDetails />
      <ServiceHowItWorks />
      <ApplicationBottomCTA />
    </div>
  );
};

export default PropertyLegalServices;
