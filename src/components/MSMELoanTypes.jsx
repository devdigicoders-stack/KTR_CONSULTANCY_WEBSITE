
const MSMELoanTypes = () => {
  return (
    <section className="bg-[#fcfcfd] py-16 lg:py-24 font-sans border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-6 xl:px-12">
        
        <div className="text-center mb-14 lg:mb-16">
          <h2 className="text-[#020d1c] font-bold text-3xl md:text-[34px] lg:text-[40px] mb-4 font-serif tracking-tight">
            Funding Solutions We Manage
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] max-w-[600px] mx-auto">
            Comprehensive financing assistance tailored to your business scale and project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* MSME Loans */}
          <div className="bg-white border border-gray-200 rounded-[20px] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-[#de9e48]/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-full bg-[#fff5e6] text-[#de9e48] flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-[#020d1c] font-bold text-[24px] lg:text-[28px] mb-6 font-serif border-b border-gray-100 pb-4">
              MSME Loans
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">Business Expansion</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">Working Capital</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">Machinery & Equipment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">General Business Requirements</span>
              </li>
            </ul>
          </div>
          
          {/* Project Finance */}
          <div id="project-finance" className="bg-white border border-gray-200 rounded-[20px] p-8 lg:p-10 shadow-sm hover:shadow-xl hover:border-[#de9e48]/40 transition-all duration-300 scroll-mt-24">
            <div className="w-14 h-14 rounded-full bg-[#fff5e6] text-[#de9e48] flex items-center justify-center mb-6">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-[#020d1c] font-bold text-[24px] lg:text-[28px] mb-6 font-serif border-b border-gray-100 pb-4">
              Project Finance
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">New Project Setup</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">Major Project Expansion</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">Land & Building Investment</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#de9e48]"></div>
                <span className="text-gray-700 font-medium text-[16px]">Heavy Plant, Machinery & Construction</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MSMELoanTypes;
