import React from 'react';

const statsData = [
  {
    icon: (
      <svg className="w-[36px] h-[36px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: (
      <svg className="w-[36px] h-[36px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 3v5h5" />
      </svg>
    ),
    value: "250+",
    label: "Loans Sanctioned"
  },
  {
    icon: (
      <svg className="w-[36px] h-[36px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 10h4M10 14h4M12 8v8" />
      </svg>
    ),
    value: "₹250 Cr+",
    label: "Loans Disbursed"
  },
  {
    icon: (
      <svg className="w-[36px] h-[36px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 21h18M3 10h18M5 6l7-3 7 3v4H5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M7 21v-7m3 7v-7m4 7v-7m3 7v-7" />
      </svg>
    ),
    value: "10+",
    label: "Banking Partners"
  },
  {
    icon: (
      <svg className="w-[36px] h-[36px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: "10+",
    label: "Years of Trust"
  }
];

const AboutWhoWeAre = () => {
  return (
    <section className="bg-[#fcfcfd] py-12 md:py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12 flex flex-col gap-6">
        
        {/* Top Part: Split Layout */}
        <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm flex flex-col xl:flex-row items-center p-4 lg:p-6 xl:p-8">
          
          {/* Left Text */}
          <div className="w-full xl:w-[35%] flex flex-col justify-center p-4 lg:p-6 xl:p-8 xl:pr-10">
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-[#de9e48] font-bold text-[13px] tracking-wide uppercase">
                WHO WE ARE
              </h3>
              <div className="h-px bg-[#de9e48]/40 w-12"></div>
            </div>
            
            <p className="text-[#020d1c] font-medium text-[13px] xl:text-[14px] leading-relaxed mb-4 opacity-90">
              KTR Consultants is a trusted financial and property services partner based in Lucknow. We assist individuals, families, professionals and businesses in fulfilling their loan, documentation, CIBIL and property-related requirements through a smooth, transparent and professional process.
            </p>
            
            <p className="text-[#020d1c] font-medium text-[13px] xl:text-[14px] leading-relaxed opacity-90">
              Our team of experienced experts ensures end-to-end support from documentation and report preparation to bank processing and final funding.
            </p>
          </div>
          
          {/* Right Stats Box */}
          <div className="w-full xl:w-[65%] flex items-center justify-center mt-4 xl:mt-0">
            <div className="bg-[#020d1c] rounded-[16px] w-full py-8 lg:py-12 shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-3 xl:flex xl:flex-nowrap items-center justify-between w-full px-2 lg:px-4 gap-y-6 sm:gap-y-8 xl:gap-y-0 xl:divide-x divide-gray-700/60">
                {statsData.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 lg:gap-2.5 w-full xl:w-auto xl:flex-1 justify-start pl-6 sm:pl-10 xl:pl-4 xl:justify-center px-1 lg:px-2">
                    <div className="flex-shrink-0">
                      {React.cloneElement(stat.icon, { className: "w-[28px] h-[28px] lg:w-[32px] lg:h-[32px] text-[#de9e48]" })}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-white font-bold text-[14px] lg:text-[16px] leading-tight tracking-tight whitespace-nowrap">
                        {stat.value}
                      </span>
                      <span className="text-gray-400 text-[10px] lg:text-[11px] font-medium leading-tight whitespace-nowrap mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>

        {/* Bottom Part: Mission, Vision, Values */}
        <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm py-6 lg:py-8 px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0 lg:divide-x divide-gray-200/70">
            
            {/* Mission */}
            <div className="flex items-center gap-4 lg:gap-5 lg:pr-8 xl:pr-10">
              <div className="flex-shrink-0">
                <svg className="w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="6" strokeWidth="1.2" />
                  <circle cx="12" cy="12" r="2" strokeWidth="1.2" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 2l2.5 2.5m5.5 5.5l2.5 2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[14px] xl:text-[15px] mb-1.5 uppercase tracking-wide">OUR MISSION</h4>
                <p className="text-gray-600 text-[12px] xl:text-[13px] leading-relaxed font-medium">
                  To deliver reliable, transparent and efficient financial & property solutions that help our clients achieve their goals with confidence.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-center gap-4 lg:gap-5 lg:px-8 xl:px-10">
              <div className="flex-shrink-0">
                <svg className="w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[14px] xl:text-[15px] mb-1.5 uppercase tracking-wide">OUR VISION</h4>
                <p className="text-gray-600 text-[12px] xl:text-[13px] leading-relaxed font-medium">
                  To be India's most trusted and technology-driven financial & property services company.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="flex items-center gap-4 lg:gap-5 lg:pl-8 xl:pl-10">
              <div className="flex-shrink-0">
                <svg className="w-[46px] h-[46px] lg:w-[52px] lg:h-[52px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l7 10L19 8" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 4v4m6-4v4" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h4 className="text-[#020d1c] font-bold text-[14px] xl:text-[15px] mb-1.5 uppercase tracking-wide">OUR VALUES</h4>
                <p className="text-gray-600 text-[12px] xl:text-[13px] leading-relaxed font-medium">
                  Integrity, Transparency, Commitment, Customer Focus and Continuous Improvement.
                </p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutWhoWeAre;
