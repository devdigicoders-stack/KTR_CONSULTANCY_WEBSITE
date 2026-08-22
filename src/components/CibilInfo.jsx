
const CibilInfo = () => {
  const reportFeatures = [
    {
      title: "CIBIL Score",
      desc: "Your 3-digit credit score (300-900)",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14a2 2 0 100-4 2 2 0 000 4z" />
          {/* Gauge-like icon */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11l-3 3M12 18v-2M8 11l3 3M4 11a8 8 0 0116 0" />
        </svg>
      )
    },
    {
      title: "Personal Information",
      desc: "Personal details as per CIBIL records",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "Account Information",
      desc: "Active & closed loan and credit card details",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "Payment History",
      desc: "Payment behavior and delinquency details",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 15l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Enquiries",
      desc: "Recent loan and credit enquiries",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 10v4m0 0h4m-4 0l4-4" />
        </svg>
      )
    },
    {
      title: "Credit Summary",
      desc: "Credit utilization and account summary",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-gray-50/50 py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Main Card Container */}
        <div className="bg-white rounded-[1.5rem] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden">
          
          {/* Left Column: About CIBIL */}
          <div className="lg:w-[32%] xl:w-[28%] p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 bg-white">
            <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-6">
              ABOUT CIBIL SERVICES
            </h3>
            <div className="space-y-6">
              <p className="text-[#020d1c]/80 text-[13.5px] leading-relaxed font-medium">
                CIBIL (Credit Information Bureau India Limited) is India's leading credit information company. Your CIBIL report contains your credit history, loan accounts, credit cards, payment behavior and much more.
              </p>
              <p className="text-[#020d1c]/80 text-[13.5px] leading-relaxed font-medium">
                Regularly checking your CIBIL score helps you understand your creditworthiness and improves your chances of loan approval with better interest rates.
              </p>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:w-[68%] xl:w-[72%] p-8 lg:p-10 xl:p-12 bg-gray-50/30 flex flex-col justify-center">
            
            {/* Header */}
            <div className="flex items-center justify-center gap-5 mb-10 xl:mb-12">
              <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
              <h3 className="text-[#020d1c] text-[14px] md:text-[15px] font-bold tracking-wide uppercase text-center">
                WHAT YOU GET IN YOUR CIBIL REPORT
              </h3>
              <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
            </div>

            {/* 6 Items Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-10 xl:gap-6">
              {reportFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="w-[68px] h-[68px] rounded-full border border-[#de9e48]/50 flex items-center justify-center text-[#020d1c] mb-4 group-hover:scale-105 transition-transform duration-300 group-hover:border-[#de9e48] group-hover:bg-[#de9e48]/5 bg-white">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[#020d1c] font-bold text-[13.5px] mb-2 leading-snug">
                    {feature.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-gray-500 text-[11px] leading-relaxed px-1">
                    {feature.desc}
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

export default CibilInfo;
