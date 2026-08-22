import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Home Loan',
    desc: 'Purchase, Construction & Takeover',
    link: '/services/home-loan',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* House with accent */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <circle cx="12" cy="12" r="2" className="text-[#de9e48]" strokeWidth="2" stroke="currentColor" fill="none" />
      </svg>
    )
  },
  {
    title: 'Loan Against Property',
    desc: 'LAP / Mortgage Loan',
    link: '/services/loan-against-property',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* House with key/magnifying glass */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <circle cx="14" cy="14" r="3" className="text-[#de9e48]" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-[#de9e48]" d="M16 16l2 2" />
      </svg>
    )
  },
  {
    title: 'Plot & Construction Loan',
    desc: 'Plot Purchase + Construction',
    link: '/services/plot-construction',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-[#de9e48]" d="M7 21v-4a2 2 0 012-2h4M9 11l3-3m0 0l3 3m-3-3v8" />
      </svg>
    )
  },
  {
    title: 'Balance Transfer / Takeover',
    desc: 'Switch to better interest rates',
    link: '/services/balance-transfer',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        <circle cx="12" cy="12" r="3" className="text-[#de9e48]" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Top-Up Loan',
    desc: 'Additional finance on existing loan',
    link: '/services/top-up-loan',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="text-[#de9e48]" d="M12 8v8m-4-4h8" />
      </svg>
    )
  },
  {
    title: 'Business Finance',
    desc: 'MSME, Working Capital & More',
    link: '/services/business-finance',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-[#de9e48]" d="M12 12v.01M16 12v.01M8 12v.01" />
      </svg>
    )
  },
  {
    title: 'CIBIL Services',
    desc: 'Detailed Credit Report',
    link: '/services/cibil-services',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        <circle cx="12" cy="12" r="3" className="text-[#de9e48]" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    title: 'Property & Legal Services',
    desc: 'End-to-end property solutions',
    link: '/services/property-legal-services',
    icon: (
      <svg className="w-9 h-9 md:w-11 md:h-11 mb-3 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} className="text-[#de9e48]" d="M11 12h2" />
      </svg>
    )
  }
];

const Services = () => {
  return (
    <section className="bg-white py-16 lg:py-24 font-sans relative z-10 -mt-8 md:-mt-12">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Title with Lines */}
        <div className="flex items-center justify-center mb-8 gap-4 lg:gap-6">
          <div className="h-px bg-[#de9e48]/30 w-12 md:w-24"></div>
          <h3 className="text-[#de9e48] text-xs md:text-sm font-bold tracking-[0.15em] uppercase">
            OUR CORE SERVICES
          </h3>
          <div className="h-px bg-[#de9e48]/30 w-12 md:w-24"></div>
        </div>

        {/* Outer Container for Services */}
        <div className="bg-white border border-gray-100 shadow-[0_4px_30px_rgba(0,0,0,0.04)] rounded-2xl p-4 md:p-6 lg:p-8">
          
          {/* Scrollable / Grid Wrapper */}
          <div className="flex overflow-x-auto pb-4 -mb-4 snap-x snap-mandatory lg:grid lg:grid-cols-4 xl:grid-cols-8 gap-3 md:gap-4 lg:overflow-visible lg:pb-0 lg:mb-0 lg:snap-none hide-scrollbar">
            {services.map((service, index) => (
              <Link 
                to={service.link}
                key={index} 
                className="flex-shrink-0 w-[240px] lg:w-auto snap-center bg-white border border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-lg hover:border-orange-100 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="transition-transform duration-300 group-hover:-translate-y-1">
                  {service.icon}
                </div>
                <h4 className="text-[#020d1c] font-bold text-[13px] md:text-sm mb-2 leading-snug">
                  {service.title}
                </h4>
                <p className="text-gray-500 text-[11px] md:text-[12px] leading-relaxed font-medium">
                  {service.desc}
                </p>
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
