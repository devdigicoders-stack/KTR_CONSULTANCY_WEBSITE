import SEO from '../components/SEO';
import BusinessFinanceHero from '../components/BusinessFinanceHero';
import BusinessFinanceGrid from '../components/BusinessFinanceGrid';
import ComplexFundingSection from '../components/ComplexFundingSection';
import BusinessFinanceWhyChoose from '../components/BusinessFinanceWhyChoose';
import BusinessFinanceHowItWorks from '../components/BusinessFinanceHowItWorks';
import BusinessFinanceBottomCTA from '../components/BusinessFinanceBottomCTA';

const BusinessFinance = () => {
  return (
    <>
      <SEO 
        title="Business Finance & MSME Project Loans"
        description="Fast and flexible Business Loans, MSME Funding, Working Capital, and machinery loans with minimum paperwork from KTR Consultants (ktrconsultants.in) in Lucknow."
        keywords="business loans lucknow, msme funding, working capital loan, ktr consultants business finance, commercial finance"
        canonicalUrl="https://www.ktrconsultants.in/business-finance"
      />
      <BusinessFinanceHero />
      <BusinessFinanceGrid />
      <ComplexFundingSection />
      <BusinessFinanceWhyChoose />
      <BusinessFinanceHowItWorks />
      <BusinessFinanceBottomCTA />
    </>
  );
};

export default BusinessFinance;
