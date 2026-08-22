import React from 'react';

const features = [
  {
    title: "End-to-End Support",
    desc: "From documentation to funding, we handle everything for you.",
    icon: (
      <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <circle cx="16" cy="18" r="3" strokeWidth={1.5} />
      </svg>
    ),
    highlightDesc: false
  },
  {
    title: "Expert Guidance",
    desc: "Experienced professionals to structure the right finance for your business.",
    icon: (
      <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    highlightDesc: true
  },
  {
    title: "Nationalized Bank Network",
    desc: "Strong tie-ups with leading nationalized banks.",
    icon: (
      <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    highlightDesc: false
  },
  {
    title: "Fast Processing",
    desc: "Minimum practical TAT with dedicated case follow-up.",
    icon: (
      <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 12H2m20 0h-2m-2.879-7.121L19.707 3.464M4.293 3.464l1.414 1.415" />
      </svg>
    ),
    highlightDesc: false
  },
  {
    title: "Transparent Process",
    desc: "100% transparency in communication and documentation.",
    icon: (
      <svg className="w-6 h-6 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    highlightDesc: true
  }
];

const BusinessFinanceWhyChoose = () => {
  return (
    <section className="bg-white pb-16 lg:pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="bg-[#020d1c] rounded-xl p-8 lg:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle background glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#de9e48] opacity-[0.03] blur-[60px] rounded-full pointer-events-none"></div>

          {/* Title */}
          <h3 className="text-[#de9e48] text-[13px] md:text-[14px] font-bold tracking-wider uppercase mb-8">
            WHY CHOOSE KTR CONSULTANTS?
          </h3>

          {/* Features Container */}
          <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between items-start xl:items-center relative z-10">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex items-start gap-4 flex-1 ${
                  index !== features.length - 1 ? 'xl:border-r border-gray-700/50 xl:pr-6' : ''
                } ${index !== 0 ? 'xl:pl-6' : ''}`}
              >
                {/* Circular Icon */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-[#de9e48] flex items-center justify-center">
                  {feature.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col mt-0.5">
                  <h4 className="text-white font-bold text-[13px] md:text-[14px] mb-1.5 leading-tight">
                    {feature.title}
                  </h4>
                  <p className={`text-[11.5px] md:text-[12px] leading-relaxed max-w-[200px] xl:max-w-none ${feature.highlightDesc ? 'text-[#de9e48]' : 'text-gray-400'}`}>
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessFinanceWhyChoose;
