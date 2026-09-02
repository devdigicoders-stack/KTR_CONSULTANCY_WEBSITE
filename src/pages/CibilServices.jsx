import React, { useState, useRef, useEffect } from 'react';
import CibilHero from '../components/CibilHero';
import CibilPricingTable from '../components/CibilPricingTable';
import CibilInfo from '../components/CibilInfo';
import CibilBenefits from '../components/CibilBenefits';
import CibilHowItWorks from '../components/CibilHowItWorks';
import CibilBottomCTA from '../components/CibilBottomCTA';

const CibilServices = () => {
  const [selectedBureau, setSelectedBureau] = useState('cibil');
  const [highlightForm, setHighlightForm] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    // Only scroll to top if not an anchor link
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleSelectBureauAndScroll = (bureauId) => {
    setSelectedBureau(bureauId);
    setHighlightForm(true);
    
    setTimeout(() => {
      if (formRef.current) {
        const yOffset = -25;
        const elementPosition = formRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + yOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 60);

    setTimeout(() => {
      setHighlightForm(false);
    }, 2200);
  };

  return (
    <div className="min-h-screen bg-white">
      <CibilHero 
        selectedBureauProp={selectedBureau} 
        setSelectedBureauProp={setSelectedBureau}
        handleBureauSelectProp={handleSelectBureauAndScroll}
        formRefProp={formRef}
        highlightFormProp={highlightForm}
      />
      <CibilPricingTable 
        selectedBureau={selectedBureau}
        onSelectBureau={handleSelectBureauAndScroll}
      />
      <CibilInfo />
      <CibilBenefits onSelectBureau={handleSelectBureauAndScroll} />
      <CibilHowItWorks />
      <CibilBottomCTA />
    </div>
  );
};

export default CibilServices;
