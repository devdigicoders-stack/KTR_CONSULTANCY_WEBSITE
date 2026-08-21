import React from 'react';

const steps = [
  {
    num: "01",
    title: "Discover",
    desc: "Understanding your business, goals and challenges.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Plan",
    desc: "Crafting customized strategies and action plans.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Execute",
    desc: "Implementing solutions with precision and expertise.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Deliver",
    desc: "Ensuring measurable results and growth.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="2" strokeWidth="1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l5-5m0 0h-4m4 0v4" />
      </svg>
    )
  }
];

const AboutApproach = () => {
  return (
    <section className="bg-white py-20 lg:py-28 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h3 className="text-[#de9e48] text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4">
            OUR APPROACH
          </h3>
          <h2 className="text-[#020d1c] text-3xl md:text-4xl lg:text-[2.5rem] font-bold font-serif mb-6">
            A Proven Approach to Deliver Results
          </h2>
          <div className="w-12 h-1 bg-[#de9e48] mx-auto"></div>
        </div>

        {/* Steps Container */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-4 relative">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="flex items-start gap-4 lg:gap-5 w-full lg:w-1/4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-[72px] h-[72px] rounded-full bg-[#fbf5ee] flex items-center justify-center text-[#020d1c] shadow-sm">
                    {step.icon}
                  </div>
                </div>
                
                {/* Content */}
                <div className="pt-2">
                  <div className="text-[#020d1c] font-bold text-2xl leading-none mb-1">
                    {step.num}
                  </div>
                  <h4 className="text-[#020d1c] font-bold text-[17px] mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-[13.5px] leading-relaxed font-light pr-4 lg:pr-0">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Arrow separator (hidden on mobile, shown between items on desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex flex-col items-center justify-center w-12 pt-8 flex-shrink-0 text-[#de9e48]">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutApproach;
