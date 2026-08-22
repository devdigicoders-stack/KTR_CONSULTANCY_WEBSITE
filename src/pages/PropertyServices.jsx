import React, { useEffect } from 'react';
import PropertyHero from '../components/PropertyHero';
import PropertyServicesGrid from '../components/PropertyServicesGrid';
import PropertyWhyChoose from '../components/PropertyWhyChoose';
import PropertyHowItWorks from '../components/PropertyHowItWorks';
import PropertyPartners from '../components/PropertyPartners';
import PropertyBottomCTA from '../components/PropertyBottomCTA';

const PropertyServices = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50/30 min-h-screen">
      <PropertyHero />
      <PropertyServicesGrid />
      <PropertyWhyChoose />
      <PropertyHowItWorks />
      <PropertyPartners />
      <PropertyBottomCTA />
      {/* Additional sections can be added here later */}
    </div>
  );
};

export default PropertyServices;
