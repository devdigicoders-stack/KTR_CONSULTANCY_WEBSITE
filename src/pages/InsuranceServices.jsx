import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import InsuranceQuickEnquiryForm from '../components/InsuranceQuickEnquiryForm';
import CareSupremeSpotlight from '../components/CareSupremeSpotlight';

const InsuranceServices = () => {
  const [activeTab, setActiveTab] = useState('life'); // 'life' | 'health' | 'vehicle'
  const lifeFormRef = useRef(null);
  const healthFormRef = useRef(null);
  const vehicleFormRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToSection = (tabId) => {
    setActiveTab(tabId);
    const el = document.getElementById(`section-${tabId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const lifePartners = [
    { name: 'LIC of India', badge: 'Govt. Sovereign Guarantee', icon: '🏛️' },
    { name: 'Canara HSBC Life', badge: 'Bank Backed Trust', icon: '🏦' },
    { name: 'Future Generali Life', badge: 'Global Financial Expertise', icon: '🌐' },
    { name: 'Bajaj Allianz Life', badge: 'Comprehensive Protection', icon: '🛡️' }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* 1. Hero Section */}
      <section className="bg-gradient-to-b from-[#020d1c] via-[#091b35] to-[#020d1c] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(#de9e48 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#de9e48]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-gray-400 text-xs font-medium mb-6">
            <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-[#de9e48] font-semibold">Insurance Services</span>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12">
            
            {/* Left Content */}
            <div className="w-full lg:w-[60%]">
              <div className="inline-flex items-center gap-2 bg-[#de9e48]/15 text-[#de9e48] border border-[#de9e48]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
                🛡️ Complete Family, Health & Asset Protection
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold font-serif text-white leading-[1.18] mb-4">
                Protect Your Family, Health & Assets with the <br className="hidden sm:block" />
                <span className="text-[#de9e48]">Right Insurance</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                Insurance is about protecting your financial future when unexpected events occur. At <strong>KTR Consultants</strong>, we don’t want customers to simply buy an insurance policy — we help you understand your requirements, compare suitable options from top insurers, and complete the process with proper guidance.
              </p>

              {/* 3 Quick Jump Cards */}
              <div className="grid grid-cols-3 gap-2.5 sm:gap-4 mb-6">
                <button
                  onClick={() => scrollToSection('life')}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#de9e48]/60 p-3 sm:p-4 rounded-2xl text-left transition-all group"
                >
                  <span className="text-2xl block mb-1">❤️</span>
                  <strong className="text-xs sm:text-sm text-white block group-hover:text-[#de9e48] transition-colors">Life Insurance</strong>
                  <span className="text-[11px] text-gray-400 hidden sm:block">Term & Family Security</span>
                </button>

                <button
                  onClick={() => scrollToSection('health')}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#de9e48]/60 p-3 sm:p-4 rounded-2xl text-left transition-all group"
                >
                  <span className="text-2xl block mb-1">🏥</span>
                  <strong className="text-xs sm:text-sm text-white block group-hover:text-[#de9e48] transition-colors">Health Insurance</strong>
                  <span className="text-[11px] text-gray-400 hidden sm:block">Care Supreme 7X Bonus</span>
                </button>

                <button
                  onClick={() => scrollToSection('vehicle')}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#de9e48]/60 p-3 sm:p-4 rounded-2xl text-left transition-all group"
                >
                  <span className="text-2xl block mb-1">🚗</span>
                  <strong className="text-xs sm:text-sm text-white block group-hover:text-[#de9e48] transition-colors">Vehicle Insurance</strong>
                  <span className="text-[11px] text-gray-400 hidden sm:block">Compare & Save on IDV</span>
                </button>
              </div>

              {/* Navigation Link to Investment */}
              <div className="bg-[#de9e48]/10 border border-[#de9e48]/30 rounded-2xl p-4 flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <span className="text-xl">📈</span>
                  <span className="text-xs sm:text-sm text-gray-200">
                    Looking for <strong>Investment, ULIPs & Retirement Solutions</strong>?
                  </span>
                </div>
                <Link
                  to="/investment-retirement"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#de9e48] hover:underline"
                >
                  Explore Investment Plans →
                </Link>
              </div>

            </div>

            {/* Right Quick Box */}
            <div className="w-full lg:w-[38%]">
              <div className="bg-white/5 backdrop-blur-md border border-white/15 p-6 sm:p-7 rounded-3xl text-white shadow-2xl">
                <span className="text-[#de9e48] text-xs font-bold uppercase tracking-wider block mb-2">
                  Our Insurance Advisory Promise
                </span>
                <h3 className="text-lg sm:text-xl font-bold font-serif mb-4">
                  Guidance First. Policy Second.
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-gray-300 mb-6">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">1.</span>
                    <span><strong>Understand:</strong> We analyze your income, family liabilities, and risk needs.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">2.</span>
                    <span><strong>Compare:</strong> Evaluate quotes, claim settlement ratios & add-on benefits.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">3.</span>
                    <span><strong>Choose:</strong> Pick the most suitable policy without bias or sales pressure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">4.</span>
                    <span><strong>Support:</strong> Complete assistance with documentation & claim coordination.</span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
                  <span>Speak with an Advisor:</span>
                  <a href="tel:+919918699696" className="text-[#de9e48] font-bold hover:underline">
                    +91 99186 99696
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Sticky Quick Category Bar */}
      <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-xs">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 flex items-center justify-center gap-3 sm:gap-6 py-3">
          {[
            { id: 'life', label: '❤️ Life Insurance' },
            { id: 'health', label: '🏥 Health Insurance (Care Supreme)' },
            { id: 'vehicle', label: '🚗 Vehicle Insurance' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => scrollToSection(tab.id)}
              className={`text-xs sm:text-sm font-bold px-4 py-2 rounded-xl transition-all ${
                activeTab === tab.id
                  ? 'bg-[#020d1c] text-[#de9e48] shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 py-12 space-y-16 lg:space-y-24">
        
        {/* SECTION 1: LIFE INSURANCE */}
        <section id="section-life" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                ❤️ Family Protection
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#020d1c] leading-tight">
                Life Insurance: <br />
                <span className="text-[#de9e48]">Secure Your Family's Financial Future</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Your family's financial responsibilities don't stop when you are no longer there. Life insurance provides robust financial protection to your dependents and helps them manage liabilities, children's higher education, and long-term financial stability.
              </p>

              {/* Why Choose KTR for Life */}
              <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 space-y-3">
                <h4 className="text-sm font-bold text-[#020d1c] flex items-center gap-2">
                  <span className="text-[#de9e48]">⭐</span> Why Choose KTR Consultants for Life Insurance?
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Choosing the right life insurance policy depends on your age, income, family responsibilities, financial goals, and required protection. We help you evaluate these parameters and compare suitable plans instead of blindly choosing a policy.
                </p>
              </div>

              {/* Partner Insurers */}
              <div>
                <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">
                  Our Life Insurance Partners
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {lifePartners.map((partner, idx) => (
                    <div key={idx} className="bg-white border border-gray-200 p-3.5 rounded-xl shadow-xs text-center">
                      <span className="text-2xl block mb-1">{partner.icon}</span>
                      <h5 className="font-bold text-xs text-[#020d1c]">{partner.name}</h5>
                      <span className="text-[10px] text-gray-500 block mt-0.5">{partner.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Quick Form (5 Cols) */}
            <div className="lg:col-span-5" ref={lifeFormRef}>
              <InsuranceQuickEnquiryForm
                category="Life Insurance"
                title="Life Insurance Quick Enquiry"
                subtitle="Provide 4 quick details to get customized quotes from top life insurers."
                buttonText="Get Life Insurance Assistance"
                customId="life-insurance-form"
              />
            </div>

          </div>
        </section>

        {/* SECTION 2: HEALTH INSURANCE & CARE SUPREME SPOTLIGHT */}
        <section id="section-health" className="scroll-mt-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              🏥 Medical Shield
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#020d1c] leading-tight">
                  Health Insurance: <br />
                  <span className="text-[#de9e48]">Protect Your Savings from Medical Expenses</span>
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A major medical treatment or hospitalization can create a significant financial burden on your lifetime savings. Health insurance provides comprehensive coverage for eligible hospitalization, day-care, and modern technology medical costs according to policy terms.
                </p>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  We are associated with <strong>Care Health Insurance</strong> and assist customers in evaluating coverage, waiting periods, pre-existing condition terms, and cashless network hospitals before making an informed decision.
                </p>
              </div>

              <div className="lg:col-span-5" ref={healthFormRef}>
                <InsuranceQuickEnquiryForm
                  category="Health Insurance (Care Supreme)"
                  title="Health Insurance Quick Enquiry"
                  subtitle="Explore Care Supreme & tailored health policies with 22,100+ cashless hospitals."
                  buttonText="Get Health Insurance Assistance"
                  customId="health-insurance-form"
                />
              </div>
            </div>

            {/* Care Supreme Spotlight Visual Banner */}
            <CareSupremeSpotlight
              onApplyClick={() => {
                const el = document.getElementById('health-insurance-form');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
            />

          </div>
        </section>

        {/* SECTION 3: VEHICLE INSURANCE */}
        <section id="section-vehicle" className="scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                🚗 Motor Protection
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif text-[#020d1c] leading-tight">
                Vehicle Insurance: <br />
                <span className="text-[#de9e48]">Don't Just Renew — Compare Before You Buy</span>
              </h2>

              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Vehicle insurance protects you financially against eligible risks such as road accidents, vehicle theft, and third-party liabilities. Third-party motor insurance is also legally mandatory for vehicles plying on Indian roads.
              </p>

              {/* Comparison Matrix Box */}
              <div className="bg-gradient-to-br from-[#020d1c] to-[#0d2242] text-white p-6 rounded-2xl shadow-lg border border-gray-800">
                <span className="text-[#de9e48] text-xs font-bold uppercase tracking-wider block mb-1">
                  Our Vehicle Insurance USP
                </span>
                <p className="text-sm font-medium leading-relaxed mb-4">
                  «You don't have to check multiple companies yourself — submit your vehicle details and let KTR Consultants compare available options from top insurers to identify your best policy.»
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-gray-300">
                  {['✔️ Lowest Premium Quotes', '✔️ Highest IDV Value', '✔️ Zero Dep & Engine Protect', '✔️ Roadside Assistance', '✔️ Instant Policy Download', '✔️ Cashless Garage Tie-ups'].map((item, idx) => (
                    <div key={idx} className="bg-white/5 px-2.5 py-1.5 rounded-lg border border-white/10">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Quick Form (5 Cols) */}
            <div className="lg:col-span-5" ref={vehicleFormRef}>
              <InsuranceQuickEnquiryForm
                category="Vehicle Insurance"
                title="Compare Vehicle Insurance"
                subtitle="Enter your vehicle number or upload RC copy to get multiple company comparison quotes."
                showVehicleFields={true}
                buttonText="Compare Vehicle Insurance Options"
                customId="vehicle-insurance-form"
              />
            </div>

          </div>
        </section>

        {/* 4. Statutory Disclaimer Section */}
        <section className="bg-gray-50 border border-gray-200 rounded-3xl p-6 sm:p-8">
          <h4 className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-2 flex items-center gap-2">
            <span>⚠️</span> Important Statutory Disclaimer & Policy Conditions
          </h4>
          <p className="text-[11.5px] text-gray-600 leading-relaxed space-y-2">
            Insurance coverage, premium, eligibility, benefits, waiting periods, exclusions, claim conditions and policy terms are subject to the respective insurer's underwriting guidelines and official policy documents. Information displayed on the website is for general guidance and should not be treated as a guarantee of coverage or claim settlement.
            <br /><br />
            For Care Supreme, the 7X coverage growth, unlimited recharge, wellness renewal discounts and other benefits are subject to the applicable plan structure, optional benefits chosen, and policy terms & conditions. Customers should review the latest policy wording before purchasing.
          </p>
        </section>

      </div>
    </div>
  );
};

export default InsuranceServices;
