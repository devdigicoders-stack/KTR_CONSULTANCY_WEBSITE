import React from 'react';

const NonApprovedWhyChoose = () => {
  const features = [
    {
      title: "Nationalized Bank Financing",
      desc: "Access to loan options from leading nationalized banks.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "Non-Approved Society Properties",
      desc: "We have expertise in handling cases where the property/society may not be on the bank's standard approved-society list.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Complex Property Cases",
      desc: "We help assess property documentation and identify the appropriate financing route.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l4 4" />
        </svg>
      )
    },
    {
      title: "End-to-End Assistance",
      desc: "From initial property assessment and documentation to bank processing and sanction.",
      icon: (
        <svg className="w-8 h-8 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[#020d1c] font-bold text-[28px] md:text-[32px] mb-4 font-serif tracking-tight">
            Why Choose KTR Consultants?
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-[1.5px] bg-[#de9e48]"></div>
            <div className="text-[#de9e48]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div className="w-16 h-[1.5px] bg-[#de9e48]"></div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-[14px] p-6 lg:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-[60px] h-[60px] rounded-full bg-[#fff9f0] flex items-center justify-center flex-shrink-0 text-[#de9e48]">
                  {feature.icon}
                </div>
                <h3 className="text-[#020d1c] font-bold text-[15px] leading-snug">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-600 text-[14px] leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NonApprovedWhyChoose;
