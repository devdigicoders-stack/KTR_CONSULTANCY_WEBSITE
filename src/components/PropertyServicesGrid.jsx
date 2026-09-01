import { Link } from 'react-router-dom';

const PropertyServicesGrid = () => {
  const services = [
    {
      title: "Property Valuation\n& TDS Services",
      desc: "Income Tax valuation reports, Capital gains FMV assessment & Section 194-IA (Form 26QB) TDS filing.",
      link: "/property-valuation-tds",
      badge: "New Service",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: "Property Legal\nServices",
      desc: "Chain of deed retrieval, title search reports, legal vetting, and non-encumbrance certificates.",
      link: "/property-legal-services",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Assessment &\nMap Services",
      desc: "Official municipal property assessment, GIS map verification, Nazul land checks & boundary certifications.",
      link: "/property-assessment-map",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      )
    },
    {
      title: "Property Search\n& Shortlisting",
      desc: "Wide range of residential, commercial and investment properties with the best options.",
      link: "/contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12v-2a1 1 0 011-1h2a1 1 0 011 1v2m-4 0h4m-2-5l-3 3v3h6v-3l-3-3z" />
        </svg>
      )
    },
    {
      title: "Property\nVerification",
      desc: "Legal verification, title check, encumbrance check and due diligence.",
      link: "/property-legal-services",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4m-6-4h6" />
        </svg>
      )
    },
    {
      title: "Property Buying\nAssistance",
      desc: "End-to-end support in negotiation, documentation and property purchase.",
      link: "/contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Home Loan\nAssistance",
      desc: "Get the best home loan options and bank tie-ups for your property.",
      link: "/services/home-loan",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Property Registration\nSupport",
      desc: "Complete support for property registration, stamp duty calculation and mutation.",
      link: "/contact",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 21h6" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50/30 py-16 lg:py-20">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
          <h3 className="text-[#020d1c] text-[15px] md:text-[16px] font-bold tracking-wide uppercase">
            OUR PROPERTY SERVICES
          </h3>
          <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-100 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_25px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group relative"
            >
              {service.badge && (
                <span className="absolute -top-2.5 right-4 bg-[#020d1c] text-[#de9e48] text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider border border-[#de9e48]/50 shadow-xs">
                  {service.badge}
                </span>
              )}
              
              {/* Top: Icon + Title */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#fcf4e8] group-hover:bg-[#de9e48] group-hover:text-white flex items-center justify-center text-[#020d1c] flex-shrink-0 transition-colors duration-300 shadow-sm border border-[#fef0d8] group-hover:border-[#de9e48]">
                  {service.icon}
                </div>
                <h4 className="text-[#020d1c] font-bold text-[14.5px] xl:text-[15px] leading-tight pt-1 whitespace-pre-line">
                  {service.title}
                </h4>
              </div>
              
              {/* Middle: Description */}
              <p className="text-gray-500 text-[12.5px] xl:text-[13px] leading-relaxed mb-6 flex-grow">
                {service.desc}
              </p>
              
              {/* Bottom: Link */}
              <div className="mt-auto">
                <Link to={service.link || '/contact'} className="text-[#de9e48] font-bold text-[13px] hover:text-[#c98e41] inline-flex items-center transition-colors group/link">
                  Know More 
                  <span className="ml-1.5 transform group-hover/link:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PropertyServicesGrid;
