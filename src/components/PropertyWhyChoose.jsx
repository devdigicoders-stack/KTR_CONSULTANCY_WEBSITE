import React from 'react';
import { Link } from 'react-router-dom';

const PropertyWhyChoose = () => {
  const features = [
    {
      topTitle: "100%",
      bottomTitle: "Transparency",
      desc: "Clear and transparent dealings at every step.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <circle cx="12" cy="12" r="8" strokeWidth={1} strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      topTitle: "Verified",
      bottomTitle: "Properties",
      desc: "All properties are legally verified and trusted.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v2" />
          <circle cx="12" cy="12" r="10" strokeWidth={1} strokeDasharray="3 3" />
        </svg>
      )
    },
    {
      topTitle: "Expert",
      bottomTitle: "Guidance",
      desc: "Get advice from experienced professionals.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0-1.5.5-2 1.5-2s1.5.5 1.5 2c0 1.5-1.5 2-1.5 3" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
          <circle cx="12" cy="7" r="6" strokeWidth={1} strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      topTitle: "End-to-End",
      bottomTitle: "Support",
      desc: "From search to registration, we handle everything.",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          <circle cx="12" cy="12" r="11" strokeWidth={1} strokeDasharray="3 3" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Dark Banner Container */}
        <div className="bg-[#020d1c] rounded-xl p-6 lg:px-8 lg:py-8 xl:px-10 xl:py-8 shadow-2xl relative flex flex-col lg:flex-row items-stretch border border-gray-800/50">
          
          {/* Decorative glow */}
          <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-[#de9e48]/5 to-transparent pointer-events-none rounded-l-xl blur-3xl"></div>

          {/* Left Column (Heading & Button) */}
          <div className="w-full lg:w-[28%] xl:w-[25%] flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-gray-700/60 pb-6 lg:pb-0 lg:pr-8 xl:pr-10 relative z-10">
            <h3 className="text-[#de9e48] font-bold text-[14px] xl:text-[15px] tracking-wide uppercase">
              WHY CHOOSE
            </h3>
            <h2 className="text-white font-bold font-serif text-[28px] lg:text-[32px] xl:text-[36px] leading-[1.1] mt-1 mb-3">
              KTR CONSULTANTS?
            </h2>
            <p className="text-gray-300 text-[12px] xl:text-[13px] leading-relaxed mb-5 max-w-[240px]">
              We ensure a safe, secure and transparent property buying experience.
            </p>
            <div>
              <Link 
                to="/about" 
                className="inline-flex bg-[#de9e48] hover:bg-[#c98e41] text-white font-semibold text-[13px] px-6 py-2.5 rounded transition-colors items-center justify-center shadow-sm w-max"
              >
                Know More About Us
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Column (4 Features Grid) */}
          <div className="w-full lg:w-[72%] xl:w-[75%] flex flex-col sm:flex-row justify-between items-stretch divide-y sm:divide-y-0 sm:divide-x divide-gray-700/60 relative z-10 lg:pl-4 xl:pl-6 pt-6 lg:pt-0">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={`flex gap-3 xl:gap-4 items-start py-4 sm:py-0 ${
                  index === 0 ? 'sm:pr-4 xl:pr-6' : 
                  index === features.length - 1 ? 'sm:pl-4 xl:pl-6' : 
                  'sm:px-4 xl:px-6'
                } flex-1 group my-auto`}
              >
                {/* Icon */}
                <div className="text-[#de9e48] flex-shrink-0 mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <div className="flex flex-col">
                  <span className="text-white font-bold text-[15px] xl:text-[17px] leading-tight">
                    {feature.topTitle}
                  </span>
                  <span className="text-white font-bold text-[15px] xl:text-[17px] leading-tight mb-2">
                    {feature.bottomTitle}
                  </span>
                  <p className="text-gray-400 text-[11px] xl:text-[12px] leading-snug max-w-[140px]">
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

export default PropertyWhyChoose;
