import React from 'react';

const stats = [
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="10" r="3" strokeWidth={1.5} />
      </svg>
    ),
    value: "10+",
    label: "Years of Experience"
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <rect x="4" y="4" width="16" height="16" rx="2" strokeWidth={1.5} />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 16v-4m4 4v-6m4 6V8" />
      </svg>
    ),
    value: "250+",
    label: "Projects Completed"
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    value: "150+",
    label: "Happy Clients"
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        <circle cx="12" cy="14" r="2" strokeWidth={1.5} />
      </svg>
    ),
    value: "25+",
    label: "Expert Consultants"
  },
  {
    icon: (
      <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15a5 5 0 100-10 5 5 0 000 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.21 13.89L7 21l5-2 5 2-1.21-7.11" />
      </svg>
    ),
    value: "98%",
    label: "Client Satisfaction"
  }
];

const StatsBanner = () => {
  return (
    <section className="bg-[#fafafa] pb-24 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="bg-[#030e21] rounded-xl px-2 py-8 lg:px-4 shadow-xl border border-gray-800/30">
          <div className="flex flex-col lg:flex-row justify-between items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-700/60">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-4 flex-1 py-4 lg:py-0 px-4 xl:px-6 w-full lg:w-auto justify-center lg:justify-start">
                <div className="text-[#de9e48] flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-white font-bold text-2xl lg:text-3xl leading-none mb-1.5 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-gray-300 text-[11.5px] lg:text-[13px] font-light tracking-wide">
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

export default StatsBanner;
