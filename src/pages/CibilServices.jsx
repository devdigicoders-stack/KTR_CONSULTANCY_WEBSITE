import React from 'react';
import CibilHero from '../components/CibilHero';
import CibilPricingTable from '../components/CibilPricingTable';
import CibilInfo from '../components/CibilInfo';
import CibilBenefits from '../components/CibilBenefits';
import CibilHowItWorks from '../components/CibilHowItWorks';
import CibilBottomCTA from '../components/CibilBottomCTA';

const CibilServices = () => {
  return (
    <div className="min-h-screen bg-white">
      <CibilHero />
      <CibilPricingTable />
      <CibilInfo />
      <CibilBenefits />
      <CibilHowItWorks />
      <CibilBottomCTA />
    </div>
  );
};

export default CibilServices;
