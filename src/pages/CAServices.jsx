import React from 'react';
import SEO from '../components/SEO';
import CAHero from '../components/CAHero';
import CAServicesList from '../components/CAServicesList';
import CAWhyChoose from '../components/CAWhyChoose';
import CAProcess from '../components/CAProcess';
import CABottomCTA from '../components/CABottomCTA';

const CAServices = () => {
  return (
    <>
      <SEO 
        title="Chartered Accountant (CA) & Tax Audit Services"
        description="Professional CA services in Lucknow: GST filing, ITR filing, company registration, balance sheet auditing, and CMA reports by KTR Consultants (ktrconsultants.in)."
        keywords="ca services lucknow, chartered accountant gomti nagar, gst registration lucknow, itr filing, cma report preparation, ktr consultants ca"
        canonicalUrl="https://www.ktrconsultants.in/ca-services"
      />
      <CAHero />
      <CAServicesList />
      <CAWhyChoose />
      <CAProcess />
      <CABottomCTA />
    </>
  );
};

export default CAServices;
