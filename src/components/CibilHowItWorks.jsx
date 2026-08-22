
const CibilHowItWorks = () => {
  const steps = [
    {
      num: "01",
      title: "Fill Details",
      desc: "Enter PAN, Name, Mobile, Gender & Consent",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      )
    },
    {
      num: "02",
      title: "Verify Details",
      desc: "We verify your details with CIBIL",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: "03",
      title: "Report Generation",
      desc: "Your CIBIL report is generated instantly",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      num: "04",
      title: "View Report",
      desc: "View your detailed CIBIL report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      num: "05",
      title: "Download Report",
      desc: "Download or save your CIBIL report",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Main Container */}
        <div className="border border-gray-100 rounded-2xl shadow-[0_4px_20px_-5px_rgba(0,0,0,0.03)] p-6 lg:p-10 xl:p-10 flex flex-col xl:flex-row gap-10 xl:gap-12 items-stretch bg-white">
          
          {/* Left Area: Steps */}
          <div className="flex-[3]">
            
            {/* Header */}
            <div className="flex items-center justify-center gap-4 mb-12 xl:mb-14">
              <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
              <h3 className="text-[#020d1c] text-[14px] md:text-[15px] font-bold tracking-wide uppercase">
                HOW IT WORKS
              </h3>
              <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
            </div>

            {/* Steps Flow */}
            <div className="flex flex-col md:flex-row items-start justify-between w-full relative">
              
              {steps.map((step, idx) => (
                <div key={idx} className="flex-1 flex flex-col items-center text-center relative group px-2 mb-8 md:mb-0">
                  
                  {/* Icon Circle */}
                  <div className="w-[64px] h-[64px] rounded-full border-[1.5px] border-[#de9e48]/50 flex items-center justify-center text-[#020d1c] bg-white mb-4 group-hover:scale-105 transition-transform duration-300 group-hover:border-[#de9e48] group-hover:shadow-md relative z-10">
                    {step.icon}
                  </div>
                  
                  {/* Number */}
                  <span className="text-[#020d1c] font-bold text-[12.5px] mb-2">
                    {step.num}
                  </span>
                  
                  {/* Title */}
                  <h4 className="text-[#020d1c] font-bold text-[13.5px] leading-tight mb-2">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-[11.5px] leading-relaxed max-w-[140px] mx-auto">
                    {step.desc}
                  </p>

                  {/* Connector Arrow (Hide on mobile, show on md and above) */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:block absolute top-[32px] left-[calc(50%+36px)] w-[calc(100%-72px)] z-0 pointer-events-none">
                      <div className="w-full h-0 border-t-[1.5px] border-dashed border-[#de9e48]/70 relative">
                        {/* Arrow Head */}
                        <div className="absolute -right-2 -top-[11px] text-[#de9e48]/70">
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
          <div className="w-full xl:w-[280px] flex-shrink-0 flex flex-col">
            <div className="bg-[#f9fafb] rounded-2xl p-8 flex-1 flex flex-col justify-center items-center text-center border border-gray-100 shadow-sm">
              
              <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center text-[#020d1c] mb-5 border border-gray-100">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" className="hidden"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>

              <h3 className="text-[#020d1c] font-bold text-[17px] mb-3">
                Need Help?
              </h3>
              
              <p className="text-gray-500 text-[12.5px] leading-relaxed mb-6 px-2">
                Our experts are here to help you understand your CIBIL report.
              </p>
              
              <a 
                href="https://wa.me/919918699696"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[14px] py-3 rounded-md transition-colors flex items-center justify-center shadow-sm"
              >
                Talk to Expert
                <svg className="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CibilHowItWorks;
