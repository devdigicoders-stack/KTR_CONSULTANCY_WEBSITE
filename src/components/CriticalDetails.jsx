import React from 'react';

const CriticalDetails = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8 mb-8">
        
        {/* Title */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px bg-[#de9e48] w-12 md:w-20"></div>
          <h2 className="text-[#020d1c] text-lg md:text-xl font-bold tracking-wide">CRITICAL DETAILS REQUIRED</h2>
          <div className="h-px bg-[#de9e48] w-12 md:w-20"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-center text-gray-600 text-[14px] md:text-[15px] font-medium mb-10">
          The Chain Deed details must be clearly visible/readable. The following details are generally required:
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-8">
          
          {/* Card 1: Court Name */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#de9e48]/50 transition-colors">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#de9e48] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10v11m16-11v11m-8-11v11m-4-11v11m8-11v11" />
            </svg>
            <span className="text-[#020d1c] font-bold text-[13px] sm:text-[14px]">Court Name</span>
          </div>

          {/* Card 2: Date */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#de9e48]/50 transition-colors">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#de9e48] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="text-[#020d1c] font-bold text-[13px] sm:text-[14px]">Date</span>
          </div>

          {/* Card 3: Bahi No. */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#de9e48]/50 transition-colors">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#de9e48] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-[#020d1c] font-bold text-[13px] sm:text-[14px]">Bahi No.</span>
          </div>

          {/* Card 4: Jild No. */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#de9e48]/50 transition-colors">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#de9e48] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <span className="text-[#020d1c] font-bold text-[13px] sm:text-[14px]">Jild No.</span>
          </div>

          {/* Card 5: Page No. */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#de9e48]/50 transition-colors">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#de9e48] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9h6m-6 4h6m-6 4h4" />
            </svg>
            <span className="text-[#020d1c] font-bold text-[13px] sm:text-[14px]">Page No.</span>
          </div>

          {/* Card 6: Kramank No. */}
          <div className="bg-white border border-gray-100 rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center shadow-[0_4px_15px_-5px_rgba(0,0,0,0.05)] hover:border-[#de9e48]/50 transition-colors">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 text-[#de9e48] mb-2 sm:mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 6h.01M7 12h.01M7 18h.01" />
            </svg>
            <span className="text-[#020d1c] font-bold text-[13px] sm:text-[14px]">Kramank No.</span>
          </div>
        </div>

        {/* Bottom Red Warning */}
        <div className="bg-[#fff5f5] border border-red-100 rounded-xl p-5 flex flex-col sm:flex-row items-center sm:items-start justify-center gap-3 text-center sm:text-left mx-auto">
          <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-red-700 text-[13.5px] font-medium leading-relaxed">
            If any of the above details are unclear, blurred, cut off or incomplete, the required deed cannot be provided.<br className="hidden sm:block"/>
            Please upload a clear and readable document to avoid delays or rejection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CriticalDetails;
