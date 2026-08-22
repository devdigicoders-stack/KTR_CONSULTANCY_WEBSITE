import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import BusinessFinance from './pages/BusinessFinance';
import CibilServices from './pages/CibilServices';
import PropertyServices from './pages/PropertyServices';
import ApplyOnline from './pages/ApplyOnline';

import Contact from './pages/Contact';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';

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
          <Route path="/property-services" element={<PropertyServices />} />
          <Route path="/apply-online" element={<ApplyOnline />} />
          <Route path="/loans" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>

        
        <Footer />
        
        {/* Global Floating Components */}
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
