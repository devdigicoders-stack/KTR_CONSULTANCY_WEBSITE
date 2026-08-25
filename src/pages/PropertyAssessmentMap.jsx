import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ApplicationBottomCTA from '../components/ApplicationBottomCTA';

const PropertyAssessmentMap = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 'nagar-nigam',
      number: '01',
      title: 'Nagar Nigam Property Assessment',
      subtitle: 'House Tax Assessment',
      icon: (
        <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      id: 'lda-map',
      number: '02',
      title: 'LDA Map Submission',
      subtitle: 'Through Approved Architects & Valuers',
      icon: (
        <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      id: 'map-estimate',
      number: '03',
      title: 'Map Estimate Layout',
      subtitle: 'For Property Loan Support',
      icon: (
        <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#fafafa] min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#020d1c] py-16 md:py-20 lg:py-28 overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#de9e48]/10 to-transparent pointer-events-none rounded-bl-full blur-3xl"></div>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 relative z-10 text-center">
          <h1 className="text-white font-bold font-serif text-[32px] md:text-[42px] lg:text-[52px] leading-tight mb-4">
            Property Assessment, Valuation <br className="hidden md:block"/> and <span className="text-[#de9e48]">Map Services</span>
          </h1>
          <p className="text-gray-400 text-[15px] md:text-[17px] max-w-2xl mx-auto leading-relaxed">
            Technical and municipal services to ensure your property meets all regulatory requirements and is ready for loans, transfers, or construction.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all group flex flex-col h-full relative overflow-hidden">
                {/* Background Number */}
                <div className="absolute -right-4 -bottom-4 text-[120px] font-bold text-gray-50 opacity-50 select-none group-hover:text-orange-50 transition-colors">
                  {service.number}
                </div>
                
                <div className="relative z-10 flex-1">
                  <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-[#020d1c] font-bold text-[20px] mb-2 leading-snug">{service.title}</h3>
                  <p className="text-gray-500 text-[14px] font-medium">{service.subtitle}</p>
                </div>

                <div className="relative z-10 mt-8 pt-6 border-t border-gray-100">
                  <Link 
                    to={`/property-assessment-map/apply?service=${service.id}`}
                    className="inline-flex items-center text-[#de9e48] font-bold text-[14.5px] hover:text-[#020d1c] transition-colors group/btn"
                  >
                    View Details & Apply
                    <svg className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ApplicationBottomCTA />
    </div>
  );
};

export default PropertyAssessmentMap;
