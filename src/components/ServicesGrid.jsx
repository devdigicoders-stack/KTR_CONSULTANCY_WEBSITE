import { Link } from 'react-router-dom';

const loanServices = [
  {
    title: "Home Loan",
    desc: "Purchase, construction, plot purchase + construction and related housing finance assistance.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    link: "/services/home-loan"
  },
  {
    title: "Plot + Construction Loan",
    desc: "Finance assistance for eligible plot purchase and construction requirements.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    link: "/services/plot-construction-loan"
  },
  {
    title: "Construction Loan",
    desc: "Construction finance for eligible residential properties.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    link: "/services/construction-loan"
  },
  {
    title: "Balance Transfer / Takeover",
    desc: "Transfer of existing home/property loans to another lender where eligible.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    link: "/services/balance-transfer"
  },
  {
    title: "Top-Up Loan",
    desc: "Additional finance on eligible existing loans/properties.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} />
      </svg>
    ),
    link: "/services/top-up-loan"
  },
  {
    title: "Loan Against Property (LAP)",
    desc: "Secured finance against eligible property.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 9a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
    link: "/services/lap"
  },
  {
    title: "OD / DOD / Property-backed Facilities",
    desc: "Property-backed overdraft / DOD-style facilities where available.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    link: "/services/od-dod"
  },
  {
    title: "Personal Loan",
    desc: "Quick personal loans for your various needs.",
    icon: (
      <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    link: "/services/personal-loan"
  }
];

const ServicesGrid = () => {
  return (
    <section className="bg-[#fcfcfd] py-16 md:py-20 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
          <h2 className="text-[#020d1c] font-bold text-[16px] md:text-[18px] tracking-[0.1em] uppercase">
            OUR LOAN SERVICES
          </h2>
          <div className="h-[2px] bg-[#de9e48]/40 w-10 md:w-16"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-5">
          {loanServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl p-5 md:p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-lg hover:border-gray-200 transition-all duration-300"
            >
              <div className="flex gap-4">
                
                {/* Left Icon */}
                <div className="w-[52px] h-[52px] rounded-full bg-[#fdf8f2] flex items-center justify-center flex-shrink-0">
                  {service.icon}
                </div>

                {/* Right Content */}
                <div className="flex flex-col pt-1.5">
                  <h3 className="text-[#020d1c] font-bold text-[14px] md:text-[15px] leading-tight mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-[12px] md:text-[13px] leading-relaxed font-medium mb-4 pr-2">
                    {service.desc}
                  </p>
                  <Link 
                    to={service.link} 
                    className="inline-flex items-center text-[#de9e48] font-bold text-[13px] hover:text-[#c98e41] transition-colors mt-auto group w-max"
                  >
                    Know More 
                    <svg className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;
