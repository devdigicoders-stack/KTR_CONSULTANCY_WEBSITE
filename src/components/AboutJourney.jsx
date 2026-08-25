
const journeyData = [
  {
    year: "2014",
    title: "KTR Consultants was founded.",
    icon: (
      <svg className="w-7 h-7 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Flag on mountain */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-3-9-3 9h6zm8 0l-3-9-3 9h6zm-16 0l-3-9-3 9h6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 21l3-10 3 10M13 21l3-10 3 10" />
      </svg>
    )
  },
  {
    year: "2016",
    title: "Expanded team and client base.",
    icon: (
      <svg className="w-7 h-7 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Team */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    year: "2018",
    title: "Partnered with leading banks.",
    icon: (
      <svg className="w-7 h-7 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Bank */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M3 21h18M3 10h18M5 6l7-3 7 3v4H5V6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 21v-7m3 7v-7m4 7v-7m3 7v-7" />
      </svg>
    )
  },
  {
    year: "2020",
    title: "Introduced digital process & tracking.",
    icon: (
      <svg className="w-7 h-7 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Growth Chart */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    )
  },
  {
    year: "2022",
    title: "Crossed 250+ loans sanctioned.",
    icon: (
      <svg className="w-7 h-7 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Badge */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M9 12l2 2 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    )
  },
  {
    year: "2025 & Beyond",
    title: "Continuing our mission with greater impact.",
    icon: (
      <svg className="w-7 h-7 text-[#de9e48]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        {/* Trophy */}
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M5 3v4M3 5h4M6 17v4m-2 0h4m-1 4h-2m12-8v4m-2 0h4m-1 4h-2M15 3v4M13 5h4m-2-2v11a4 4 0 01-8 0V3h8z" />
      </svg>
    )
  }
];

const AboutJourney = () => {
  return (
    <section className="bg-[#fcfcfd] py-12 md:py-16 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        <div className="bg-white border border-gray-100 rounded-[20px] shadow-sm p-6 lg:p-8 xl:px-10 xl:py-8 overflow-hidden">
          
          {/* Header */}
          <div className="flex items-center gap-4 mb-10 lg:mb-12">
            <h3 className="text-[#de9e48] font-bold text-[13px] tracking-wide uppercase">
              OUR JOURNEY
            </h3>
            <div className="h-px bg-[#de9e48]/40 w-12"></div>
          </div>

          {/* Timeline Wrapper */}
          <div className="w-full pb-2">
            <div className="relative w-full">
              
              {/* Background Line (Vertical on mobile, Horizontal on desktop) */}
              <div className="absolute left-[28px] lg:left-[8%] lg:right-[8%] top-[28px] bottom-[28px] lg:bottom-auto w-px lg:w-auto lg:h-px bg-[#de9e48]/40 z-0"></div>

              {/* Flex Container for Nodes */}
              <div className="flex flex-col lg:flex-row justify-between relative z-10 w-full gap-8 lg:gap-0">
                {journeyData.map((item, index) => (
                  <div key={index} className="flex flex-row lg:flex-col items-start lg:items-center w-full lg:w-[16%] relative">
                    
                    {/* Small Dot connecting to the next item (Desktop Only) */}
                    {index < journeyData.length - 1 && (
                      <div className="hidden lg:flex absolute top-[28px] left-[50%] w-full items-center justify-center pointer-events-none z-0">
                        <div className="w-[6px] h-[6px] bg-[#de9e48] rounded-full translate-x-[50%] -translate-y-1/2"></div>
                      </div>
                    )}

                    {/* Node Circle */}
                    <div className="w-[56px] h-[56px] flex-shrink-0 rounded-full bg-white border border-[#de9e48] flex items-center justify-center mr-5 lg:mr-0 lg:mb-5 relative z-10 shadow-sm">
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex flex-col pt-2 lg:pt-0 w-full">
                      <h4 className="text-[#020d1c] font-bold text-[14px] xl:text-[15px] mb-1.5 lg:mb-2 text-left lg:text-center whitespace-nowrap">
                        {item.year}
                      </h4>
                      <p className="text-gray-500 text-[12px] lg:text-[11px] xl:text-[12px] text-left lg:text-center leading-relaxed lg:leading-snug pr-4 lg:pr-0 lg:px-2">
                        {item.title}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutJourney;
