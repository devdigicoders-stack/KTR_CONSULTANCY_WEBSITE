import React from 'react';
import { Link } from 'react-router-dom';

const ComplexFundingSection = () => {
  const highlightPoints = [
    {
      title: "Comprehensive Financials & CMA Data",
      desc: "Project Reports, CMA preparation, multi-year audited financials and TEV assessments tailored for institutional scrutiny.",
      icon: (
        <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "End-to-End Documentation Under One Roof",
      desc: "No need to coordinate with multiple CAs, advocates, or agents. We bring every key aspect together in-house.",
      icon: (
        <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Lender Coordination & Bank Follow-ups",
      desc: "Direct coordination with nationalized banks & lenders, query resolution and active management from start to sanction.",
      icon: (
        <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white via-[#fcfbf9] to-[#f7f5f0] py-16 lg:py-24 font-sans relative overflow-hidden border-t border-gray-100">
      
      {/* Decorative Watermark Background */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#de9e48]/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12 relative z-10">
        
        {/* Main Content Box */}
        <div className="bg-[#020d1c] rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden border border-amber-500/20">
          
          {/* Subtle Glow & Watermark inside box */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#de9e48]/15 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#de9e48]/20 border border-[#de9e48]/40 rounded-full text-xs font-black uppercase tracking-wider text-[#de9e48] mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#de9e48] animate-pulse"></span>
              <span>SPECIALIZED FUNDING ADVISORY</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold font-serif leading-[1.2] mb-6 text-white tracking-tight">
              When Funding Gets Complex, <br className="hidden sm:block" />
              <span className="text-[#de9e48]">Experience Matters.</span>
            </h2>

            {/* Sub-paragraph */}
            <p className="text-gray-200 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-4xl font-normal mb-8 text-opacity-95">
              Large projects and substantial funding requirements need more than just a loan application — they need the right financial structure, strong documentation and experienced execution.
            </p>

            {/* Detailed Description */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10 backdrop-blur-sm">
              <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed mb-4">
                At <strong className="text-white font-semibold">KTR Consultants</strong>, we specialise in assisting clients with complex and large-ticket funding requirements, bringing together the financial expertise, documentation and lender coordination needed to navigate the funding process efficiently.
              </p>
              <p className="text-[#de9e48] font-bold text-xs sm:text-sm md:text-[15.5px] leading-relaxed">
                From Project Reports, CMA Data & Financials to Documentation, Lender Coordination, Bank Follow-ups & Query Resolution, we provide end-to-end funding support under one roof.
              </p>
            </div>

            {/* 3 Pillars / Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
              {highlightPoints.map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#de9e48]/50 rounded-xl p-5 md:p-6 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#de9e48]/15 border border-[#de9e48]/30 flex items-center justify-center mb-4 flex-shrink-0">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote / Summary Statement Box */}
            <div className="bg-gradient-to-r from-amber-500/20 via-[#de9e48]/25 to-amber-500/20 border border-[#de9e48]/40 rounded-2xl p-6 md:p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
              
              <div className="flex-1">
                <h3 className="text-white font-bold font-serif text-lg sm:text-xl md:text-2xl mb-2 text-[#de9e48]">
                  One Requirement. One Experienced Team. Complete Funding Support.
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-3xl">
                  No need to coordinate with multiple professionals for different stages of your funding requirement. We bring the key aspects together, helping you move forward with greater clarity, preparedness and confidence.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/apply-online?category=business"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black text-xs sm:text-sm px-7 py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_16px_rgba(222,158,72,0.4)] hover:shadow-xl hover:-translate-y-0.5 whitespace-nowrap cursor-pointer active:scale-98 gap-2"
                >
                  <span>Discuss Your Project</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>

                <a
                  href="https://wa.me/919918699696?text=Hi%20KTR%20Consultants%2C%20I%20have%20a%20complex%20%2F%20large%20project%20funding%20requirement%20and%20need%20expert%20assistance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all whitespace-nowrap gap-2"
                >
                  <span>WhatsApp Advisory</span>
                </a>
              </div>

            </div>

            {/* Bottom Brand Statement */}
            <div className="text-center pt-4 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-2">
              <span className="font-bold text-white tracking-wider uppercase">
                KTR Consultants
              </span>
              <span className="text-[#de9e48] font-semibold">
                Your Partner for Complex & Large Funding Requirements.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ComplexFundingSection;
