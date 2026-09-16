import React from 'react';
import SEO from '../components/SEO';
import ServicesHero from '../components/ServicesHero';
import ServicesGrid from '../components/ServicesGrid';
import EMICalculator from '../components/EMICalculator';
import ServicesCTA from '../components/ServicesCTA';
import HowItWorks from '../components/HowItWorks';
import LoansBottomCTA from '../components/LoansBottomCTA';

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Financial & Legal Services"
        description="Explore comprehensive services from KTR Consultants (ktrconsultants.in): Business Loans, MSME Funding, CIBIL Dispute Resolution, Property Legal Verification, and CA Services in Lucknow."
        keywords="ktr consultants services, business finance, loan services lucknow, cibil score rectification, property assessment"
        canonicalUrl="https://www.ktrconsultants.in/services"
      />
      <ServicesHero />
      <ServicesGrid />
      <div className="bg-white py-12 md:py-16 border-t border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 mb-2 text-center">
          <span className="text-xs font-bold text-[#de9e48] tracking-widest uppercase">Financial Planning Tool</span>
          <h2 className="text-2xl md:text-3xl font-bold font-serif text-[#020d1c] mt-1">Calculate Your Loan EMI & Interest Outgo</h2>
        </div>
        <EMICalculator embedded={true} />
      </div>
      <ServicesCTA />
      <HowItWorks />
      <LoansBottomCTA />
    </>
  );
};

export default Services;
