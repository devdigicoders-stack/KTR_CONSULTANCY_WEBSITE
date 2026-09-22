import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BusinessFinance from './pages/BusinessFinance';
import CibilServices from './pages/CibilServices';
import PartnerCibilCheck from './pages/PartnerCibilCheck';
import PropertyServices from './pages/PropertyServices';
import PropertyLegalServices from './pages/PropertyLegalServices';
import PropertyAssessmentMap from './pages/PropertyAssessmentMap';
import AssessmentMapForm from './pages/AssessmentMapForm';
import PropertyValuationTDS from './pages/PropertyValuationTDS';
import CAServices from './pages/CAServices';
import CAQuote from './pages/CAQuote';
import ApplyOnline from './pages/ApplyOnline';
import NonApprovedLoans from './pages/NonApprovedLoans';
import MSMELoans from './pages/MSMELoans';

import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FakeLoanRemoval from './pages/FakeLoanRemoval';
import CompanyCibilReport from './pages/CompanyCibilReport';
import InsuranceServices from './pages/InsuranceServices';
import InvestmentRetirement from './pages/InvestmentRetirement';
import EMICalculatorPage from './pages/EMICalculatorPage';
import PaymentPage from './pages/PaymentPage';

function MainLayout() {
  const location = useLocation();
  const isStandalonePartnerPage = [
    '/credit-check',
    '/direct-cibil-check',
    '/partner-cibil-check',
    '/cibil-check'
  ].includes(location.pathname.toLowerCase());

  return (
    <div className="min-h-screen bg-[#fafafa] font-sans relative">
      {!isStandalonePartnerPage && (
        <div className="bg-[#020d1c]">
          <Header />
        </div>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/business-finance" element={<BusinessFinance />} />
        <Route path="/cibil-services" element={<CibilServices />} />
        <Route path="/cibil-enquiry" element={<CibilServices />} />
        
        {/* Direct CIBIL / Credit Check Pages for Partners & Professionals */}
        <Route path="/credit-check" element={<PartnerCibilCheck />} />
        <Route path="/direct-cibil-check" element={<PartnerCibilCheck />} />
        <Route path="/partner-cibil-check" element={<PartnerCibilCheck />} />
        <Route path="/cibil-check" element={<PartnerCibilCheck />} />

        <Route path="/company-cibil-report" element={<CompanyCibilReport />} />
        <Route path="/business-cibil-report" element={<CompanyCibilReport />} />
        <Route path="/fake-loan-removal" element={<FakeLoanRemoval />} />
        <Route path="/cibil-fake-loan-removal" element={<FakeLoanRemoval />} />
        <Route path="/property-services" element={<PropertyServices />} />
        <Route path="/property-legal-services" element={<PropertyLegalServices />} />
        <Route path="/property-assessment-map" element={<PropertyAssessmentMap />} />
        <Route path="/property-assessment-map/apply" element={<AssessmentMapForm />} />
        <Route path="/property-valuation-tds" element={<PropertyValuationTDS />} />
        <Route path="/insurance-services" element={<InsuranceServices />} />
        <Route path="/insurance" element={<InsuranceServices />} />
        <Route path="/investment-retirement" element={<InvestmentRetirement />} />
        <Route path="/ca-services" element={<CAServices />} />
        <Route path="/ca-quote" element={<CAQuote />} />
        <Route path="/apply-online" element={<ApplyOnline />} />
        <Route path="/non-approved-loans" element={<NonApprovedLoans />} />
        <Route path="/msme-project-finance" element={<MSMELoans />} />
        <Route path="/msme-mudra-finance" element={<MSMELoans />} />
        <Route path="/loans" element={<Services />} />
        <Route path="/property-loans" element={<Services />} />
        <Route path="/emi-calculator" element={<EMICalculatorPage />} />
        <Route path="/pay/:linkId" element={<PaymentPage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      {!isStandalonePartnerPage && <Footer />}
      {!isStandalonePartnerPage && <FloatingWhatsApp />}
      <ScrollToTop />
    </div>
  );
}

function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

export default App;
