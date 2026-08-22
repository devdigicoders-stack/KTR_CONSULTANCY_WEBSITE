import { Link } from 'react-router-dom';

const businessSolutions = [
  {
    title: "Working Capital",
    desc: "Short term finance to manage your daily business operations.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/services/working-capital"
  },
  {
    title: "Equipment Finance",
    desc: "Finance for machinery, equipment and infrastructure needs.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      </svg>
    ),
    link: "/services/equipment-finance"
  },
  {
    title: "CC Limit",
    desc: "Cash Credit facility to support your working capital cycle.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: "/services/cc-limit"
  },
  {
    title: "OD Limit",
    desc: "Overdraft facility assistance where suitable.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/services/od-limit"
  },
  {
    title: "MSME Loans",
    desc: "Funding assistance for eligible micro, small and medium enterprises.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/services/msme-loans"
  },
  {
    title: "Mudra Loan",
    desc: "Loan assistance for eligible micro and small business requirements.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/services/mudra-loan"
  },
  {
    title: "Project Finance",
    desc: "Finance assistance for new, expansion or eligible business projects.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    link: "/services/project-finance"
  },
  {
    title: "Term Loan",
    desc: "Business term loan for eligible business, expansion or asset requirements.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    link: "/services/term-loan"
  },
  {
    title: "Machinery / Asset Finance",
    desc: "Finance assistance for eligible machinery and business assets.",
    icon: (
      <svg className="w-[22px] h-[22px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    link: "/services/machinery-finance"
  }
];

const BusinessFinanceGrid = () => {
  return (
    <section className="bg-[#fafbfc] py-16 lg:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <div className="h-[1.5px] bg-[#de9e48]/40 w-8 md:w-12"></div>
          <h3 className="text-[#020d1c] text-[15px] md:text-[16px] font-bold tracking-[0.08em] uppercase">
            OUR BUSINESS FINANCE SOLUTIONS
          </h3>
          <div className="h-[1.5px] bg-[#de9e48]/40 w-8 md:w-12"></div>
        </div>

        {/* Grid / Flex Layout */}
        <div className="flex flex-wrap justify-center gap-5 lg:gap-6">
          {businessSolutions.map((solution, index) => {
            // First 4 items take 25% width (minus gaps) on XL screens
            // Remaining 5 items take 20% width (minus gaps) on XL screens
            const isTopRow = index < 4;
            
            return (
              <div 
                key={index} 
                className={`w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-16px)] ${isTopRow ? 'xl:w-[calc(25%-18px)]' : 'xl:w-[calc(20%-20px)]'} bg-white border border-gray-100 rounded-xl p-5 md:p-6 hover:shadow-md transition-shadow duration-300 flex items-start gap-3 md:gap-4`}
              >
                {/* Icon Container */}
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-[#fef8f0] flex items-center justify-center relative">
                  {solution.icon}
                  <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#de9e48] rounded-full hidden"></div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col h-full">
                  <h4 className="text-[#020d1c] font-bold text-[13px] md:text-[15px] mb-2 leading-tight">
                    {solution.title}
                  </h4>
                  <p className="text-gray-500 text-[11px] md:text-[12px] leading-relaxed mb-4 pr-2">
                    {solution.desc}
                  </p>
                  <Link 
                    to={solution.link} 
                    className="inline-flex items-center text-[#de9e48] font-bold text-[12px] md:text-[13px] hover:text-[#c98e41] transition-colors mt-auto group w-max"
                  >
                    Know More 
                    <svg className="w-3.5 h-3.5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default BusinessFinanceGrid;
