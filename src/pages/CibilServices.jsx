import React, { useState, useRef, useEffect } from 'react';
import SEO from '../components/SEO';
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
      <SEO 
        title="CIBIL Score Improvement & Repair Services in Lucknow | Gomti Nagar"
        description="Improve your CIBIL score, rectify dispute entries, remove negative written-off remarks & settle overdue loans legally with KTR Consultants in Gomti Nagar, Lucknow."
        keywords="cibil score improvement lucknow, cibil repair lucknow, cibil dispute rectification gomti nagar, fix cibil score lucknow, cibil check lucknow, ktr consultants cibil"
        canonicalUrl="https://www.ktrconsultants.in/cibil-services"
      />
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
