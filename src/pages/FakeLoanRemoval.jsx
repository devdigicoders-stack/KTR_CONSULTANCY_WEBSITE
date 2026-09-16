import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import FakeLoanSection from '../components/FakeLoanSection';
import CibilBenefits from '../components/CibilBenefits';
import CibilHowItWorks from '../components/CibilHowItWorks';
import CibilBottomCTA from '../components/CibilBottomCTA';

const FakeLoanRemoval = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Fake Loan Removal from CIBIL & Credit Reports"
        description="Victim of fraudulent loans or identity theft in your credit report? KTR Consultants (ktrconsultants.in) helps legally dispute and remove fake loans from CIBIL, Experian, Equifax, and CRIF."
        keywords="fake loan removal, cibil fraud dispute, remove fraudulent loan, identity theft loan cibil, ktr consultants fake loan removal"
        canonicalUrl="https://www.ktrconsultants.in/fake-loan-removal"
      />
      <FakeLoanSection />
      <CibilBenefits />
      <CibilHowItWorks />
      <CibilBottomCTA />
    </div>
  );
};

export default FakeLoanRemoval;
