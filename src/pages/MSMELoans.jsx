import MSMEHero from '../components/MSMEHero';
import MSMEPromise from '../components/MSMEPromise';
import MSMEProcessFlow from '../components/MSMEProcessFlow';
import MSMELoanTypes from '../components/MSMELoanTypes';
import ComplexFundingSection from '../components/ComplexFundingSection';
import MSMEWhyChoose from '../components/MSMEWhyChoose';

const MSMELoans = () => {
  return (
    <>
      <MSMEHero />
      <MSMEProcessFlow />
      <MSMEPromise />
      <MSMELoanTypes />
      <ComplexFundingSection />
      <MSMEWhyChoose />
    </>
  );
};

export default MSMELoans;
