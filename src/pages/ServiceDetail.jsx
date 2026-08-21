import React from 'react';
import ServiceDetailHero from '../components/ServiceDetailHero';
import ServiceOverview from '../components/ServiceOverview';
import ServiceApproach from '../components/ServiceApproach';
import ServiceBenefits from '../components/ServiceBenefits';
import RelatedServices from '../components/RelatedServices';
import ServiceDetailCTA from '../components/ServiceDetailCTA';

const ServiceDetail = () => {
  return (
    <>
      <ServiceDetailHero />
      <ServiceOverview />
      <ServiceApproach />
      <ServiceBenefits />
      <RelatedServices />
      <ServiceDetailCTA />
    </>
  );
};

export default ServiceDetail;
