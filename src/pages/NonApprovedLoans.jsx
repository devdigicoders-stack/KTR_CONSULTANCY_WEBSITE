import React from 'react';
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
