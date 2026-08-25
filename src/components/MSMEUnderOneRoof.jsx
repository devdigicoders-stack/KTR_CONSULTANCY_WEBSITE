import React from 'react';

const MSMEUnderOneRoof = () => {
  return (
    <section className="bg-[#f8f9fa] py-16 lg:py-24 font-sans border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
        
        <div className="text-center mb-14 lg:mb-20">
          <h2 className="text-[#020d1c] font-bold text-3xl md:text-4xl lg:text-[44px] mb-5 font-serif tracking-tight leading-[1.2]">
            You focus on your business.<br className="hidden md:block" />
            <span className="text-[#de9e48]">We manage the financing process.</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="w-20 h-[1.5px] bg-[#de9e48]"></div>
            <div className="text-[#de9e48]">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="w-20 h-[1.5px] bg-[#de9e48]"></div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-[1100px] mx-auto">
          
          {/* Without KTR (The Problem) */}
          <div className="flex-1 bg-white border border-gray-200 rounded-[20px] p-8 lg:p-12 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
              <div className="w-12 h-12 rounded-full bg-red-50 text-red-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12"/></svg>
              </div>
              <h3 className="text-[#020d1c] font-bold text-[22px]">Without KTR</h3>
            </div>
            
            <p className="text-gray-500 text-[15px] mb-8 font-medium">You have to coordinate with multiple separate entities:</p>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="text-red-400 flex-shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-gray-700 font-medium text-[16px]">Separate CA for CMA data</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-red-400 flex-shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-gray-700 font-medium text-[16px]">Separate consultant for Project Report</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-red-400 flex-shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-gray-700 font-medium text-[16px]">Separate person for Financial Projections</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-red-400 flex-shrink-0"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-gray-700 font-medium text-[16px]">Doing Bank follow-ups yourself</span>
              </li>
            </ul>
          </div>
          
          {/* With KTR (The Solution) */}
          <div className="flex-1 bg-[#020d1c] border border-[#041d3a] rounded-[20px] p-8 lg:p-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#de9e48]/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-110"></div>
            
            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
              <div className="w-12 h-12 rounded-full bg-[#de9e48] text-[#020d1c] flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
              </div>
              <h3 className="text-white font-bold text-[22px]">With KTR Consultants</h3>
            </div>
            
            <p className="text-[#de9e48] font-bold text-[16px] mb-8">A single point of coordination:</p>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-4">
                <span className="text-[#de9e48] flex-shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-white font-medium text-[16px]">One team manages <span className="text-[#de9e48] font-bold">CMA & Projections</span></span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#de9e48] flex-shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-white font-medium text-[16px]">Expert preparation of <span className="text-[#de9e48] font-bold">Project Reports (DPR)</span></span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#de9e48] flex-shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-white font-medium text-[16px]">Complete <span className="text-[#de9e48] font-bold">documentation</span> assistance</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="text-[#de9e48] flex-shrink-0"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></span>
                <span className="text-white font-medium text-[16px]">End-to-end <span className="text-[#de9e48] font-bold">Bank coordination & follow-up</span></span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default MSMEUnderOneRoof;
