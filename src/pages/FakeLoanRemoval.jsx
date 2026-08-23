import React from 'react';
import FakeLoanSection from '../components/FakeLoanSection';
import CibilBenefits from '../components/CibilBenefits';
import CibilHowItWorks from '../components/CibilHowItWorks';
import CibilBottomCTA from '../components/CibilBottomCTA';

const FakeLoanRemoval = () => {
  return (
    <div className="min-h-screen bg-white">
      <FakeLoanSection />
      <CibilBenefits />
      <CibilHowItWorks />
      <CibilBottomCTA />
    </div>
  );
};

export default FakeLoanRemoval;
