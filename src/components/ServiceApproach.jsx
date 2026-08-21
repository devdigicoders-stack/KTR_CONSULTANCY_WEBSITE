import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understand your business, challenges and goals."
  },
  {
    num: "02",
    title: "Analyze",
    desc: "Conduct in-depth analysis of market and operations."
  },
  {
    num: "03",
    title: "Strategize",
    desc: "Develop customized strategies aligned with your goals."
  },
  {
    num: "04",
    title: "Implement",
    desc: "Support implementation for maximum impact."
  },
  {
    num: "05",
    title: "Measure",
    desc: "Track performance and refine for continuous growth."
  }
];

const ServiceApproach = () => {
  return (
    <section className="bg-white pb-16 lg:pb-24 font-sans">
      <div className="max-w-[1140px] mx-auto px-6 md:px-8">
        
        {/* Main Box Container */}
        <div className="border border-[#f2d8b3]/60 bg-[#fffdf5] rounded-2xl p-8 lg:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.015)]">
          
          {/* Header */}
          <div className="mb-12">
            <h3 className="text-[#020d1c] text-[24px] lg:text-[26px] font-bold font-serif mb-3 tracking-tight">
              Our Approach
            </h3>
            <div className="w-10 h-[2.5px] bg-[#de9e48]"></div>
          </div>
          
          {/* Steps Horizontal Flow */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-3 relative">
            
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                
                {/* Step Item */}
                <div className="flex-1 w-full lg:w-auto">
                  <div className="relative w-[48px] h-[48px] rounded-full bg-[#fffcf7] border border-[#f5e8d3] flex items-center justify-center text-[#020d1c] font-black text-[17px] mb-5 shadow-sm">
                    {step.num}
                    {/* Tiny decorative accent dot */}
                    <div className="absolute top-[8px] right-[8px] w-1 h-1 bg-[#de9e48] rounded-full opacity-80"></div>
                  </div>
                  
                  <h4 className="text-[#020d1c] font-bold text-[14.5px] mb-2">{step.title}</h4>
                  <p className="text-[#6b7280] text-[13px] leading-[1.65] pr-4 lg:pr-2">
                    {step.desc}
                  </p>
                </div>
                
                {/* Connecting Arrow (Hidden on mobile, visible on desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex flex-shrink-0 items-start justify-center pt-[15px] px-1 xl:px-3">
                    <svg className="w-[18px] h-[18px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                )}
                
              </React.Fragment>
            ))}

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServiceApproach;
