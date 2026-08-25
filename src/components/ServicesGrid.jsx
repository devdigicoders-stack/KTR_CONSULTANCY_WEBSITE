import { Link } from 'react-router-dom';

const loanServices = [
  {
    title: "Home Loan",
    desc: "Ready residential property purchase.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    title: "Plot + Construction (P+C)",
    desc: "Plot purchase combined with house construction on the same.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  },
  {
    title: "Construction Loan",
    desc: "Construction on an already-owned plot or property.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
  },
  {
    title: "Loan Against Property (LAP)",
    desc: "Business or personal funding by keeping property as security.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: "LAP Takeover + Top-Up",
    desc: "Existing LAP transfer plus additional funding.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
  },
  {
    title: "MSME / Business Loan",
    desc: "Expansion, working capital, machinery, renovation etc.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  },
  {
    title: "Mudra Loan",
    desc: "For eligible micro and small businesses.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth={1.5} /></svg>
  },
  {
    title: "CC / OD – Working Capital",
    desc: "CC, OD, working-capital limits and existing-limit enhancement.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: "Project Finance / Project Loan",
    desc: "New project, expansion, land/building, machinery, construction etc.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" /></svg>
  },
  {
    title: "Term Loan",
    desc: "Long-term business funding for machinery, expansion, assets etc.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
  },
  {
    title: "Business Loan Takeover + Top-Up",
    desc: "Existing business loan transfer plus additional funding.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
  },
  {
    title: "Home Loan Balance Transfer + Top-Up",
    desc: "Existing home loan transfer for better rate or additional funding.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    title: "Property Purchase Loan",
    desc: "Eligible residential or commercial property purchase.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
  },
  {
    title: "Commercial Property Loan",
    desc: "Funding for shops, offices, commercial units etc.",
    icon: <svg className="w-[26px] h-[26px] text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
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
                    to="/apply-online" 
                    className="inline-flex items-center text-[#de9e48] font-bold text-[13px] hover:text-[#c98e41] transition-colors mt-auto group w-max"
                  >
                    Apply Now 
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
