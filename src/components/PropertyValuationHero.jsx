import React from 'react';
import { Link } from 'react-router-dom';

const PropertyValuationHero = ({ formRef }) => {
  const scrollToForm = () => {
    if (formRef && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      const el = document.getElementById('valuation-tds-form');
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white relative overflow-hidden pt-8 pb-12 lg:pt-12 lg:pb-16 font-sans">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" style={{ backgroundImage: 'radial-gradient(#020d1c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#de9e48]/5 to-transparent pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-gray-500 text-xs font-medium mb-6">
          <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
          <span className="text-gray-300">/</span>
          <Link to="/property-services" className="hover:text-[#de9e48] transition-colors">Property Services</Link>
          <span className="text-gray-300">/</span>
          <span className="text-[#020d1c] font-semibold">Property Valuation & TDS Services</span>
        </div>

        {/* Hero Grid */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 xl:gap-16">
          
          {/* Left Content */}
          <div className="w-full lg:w-[58%] xl:w-[60%]">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-[#de9e48]/15 text-[#020d1c] border border-[#de9e48]/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
              🏠 Tax & Documentation Solutions
            </div>

            {/* Main Title */}
            <h1 className="text-[#020d1c] text-3xl sm:text-4xl md:text-5xl lg:text-[44px] xl:text-[50px] font-bold font-serif leading-[1.18] mb-4">
              Property Valuation & <br className="hidden sm:block" />
              <span className="text-[#de9e48]">TDS Services</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl font-medium text-gray-700 mb-4">
              Complete Tax & Documentation Assistance for Property Transactions
            </p>

            {/* Description */}
            <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed mb-6">
              Buying or selling a property involves more than just completing the registry. Property valuation and TDS compliance may also be required as part of the transaction and Income Tax-related documentation. At <strong>KTR Consultants</strong>, we make the process simple by providing assistance with both Property Valuation and Property TDS Filing under one section.
            </p>

            {/* Key Feature Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 flex items-center gap-2.5">
                <span className="text-xl">📊</span>
                <div>
                  <h4 className="text-xs font-bold text-[#020d1c]">Income Tax Valuation</h4>
                  <p className="text-[11px] text-gray-500">Authorized Valuer</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 flex items-center gap-2.5">
                <span className="text-xl">🧾</span>
                <div>
                  <h4 className="text-xs font-bold text-[#020d1c]">Property TDS Filing</h4>
                  <p className="text-[11px] text-gray-500">Sec 194-IA / Form 26QB</p>
                </div>
              </div>

              <div className="bg-gray-50 border border-gray-200/80 rounded-xl p-3 flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <span className="text-xl">🛡️</span>
                <div>
                  <h4 className="text-xs font-bold text-[#020d1c]">Capital Gains Support</h4>
                  <p className="text-[11px] text-gray-500">Tax Optimization</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={scrollToForm}
                className="w-full sm:w-auto bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-sm px-8 py-3.5 rounded-xl transition-all shadow-[0_4px_14px_0_rgba(222,158,72,0.39)] hover:shadow-[0_6px_20px_rgba(222,158,72,0.25)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>Apply / Submit Details</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>

              <a
                href="https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20need%20assistance%20with%20Property%20Valuation%20%2F%20Property%20TDS%20Filing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 border border-gray-300 text-[#020d1c] font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span>WhatsApp Expert</span>
              </a>
            </div>

          </div>

          {/* Right Highlight Box */}
          <div className="w-full lg:w-[42%] xl:w-[40%]">
            <div className="bg-[#020d1c] text-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#de9e48]/10 rounded-full blur-2xl pointer-events-none"></div>

              <span className="text-[#de9e48] text-xs font-black uppercase tracking-wider mb-2 block">
                One-Stop Property Tax Assistance
              </span>

              <h3 className="text-xl font-bold font-serif mb-4 leading-snug">
                Why Valuation & TDS Compliance Matters?
              </h3>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-base text-[#de9e48] flex-shrink-0">⚠️</span>
                  <div>
                    <strong className="text-white block mb-0.5">Section 194-IA Mandate</strong>
                    <span>Property purchases valued at ₹50 Lakhs & above require 1% TDS deduction by the buyer to avoid heavy interest & penalties.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-base text-[#de9e48] flex-shrink-0">⚖️</span>
                  <div>
                    <strong className="text-white block mb-0.5">Section 50C / 56(2)(x) Valuation</strong>
                    <span>If registry circle rate differs from agreement value, official certified valuation report is critical for Income Tax defense.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/10">
                  <span className="text-base text-[#de9e48] flex-shrink-0">⚡</span>
                  <div>
                    <strong className="text-white block mb-0.5">Fast & Seamless Coordination</strong>
                    <span>We connect you directly with qualified authorized valuers and facilitate complete TDS challan & Form 16B downloads.</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800 flex items-center justify-between text-xs text-gray-400">
                <span>Direct Consultation:</span>
                <a href="tel:+919918699696" className="text-[#de9e48] font-bold hover:underline">
                  +91 99186 99696
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PropertyValuationHero;
