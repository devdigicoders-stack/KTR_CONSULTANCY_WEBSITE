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
        title="Business Loans in Lucknow & MSME Project Finance | Gomti Nagar"
        description="Apply for Business Loans, Working Capital (CC/OD), MSME Funding & Machinery Loans in Lucknow with KTR Consultants. Fast approvals, low interest rates, 20+ partner banks."
        keywords="business loan in lucknow, business loans lucknow, business loan consultant gomti nagar, working capital loan lucknow, msme project funding lucknow, ktr consultants business finance"
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
