import React from 'react';
import { Link } from 'react-router-dom';

const benefits = [
  {
    title: "Nationalized Bank Focused",
    desc: "Financing assistance through trusted nationalized banks.",
    icon: (
      <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Bank / Institution */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 21h18M3 10h18M5 6l7-3 7 3v4H5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M7 21v-7m3 7v-7m4 7v-7m3 7v-7" />
      </svg>
    )
  },
  {
    title: "Fast Processing",
    desc: "Minimum practical TAT with dedicated case follow-up.",
    icon: (
      <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Speed / Fast */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M15 3h4m-2-2v4" />
      </svg>
    )
  },
  {
    title: "One-Window Solution",
    desc: "All loan solutions under one roof from documentation to funding.",
    icon: (
      <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Window / Solution */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M4 12h16M12 4v16" />
      </svg>
    )
  },
  {
    title: "Expert Team",
    desc: "Experienced professionals with deep industry knowledge.",
    icon: (
      <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Team / Expert */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      </svg>
    )
  },
  {
    title: "Transparent Process",
    desc: "100% transparency in process and communication.",
    icon: (
      <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Document / Transparent */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Dedicated Support",
    desc: "Personal case manager for every client.",
    icon: (
      <svg className="w-8 h-8 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Support / User */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

const ServicesCTA = () => {
  return (
    <section className="bg-white pb-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="bg-[#020d1c] rounded-2xl flex flex-col lg:flex-row overflow-hidden shadow-xl">
          
          {/* Left Column */}
          <div className="w-full lg:w-[35%] xl:w-[30%] p-8 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-700/50">
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-2">
              WHY CHOOSE
            </h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold font-serif mb-4 leading-tight tracking-tight">
              KTR Consultants?
            </h2>
            <p className="text-gray-400 text-[13.5px] leading-relaxed mb-8 max-w-sm">
              We make the loan process simple, transparent and hassle-free for you.
            </p>
            <div>
              <Link 
                to="/about" 
                className="inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13px] py-3.5 px-6 rounded transition-colors duration-200"
              >
                Know More About Us
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column (Grid) */}
          <div className="w-full lg:w-[65%] xl:w-[70%] p-8 lg:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 lg:gap-y-0 gap-x-0">
              {benefits.map((item, i) => (
                <div 
                  key={i} 
                  className={`flex gap-4 p-2 lg:p-6 border-gray-700/50 
                    ${i < 3 ? 'lg:border-b' : ''} 
                    ${i % 3 !== 2 ? 'lg:border-r' : ''}
                  `}
                >
                  <div className="flex-shrink-0 pt-0.5">
                    {item.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="text-white font-bold text-[14px] md:text-[14.5px] tracking-tight mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-[12px] md:text-[12.5px] leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
