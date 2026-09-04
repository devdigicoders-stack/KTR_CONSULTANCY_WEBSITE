import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Property Loans & Finance',
    desc: 'Home loans, LAP, plot purchase & property takeover solutions.',
    link: '/loans',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* House / Real estate with key/growth */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v3m-1.5-1.5h3" />
      </svg>
    )
  },
  {
    title: 'CA & GST Services',
    desc: 'Same Day GST Certificate, ITR filing, audit, CMA data & compliance.',
    link: '/ca-services',
    badge: 'Same Day GST',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* CA & GST Stamp / Certification */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 9v3m-1.5-1.5h3" />
      </svg>
    )
  },
  {
    title: 'Business Finance',
    desc: 'Working capital, CC/OD limits, term loans & business growth.',
    link: '/business-finance',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Briefcase & Growth Chart */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 11v3m-2-1.5h4" />
      </svg>
    )
  },
  {
    title: 'MSME & Mudra Finance',
    desc: 'Collateral-free Mudra schemes & MSME enterprise loans.',
    link: '/msme-project-finance',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Enterprise & MSME Shield */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9l2 2-2 2-2-2 2-2z" />
      </svg>
    )
  },
  {
    title: 'Project Finance',
    desc: 'Structured capital for new setups, plant, machinery & expansion.',
    link: '/msme-project-finance#project-finance',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Industrial / Infrastructure / Architecture */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v3" />
      </svg>
    )
  },
  {
    title: 'CIBIL & Credit Services',
    desc: 'Score analysis, credit dispute repair & fake loan removal.',
    link: '/cibil-services',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Speedometer / Score Meter & Shield */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
      </svg>
    )
  },
  {
    title: 'Property & Legal Services',
    desc: 'Title search, valuation, map drafting & legal documentation.',
    link: '/property-services',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Legal Document & Seal */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 7h2" />
      </svg>
    )
  },
  {
    title: 'Insurance & Investment',
    desc: 'Comprehensive life, health, vehicle cover & wealth plans.',
    link: '/insurance-services',
    icon: (
      <svg className="w-6 h-6 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Protection Umbrella & Growth */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l2.5 2.5" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="bg-white py-16 lg:py-24 font-sans relative z-10 -mt-8 md:-mt-12">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Title with Lines */}
        <div className="flex items-center justify-center mb-8 gap-4 lg:gap-6">
          <div className="h-px bg-[#de9e48]/30 w-12 md:w-24"></div>
          <h3 className="text-[#de9e48] text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
            OUR CORE SERVICES
          </h3>
          <div className="h-px bg-[#de9e48]/30 w-12 md:w-24"></div>
        </div>

        {/* Outer Container for Services */}
        <div className="bg-white border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] rounded-2xl p-4 sm:p-6 lg:p-8">
          
          {/* Grid Wrapper - 8 Column responsive distribution */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 gap-4 xl:gap-3 2xl:gap-3">
            {services.map((service, index) => (
              <Link 
                to={service.link}
                key={index} 
                className="group bg-white border border-gray-100 rounded-xl p-5 xl:p-4 2xl:p-4 hover:border-[#de9e48]/60 hover:shadow-[0_12px_30px_rgba(222,158,72,0.12)] transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden h-full transform hover:-translate-y-1.5"
              >
                {/* Subtle top indicator on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#de9e48]/20 via-[#de9e48] to-[#de9e48]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* USP Badge (if available) */}
                {service.badge && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-amber-500 to-[#de9e48] text-[#020d1c] font-black text-[9px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow-xs border border-amber-300">
                    ⚡ {service.badge}
                  </div>
                )}

                {/* Professional Icon Container */}
                <div className="w-13 h-13 xl:w-12 xl:h-12 2xl:w-13 2xl:h-13 rounded-2xl bg-[#fff8ed] border border-[#de9e48]/20 flex items-center justify-center mb-3.5 group-hover:bg-[#de9e48] group-hover:border-[#de9e48] group-hover:scale-105 transition-all duration-300 text-[#020d1c] group-hover:text-white shadow-sm flex-shrink-0 mt-1">
                  {service.icon}
                </div>

                {/* Title */}
                <h4 className="text-[#020d1c] font-bold text-[14px] xl:text-[13px] 2xl:text-[13.5px] mb-2 leading-snug group-hover:text-[#de9e48] transition-colors min-h-[38px] xl:min-h-[34px] 2xl:min-h-[38px] flex items-center justify-center">
                  {service.title}
                </h4>

                {/* Short 1-line description */}
                <p className="text-gray-500 text-[11.5px] xl:text-[11px] 2xl:text-[11px] leading-relaxed font-normal mb-4 flex-grow">
                  {service.desc}
                </p>

                {/* Explore Services Action */}
                <div className="mt-auto pt-3 border-t border-gray-100 w-full flex items-center justify-center text-[#de9e48] group-hover:text-[#020d1c] font-bold text-[11.5px] xl:text-[11px] 2xl:text-[12px] transition-colors group-hover:border-[#de9e48]/20">
                  <span>Explore Services</span>
                  <svg 
                    className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Services;
