import React, { useEffect } from 'react';
import SEO from '../components/SEO';
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
      <SEO 
        title="Property Legal Assessment & Valuation Services"
        description="Comprehensive property title search, legal deed verification, chain deed validation, and valuation TDS services in Lucknow by KTR Consultants (ktrconsultants.in)."
        keywords="property legal verification lucknow, chain deed assessment, property valuation tds, ktr consultants property services"
        canonicalUrl="https://www.ktrconsultants.in/property-services"
      />
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
