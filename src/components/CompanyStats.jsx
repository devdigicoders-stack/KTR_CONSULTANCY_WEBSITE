import React from 'react';

const statsData = [
  {
    icon: (
      <svg className="w-[34px] h-[34px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* People Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "500+",
    label: "Happy Clients"
  },
  {
    icon: (
      <svg className="w-[34px] h-[34px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Document/Loan Icon */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M13 3v5h5" />
      </svg>
    ),
    value: "250+",
    label: "Loans Sanctioned"
  },
  {
    icon: (
      <svg className="w-[34px] h-[34px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Money/Coins */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M10 10h4M10 14h4M12 8v8" />
      </svg>
    ),
    value: "₹250 Cr+",
    label: "Loans Disbursed"
  },
  {
    icon: (
      <svg className="w-[34px] h-[34px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Bank Building */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M3 21h18M3 10h18M5 6l7-3 7 3v4H5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M7 21v-7m3 7v-7m4 7v-7m3 7v-7" />
      </svg>
    ),
    value: "10+",
    label: "Banking Partners"
  },
  {
    icon: (
      <svg className="w-[34px] h-[34px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Target/Check */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    value: "98%",
    label: "Success Rate"
  },
  {
    icon: (
      <svg className="w-[34px] h-[34px] text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Shield/Badge */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    value: "10+",
    label: "Years of Trust"
  }
];

const CompanyStats = () => {
  return (
    <section className="bg-[#fcfcfd] py-10 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm py-5 px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-row items-center justify-between gap-y-6 lg:gap-0 lg:divide-x divide-gray-100">
            {statsData.map((stat, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3 w-full lg:w-auto flex-1 justify-center lg:py-0 px-2 lg:px-4">
                <div className="flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[#020d1c] font-bold text-[18px] md:text-[20px] leading-tight tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-gray-500 text-[10px] md:text-[11px] font-medium leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
