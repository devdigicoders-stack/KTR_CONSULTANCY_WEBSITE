import React from 'react';
import CAHero from '../components/CAHero';
import CAServicesList from '../components/CAServicesList';
import CAWhyChoose from '../components/CAWhyChoose';
import CAProcess from '../components/CAProcess';
import CABottomCTA from '../components/CABottomCTA';

const CAServices = () => {
  return (
    <>
      <CAHero />
      <CAServicesList />
      <CAWhyChoose />
      <CAProcess />
      <CABottomCTA />
    </>
  );
};

export default CAServices;
