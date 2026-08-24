import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import PropertyServices from './pages/PropertyServices';
import PropertyLegalServices from './pages/PropertyLegalServices';
import PropertyAssessmentMap from './pages/PropertyAssessmentMap';
import AssessmentMapForm from './pages/AssessmentMapForm';
import ApplyOnline from './pages/ApplyOnline';

import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FakeLoanRemoval from './pages/FakeLoanRemoval';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#fafafa] font-sans relative">
        <div className="bg-[#020d1c]">
          <Header />
        </div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/business-finance" element={<BusinessFinance />} />
          <Route path="/cibil-services" element={<CibilServices />} />
          <Route path="/fake-loan-removal" element={<FakeLoanRemoval />} />
          <Route path="/cibil-fake-loan-removal" element={<FakeLoanRemoval />} />
          <Route path="/property-services" element={<PropertyServices />} />
          <Route path="/property-legal-services" element={<PropertyLegalServices />} />
          <Route path="/property-assessment-map" element={<PropertyAssessmentMap />} />
          <Route path="/property-assessment-map/apply" element={<AssessmentMapForm />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route path="/loans" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        
        <Footer />
        
        {/* Global Floating Components */}
        <FloatingWhatsApp />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
