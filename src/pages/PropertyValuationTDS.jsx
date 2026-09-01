import React, { useState, useRef, useEffect } from 'react';
import PropertyValuationHero from '../components/PropertyValuationHero';
import PropertyValuationOverview from '../components/PropertyValuationOverview';
import PropertyValuationForm from '../components/PropertyValuationForm';
import PropertyValuationWhyChoose from '../components/PropertyValuationWhyChoose';
import PropertyBottomCTA from '../components/PropertyBottomCTA';

const PropertyValuationTDS = () => {
  const [selectedService, setSelectedService] = useState('Property Valuation for Income Tax');
  const formRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelectServiceAndScroll = (serviceName) => {
    setSelectedService(serviceName);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PropertyValuationHero formRef={formRef} />
      <PropertyValuationOverview onSelectService={handleSelectServiceAndScroll} />
      <PropertyValuationForm 
        selectedServiceProp={selectedService} 
        formRefProp={formRef} 
      />
      <PropertyValuationWhyChoose />
      <PropertyBottomCTA />
    </div>
  );
};

export default PropertyValuationTDS;
