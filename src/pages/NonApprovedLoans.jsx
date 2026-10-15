import React from 'react';
import SEO from '../components/SEO';
import NonApprovedHero from '../components/NonApprovedHero';
import NonApprovedIntro from '../components/NonApprovedIntro';
import NonApprovedWhyChoose from '../components/NonApprovedWhyChoose';
import NonApprovedProcess from '../components/NonApprovedProcess';
import NonApprovedEligibilityForm from '../components/NonApprovedEligibilityForm';
import NonApprovedDisclaimer from '../components/NonApprovedDisclaimer';
import LoansBottomCTA from '../components/LoansBottomCTA';

const NonApprovedLoans = () => {
  return (
    <>
      <SEO 
        title="Loan on Non-Approved Property in Lucknow | Plot & Society Housing Finance"
        description="Looking for a Home Loan on non-approved society property or unapproved plot in Lucknow? KTR Consultants facilitates loans through nationalized and private banks."
        keywords="loan on non approved property lucknow, unapproved plot loan lucknow, non approved society loan gomti nagar, registry property loan lucknow, ktr consultants"
        canonicalUrl="https://www.ktrconsultants.in/non-approved-loans"
      />
      <NonApprovedHero />
      <NonApprovedIntro />
      <NonApprovedWhyChoose />
      <NonApprovedProcess />
      <NonApprovedEligibilityForm />
      <NonApprovedDisclaimer />
      <LoansBottomCTA />
    </>
  );
};

export default NonApprovedLoans;
