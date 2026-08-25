import React from 'react';

const reasons = [
  "All kinds of loan assistance under one roof.",
  "Specialized assistance for eligible non-approved society properties.",
  "Financing assistance through nationalized banks.",
  "Fast processing with minimum practical TAT.",
  "End-to-end support from document preparation to funding.",
  "Detailed CIBIL report with bank name and loan account number.",
  "One-window solution for property & legal documentation.",
  "Dedicated case manager for every client."
];

const AboutWhyChooseUs = () => {
  return (
    <section className="bg-white py-12 md:py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
        
        {/* Left Side: List */}
        <div className="w-full lg:w-[45%] xl:w-[45%] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-8">
            <h3 className="text-[#de9e48] font-bold text-[13px] tracking-wide uppercase">
              WHY CHOOSE KTR CONSULTANTS?
            </h3>
            <div className="h-px bg-[#de9e48]/40 w-12"></div>
          </div>
          
          <ul className="flex flex-col gap-4">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-3.5">
                <div className="flex-shrink-0 mt-[2px]">
                  <svg className="w-[18px] h-[18px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Check circle outline */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-[#020d1c] font-medium text-[13px] xl:text-[14px] opacity-90 leading-snug">
                  {reason}
                </span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Right Side: Image + Floating Card */}
        <div className="w-full lg:w-[55%] xl:w-[55%] relative flex items-center justify-end lg:pr-8 xl:pr-12 pt-6 lg:pt-0">
          <div className="w-[95%] lg:w-full ml-auto lg:ml-0 relative">
            <img 
              src="/images/aboutus.png" 
              alt="KTR Consultants Office" 
              className="w-full h-auto object-cover rounded-[20px]"
            />
            
            {/* Floating Card */}
            <div className="relative mt-[-40px] mx-auto lg:absolute lg:-bottom-12 lg:-right-10 xl:-right-12 bg-white p-6 lg:p-8 rounded-[20px] shadow-[0_10px_40px_rgba(0,0,0,0.08)] w-[90%] sm:w-[320px] lg:w-[320px] z-10 border border-gray-50">
              <h4 className="text-[#de9e48] font-bold text-[12px] lg:text-[13px] tracking-wide uppercase mb-3">
                OUR COMMITMENT
              </h4>
              <p className="text-gray-600 text-[12px] lg:text-[13px] leading-relaxed font-medium mb-6">
                We are committed to providing fast, transparent and reliable services with 100% client satisfaction.
              </p>
              
              <div className="flex items-center gap-4 pt-5 border-t border-gray-100">
                <div className="flex-shrink-0">
                  <svg className="w-[42px] h-[42px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {/* Shield Check */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#020d1c] font-bold text-[22px] leading-tight mb-0.5">
                    100%
                  </span>
                  <span className="text-gray-500 text-[11px] font-medium leading-tight">
                    Client Satisfaction
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
