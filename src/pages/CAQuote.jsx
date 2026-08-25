import React from 'react';
import { Link } from 'react-router-dom';
import CAQuoteForm from '../components/CAQuoteForm';
import ApplySidebar from '../components/ApplySidebar';
import ApplyFeatures from '../components/ApplyFeatures';

const CAQuoteHero = () => (
  <section className="bg-[#020d1c] py-12 md:py-16 font-sans relative overflow-hidden">
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#de9e48] rounded-full blur-[120px] opacity-10 translate-x-1/3 -translate-y-1/3"></div>
    <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-gray-400 text-[13px] font-medium mb-6">
        <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
        <span>›</span>
        <Link to="/ca-services" className="hover:text-[#de9e48] transition-colors">CA Services</Link>
        <span>›</span>
        <span className="text-white">Request a Quote</span>
      </div>

      <div className="max-w-3xl">
        <h3 className="text-[#de9e48] text-[14px] font-bold tracking-wider uppercase mb-3">
          EXPERT CA ASSISTANCE
        </h3>
        <h1 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold font-serif leading-[1.2] mb-5">
          Request a Quote for <br />
          <span className="text-[#de9e48]">CA Services</span>
        </h1>
        <p className="text-gray-300 text-[14.5px] md:text-[15.5px] leading-relaxed max-w-2xl">
          Fill out the form below with your requirements and our Chartered Accountant team will get back to you with the estimated professional fees, required documents, and process timeline.
        </p>
      </div>
    </div>
  </section>
);

const CAQuote = () => {
  return (
    <div className="bg-white min-h-screen">
      <CAQuoteHero />
      
      <section className="pb-16 lg:pb-24 pt-8 lg:pt-12">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex flex-col lg:flex-row gap-8 xl:gap-10">
            {/* Left Main Form Area */}
            <div className="w-full lg:w-[68%] xl:w-[72%]">
              <CAQuoteForm />
            </div>
            
            {/* Right Sidebar Area */}
            <div className="w-full lg:w-[32%] xl:w-[28%] space-y-6 lg:space-y-8">
              <ApplySidebar />
            </div>
          </div>
        </div>
      </section>

      <ApplyFeatures />
    </div>
  );
};

export default CAQuote;
