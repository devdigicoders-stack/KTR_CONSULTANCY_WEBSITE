import React, { useState } from 'react';
import PropertyEligibilityModal from './PropertyEligibilityModal';

const HomeUSPBanner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white pb-12 lg:pb-16 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
          <div className="relative bg-[#020d1c] rounded-2xl overflow-hidden shadow-xl">
            
            {/* Background Decorative Pattern */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none flex justify-end">
              <svg viewBox="0 0 400 400" className="w-[400px] h-full text-white" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M50 350V150L200 50L350 150V350H50Z" strokeLinejoin="round" />
                <path d="M150 350V200H250V350" strokeLinejoin="round" />
                <circle cx="200" cy="130" r="20" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between p-6 sm:p-8 lg:p-10 xl:p-12 gap-6 lg:gap-8">
              
              {/* Left Content */}
              <div className="w-full lg:w-[65%] xl:w-[70%]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#de9e48]/20 text-[#de9e48] rounded-full text-[12.5px] font-bold tracking-wide uppercase mb-5 border border-[#de9e48]/30">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  Our Flagship Specialization
                </div>
                <h2 className="text-white text-2xl md:text-3xl lg:text-[34px] font-bold font-serif leading-[1.25] mb-5">
                  Property in a <span className="text-[#de9e48]">Non-Approved Society?</span><br className="hidden md:block" />
                  Don't Assume Your Loan Is Impossible.
                </h2>
                <p className="text-gray-300 text-[14.5px] lg:text-[15.5px] leading-relaxed max-w-[700px]">
                  KTR Consultants provides specialized assistance for eligible properties in non-approved societies. We expertly navigate and arrange Property Finance through Nationalized Banks, subject to legal and technical assessment.
                </p>
              </div>

              {/* Right Button */}
              <div className="w-full lg:w-[35%] xl:w-[30%] flex justify-start lg:justify-end">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="group relative inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[14.5px] py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto text-center overflow-hidden active:scale-98"
                >
                  <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 ease-in-out"></div>
                  <span className="relative z-10">Check Your Property Eligibility</span>
                  <svg className="w-5 h-5 ml-3 relative z-10 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Direct Pop-up Modal */}
      <PropertyEligibilityModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        defaultService="Non-Approved Society Property Loan"
      />
    </>
  );
};

export default HomeUSPBanner;
