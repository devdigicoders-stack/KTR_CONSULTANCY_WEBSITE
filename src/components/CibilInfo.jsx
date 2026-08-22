import React from 'react';

const CibilInfo = () => {
  const reportFeatures = [
    {
      title: "Bank Name Details",
      desc: "Complete listing of all lending banks & institutions",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Loan Account Numbers",
      desc: "Full account numbers for all active and closed loans",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      title: "3-Digit Credit Score",
      desc: "Official Bureau Score (300 to 900) & risk rating",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11l-3 3M12 18v-2M8 11l3 3M4 11a8 8 0 0116 0" />
        </svg>
      )
    },
    {
      title: "Payment History",
      desc: "36-month month-on-month repayment track record",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 15l2 2 4-4" />
        </svg>
      )
    },
    {
      title: "Hard Enquiries",
      desc: "Recent loan applications & inquiries made by lenders",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 10v4m0 0h4m-4 0l4-4" />
        </svg>
      )
    },
    {
      title: "Credit Utilization",
      desc: "Card limits, balance utilization & overdue summaries",
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
          
          {/* Left Column: About CIBIL & USP */}
          <div className="lg:w-[32%] xl:w-[30%] p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-gray-100 bg-white flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#de9e48]/15 text-[#de9e48] border border-[#de9e48]/30 px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-4">
                Our Core USP
              </div>
              <h3 className="text-[#020d1c] text-xl font-bold font-serif mb-4">
                Transparent & Unmasked Credit Reporting
              </h3>
              <div className="space-y-4">
                <p className="text-[#020d1c]/80 text-[13.5px] leading-relaxed font-medium">
                  Unlike standard basic reports, our <strong>TransUnion CIBIL</strong> PDF report provides full granular details including <strong>Exact Bank Names</strong> and <strong>Complete Loan Account Numbers</strong>.
                </p>
                <p className="text-[#020d1c]/80 text-[13.5px] leading-relaxed font-medium">
                  This transparency allows individuals and businesses to easily detect erroneous entries, duplicate accounts, and fraudulent loans in their financial record.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#de9e48]/20 flex items-center justify-center text-[#de9e48] font-bold">
                  %
                </div>
                <div>
                  <h5 className="font-bold text-xs text-[#020d1c]">Discount Offer Active</h5>
                  <p className="text-[11.5px] text-gray-500">Apply coupon <strong>Team50</strong> for 50% discount</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="lg:w-[68%] xl:w-[70%] p-8 lg:p-10 xl:p-12 bg-gray-50/30 flex flex-col justify-center">
            
            {/* Header */}
            <div className="flex items-center justify-center gap-5 mb-10 xl:mb-12">
              <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
              <h3 className="text-[#020d1c] text-[14px] md:text-[15px] font-bold tracking-wide uppercase text-center">
                WHAT YOU GET IN YOUR OFFICIAL CREDIT REPORT
              </h3>
              <div className="h-px w-10 md:w-16 bg-[#de9e48]"></div>
            </div>

            {/* 6 Items Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-x-6 gap-y-10 xl:gap-6">
              {reportFeatures.map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Icon Circle */}
                  <div className="w-[68px] h-[68px] rounded-full border border-[#de9e48]/50 flex items-center justify-center text-[#020d1c] mb-4 group-hover:scale-105 transition-transform duration-300 group-hover:border-[#de9e48] group-hover:bg-[#de9e48]/5 bg-white shadow-sm">
                    {feature.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-[#020d1c] font-bold text-[13px] mb-1.5 leading-snug">
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
