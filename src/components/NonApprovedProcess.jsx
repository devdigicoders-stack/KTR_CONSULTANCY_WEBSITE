
const NonApprovedProcess = () => {
  const steps = [
    {
      num: 1,
      title: "Property Assessment",
      desc: "We evaluate your property/society documents and current status.",
      icon: (
        <svg className="w-10 h-10 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          <circle cx="16" cy="16" r="4" strokeWidth={1.5} fill="#fff" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.5 18.5L21 21" />
        </svg>
      )
    },
    {
      num: 2,
      title: "Document Verification",
      desc: "Our team verifies and organizes all required property documents.",
      icon: (
        <svg className="w-10 h-10 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l2 2 4-4M9 10h.01" />
        </svg>
      )
    },
    {
      num: 3,
      title: "Bank Mapping",
      desc: "We identify suitable nationalized banks as per your profile and property.",
      icon: (
        <svg className="w-10 h-10 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      num: 4,
      title: "Loan Processing",
      desc: "We assist in application, follow-up and ensuring smooth processing.",
      icon: (
        <svg className="w-10 h-10 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 13h6m-3-3v6" />
        </svg>
      )
    },
    {
      num: 5,
      title: "Sanction & Disbursement",
      desc: "Loan sanctioned and amount disbursed as per bank policies.",
      icon: (
        <svg className="w-10 h-10 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 13a4 4 0 100-8 4 4 0 000 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 7h4M10 9h4M12 7v6" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19h11c1.5 0 2.828-.856 3.464-2.18l2.122-4.242" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 19v2h11c1.5 0 3-1 3-1l3.5-3" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-[#fcfcfd] py-16 lg:py-20 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#020d1c] font-bold text-[28px] md:text-[32px] mb-4 font-serif tracking-tight">
            How We Help You Get Your Loan
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

        {/* Process Steps */}
        <div className="relative max-w-[1100px] mx-auto">
          {/* Connector Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-[1.5px] border-t-[1.5px] border-dashed border-gray-300 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-[120px] h-[120px] rounded-full bg-[#f6f8fb] border border-[#e8edf4] flex items-center justify-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] group-hover:border-[#de9e48] transition-colors duration-300">
                    {step.icon}
                  </div>
                  
                  {/* Number Badge */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[30px] h-[30px] rounded-full bg-[#de9e48] text-white font-bold text-[14px] flex items-center justify-center border-[3px] border-[#fcfcfd] shadow-sm">
                    {step.num}
                  </div>
                </div>

                {/* Text Content */}
                <div className="pt-2 px-1">
                  <h3 className="text-[#020d1c] font-bold text-[15px] mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-[13px] leading-relaxed">
                    {step.desc}
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

export default NonApprovedProcess;
