import React from 'react';

const PropertyHowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Search",
      desc: "Tell us your requirement and we'll find the best properties for you.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Verify",
      desc: "We verify the property documents and legal aspects.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Finalize",
      desc: "Finalize the property with the best deal & terms.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "Documentation",
      desc: "We prepare all documents and agreements.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h1.5m1.5 0H15m-6 3h6m-6 3h6" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Registration",
      desc: "Complete registration and legal formalities.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: "06",
      title: "Handover",
      desc: "Smooth handover and after-sales support.",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-16 lg:py-20 overflow-hidden border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Main Container */}
        <div className="bg-white rounded-2xl p-6 lg:p-10 xl:p-10 flex flex-col xl:flex-row gap-8 xl:gap-6 items-stretch">
          
          {/* Left Area: Steps */}
          <div className="flex-[4] lg:pr-6">
            
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-14 xl:mb-16">
              <div className="h-px w-8 md:w-12 bg-[#de9e48]"></div>
              <h3 className="text-[#020d1c] text-[15px] font-bold tracking-wide uppercase">
                HOW IT WORKS
              </h3>
              <div className="h-px w-8 md:w-12 bg-[#de9e48]"></div>
            </div>

            {/* Steps Flow */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
              
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center text-center relative group px-1 mb-10 md:mb-0">
                  
                  {/* Icon Circle */}
                  <div className="w-[52px] h-[52px] rounded-full border border-[#de9e48]/50 flex items-center justify-center text-[#020d1c] bg-white mb-3 group-hover:scale-105 transition-transform duration-300 group-hover:border-[#de9e48] group-hover:shadow-md relative z-10">
                    {step.icon}
                  </div>
                  
                  {/* Number */}
                  <span className="text-[#020d1c] font-bold text-[12px] mb-1.5">
                    {step.num}
                  </span>
                  
                  {/* Title */}
                  <h4 className="text-[#020d1c] font-bold text-[12.5px] leading-tight mb-2">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-[10.5px] leading-relaxed max-w-[120px] mx-auto">
                    {step.desc}
                  </p>

                  {/* Connector Arrow (Hide on mobile) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[26px] left-[calc(50%+30px)] w-[calc(100%-60px)] z-0 pointer-events-none">
                      <div className="w-full h-0 border-t-[1.5px] border-dashed border-[#de9e48]/70 relative">
                        {/* Arrow Head */}
                        <div className="absolute -right-1.5 -top-[11px] text-[#de9e48]/70">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* Right Area: Need Help Card */}
          <div className="w-full xl:w-[260px] flex-shrink-0 flex flex-col mt-4 xl:mt-0 relative">
             {/* Small arrow pointing left on desktop to connect the last step to the card */}
            <div className="hidden xl:block absolute top-[98px] -left-[14px] text-gray-200">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
               </svg>
            </div>

            <div className="bg-[#fcf8f2] rounded-2xl p-7 flex-1 flex flex-col justify-center items-center text-center shadow-sm">
              
              <div className="text-[#020d1c] mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" className="hidden" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 00-18 0v4a2 2 0 002 2h1a2 2 0 002-2v-4a2 2 0 00-2-2H4a2 2 0 002-2 7 7 0 1114 0 2 2 0 002 2h-2a2 2 0 00-2 2v4a2 2 0 002 2h1a2 2 0 002-2v-4z" />
                </svg>
              </div>

              <h3 className="text-[#020d1c] font-bold text-[16px] mb-2">
                Need Help?
              </h3>
              
              <p className="text-gray-600 text-[12px] leading-relaxed mb-6 px-1">
                Talk to our property experts for the best property solutions.
              </p>
              
              <button className="w-full bg-[#de9e48] hover:bg-[#c98e41] text-white font-bold text-[13px] py-3 rounded-md transition-colors flex items-center justify-center shadow-sm">
                Talk to Expert
                <svg className="w-3.5 h-3.5 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default PropertyHowItWorks;
