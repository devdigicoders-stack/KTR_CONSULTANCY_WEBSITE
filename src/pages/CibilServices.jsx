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
        title="CIBIL Score Improvement & Credit Dispute Resolution"
        description="Improve your CIBIL credit score and resolve negative remarks, default entries, and bureau discrepancies with expert guidance from KTR Consultants (ktrconsultants.in) in Lucknow."
        keywords="cibil score improvement, cibil dispute rectification, cibil repair lucknow, fix cibil score, ktr consultants cibil"
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
