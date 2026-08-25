import React from 'react';
import CAHero from '../components/CAHero';
import CAServicesList from '../components/CAServicesList';
import CAWhyChoose from '../components/CAWhyChoose';
import CADocumentsRequired from '../components/CADocumentsRequired';
import CAProcess from '../components/CAProcess';
import CABottomCTA from '../components/CABottomCTA';

const CAServices = () => {
  return (
    <>
      <CAHero />
      <CAServicesList />
      <CAWhyChoose />
      <CADocumentsRequired />
      <CAProcess />
      <CABottomCTA />
    </>
  );
};

export default CAServices;
