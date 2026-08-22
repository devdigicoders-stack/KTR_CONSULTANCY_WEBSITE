import React from 'react';

const steps = [
  {
    num: "01",
    title: "Enquiry",
    desc: "Share your business requirements",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    )
  },
  {
    num: "02",
    title: "Documents",
    desc: "Submit required documents",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    num: "03",
    title: "Evaluation",
    desc: "We evaluate your profile and financials",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    )
  },
  {
    num: "04",
    title: "Proposal",
    desc: "We prepare the best finance proposal",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4" />
      </svg>
    )
  },
  {
    num: "05",
    title: "Bank Processing",
    desc: "File submitted to bank and processed",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    num: "06",
    title: "Approval",
    desc: "Loan approved by bank",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    num: "07",
    title: "Disbursement",
    desc: "Amount disbursed to your business",
    icon: (
      <svg className="w-5 h-5 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

const BusinessFinanceHowItWorks = () => {
  return (
    <section className="bg-[#fafbfc] pb-16 lg:pb-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Main Box */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm px-4 py-10 xl:px-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
            <h3 className="text-[#020d1c] text-[15px] md:text-[17px] font-bold tracking-[0.08em] uppercase">
              HOW IT WORKS
            </h3>
            <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
          </div>

          {/* Flow Container */}
          <div className="relative">
            <div className="flex flex-col lg:flex-row justify-between relative z-10 gap-6 lg:gap-0">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center relative flex-1">
                  
                  {/* Connecting Arrow for Desktop */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:flex items-center absolute top-[26px] left-[calc(50%+30px)] right-[calc(-50%+30px)] z-0">
                      <div className="w-full border-t-[1.5px] border-[#de9e48]/50 h-0 relative">
                        <svg className="w-3 h-3 text-[#de9e48]/50 absolute -right-[1px] -top-[6.5px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Vertical Divider for Desktop (Only spans text area) */}
                  {index !== steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[75px] bottom-0 right-0 border-r border-gray-100"></div>
                  )}
                  
                  {/* Circle Icon */}
                  <div className="w-[52px] h-[52px] rounded-full border-[1.5px] border-[#de9e48]/60 bg-white flex items-center justify-center mb-4 mx-auto relative hover:scale-105 transition-transform duration-300 shadow-sm z-10">
                    {/* Inner faint orange background for icon */}
                    <div className="w-[40px] h-[40px] rounded-full bg-[#fef8f0] flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>

                  {/* Connecting Arrow for mobile */}
                  {index !== steps.length - 1 && (
                    <div className="lg:hidden w-px h-6 border-l-[1.5px] border-[#de9e48]/50 my-2 relative">
                       <svg className="w-3 h-3 text-[#de9e48]/50 absolute -bottom-2 -left-[5px] rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                       </svg>
                    </div>
                  )}

                  {/* Content */}
                  <span className="text-[#020d1c] font-bold text-[12px] md:text-[13px] mb-1">
                    {step.num}
                  </span>
                  <h4 className="text-[#020d1c] font-bold text-[12px] md:text-[13px] mb-1.5 leading-tight px-1">
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] leading-[1.6] px-1 md:px-3 max-w-[140px] mx-auto font-medium">
                    {step.desc}
                  </p>

                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessFinanceHowItWorks;
