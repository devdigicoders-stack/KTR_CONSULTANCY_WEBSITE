import React from 'react';

const CAWhyChoose = () => {
  return (
    <section className="bg-white py-16 font-sans border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-8">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-[#020d1c] text-2xl md:text-[28px] lg:text-[32px] font-bold mb-3">
            Why Choose KTR Consultants for CA Services?
          </h2>
          <div className="w-16 h-1 bg-[#de9e48] rounded-full mx-auto relative mt-4">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full border border-[#de9e48]"></div>
          </div>
        </div>

        {/* Features Row */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-4 lg:gap-6 xl:gap-8 mt-10">
          
          {/* Feature 1 */}
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 relative w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
              <svg className="w-7 h-7 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#de9e48] rounded-full"></div>
            </div>
            <div className="flex-1">
              <h4 className="text-[#020d1c] font-bold text-[14.5px] xl:text-[15.5px] mb-2 leading-snug">
                Experienced <br />CA Professionals
              </h4>
              <p className="text-gray-500 text-[13px] xl:text-[13.5px] leading-relaxed">
                Qualified experts with extensive domain knowledge.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-gray-100 self-center"></div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 relative w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
              <svg className="w-7 h-7 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div className="absolute bottom-2 right-2 w-1.5 h-1.5 bg-[#de9e48] rounded-full"></div>
            </div>
            <div className="flex-1">
              <h4 className="text-[#020d1c] font-bold text-[14.5px] xl:text-[15.5px] mb-2 leading-snug">
                Confidential & <br />Secure
              </h4>
              <p className="text-gray-500 text-[13px] xl:text-[13.5px] leading-relaxed">
                Your data is 100% confidential and secure with us.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-gray-100 self-center"></div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 relative w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
              <svg className="w-7 h-7 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
              <div className="absolute top-3 left-2 w-1 h-1 bg-[#de9e48] rounded-full"></div>
            </div>
            <div className="flex-1">
              <h4 className="text-[#020d1c] font-bold text-[14.5px] xl:text-[15.5px] mb-2 leading-snug">
                End-to-End <br />Support
              </h4>
              <p className="text-gray-500 text-[13px] xl:text-[13.5px] leading-relaxed">
                From documentation to final deliverables, we are with you.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px h-20 bg-gray-100 self-center"></div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4 flex-1">
            <div className="flex-shrink-0 relative w-14 h-14 lg:w-[60px] lg:h-[60px] rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
              <svg className="w-7 h-7 text-[#020d1c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <div className="absolute top-3 left-3 w-1.5 h-1.5 bg-[#de9e48] rounded-full"></div>
            </div>
            <div className="flex-1">
              <h4 className="text-[#020d1c] font-bold text-[14.5px] xl:text-[15.5px] mb-2 leading-snug">
                Loan & Business <br />Focused
              </h4>
              <p className="text-gray-500 text-[13px] xl:text-[13.5px] leading-relaxed">
                Specialized in financial documents for loans and business growth.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CAWhyChoose;
