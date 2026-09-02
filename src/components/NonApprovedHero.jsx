import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropertyEligibilityModal from './PropertyEligibilityModal';

const NonApprovedHero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="bg-white pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 font-sans overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8 xl:gap-16">
            
            {/* Left Content */}
            <div className="w-full lg:w-[50%] xl:w-[50%] flex flex-col justify-center">
              
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-gray-500 text-[13px] font-medium mb-10">
                <Link to="/" className="hover:text-[#de9e48] transition-colors">Home</Link>
                <span className="text-gray-400">›</span>
                <Link to="/loans" className="hover:text-[#de9e48] transition-colors">Loans</Link>
                <span className="text-gray-400">›</span>
                <span className="text-[#020d1c]">Non-Approved Society Property Loans</span>
              </div>

              {/* Subtitle */}
              <h3 className="text-[#de9e48] text-[13px] font-bold tracking-wide uppercase mb-3">
                LOAN ASSISTANCE FOR NON-APPROVED SOCIETIES
              </h3>
              
              {/* Title */}
              <h1 className="text-[#020d1c] text-4xl md:text-5xl lg:text-[42px] xl:text-[48px] font-bold font-serif leading-[1.15] mb-5">
                Non-Approved Society?<br />
                <span className="text-[#de9e48]">Don't Assume Your<br />Loan Is Impossible.</span>
              </h1>
              
              {/* Paragraph */}
              <p className="text-gray-600 text-[13.5px] lg:text-[15px] leading-relaxed mb-8 max-w-[500px]">
                KTR Consultants helps you explore <span className="text-gray-800 font-semibold">Home Loan & Property Finance</span> options through <span className="text-gray-800 font-semibold">Nationalized Banks</span> — even for <span className="text-gray-800 font-semibold">eligible properties in non-approved societies.</span>
              </p>
              
              {/* Button */}
              <div className="mb-6 flex flex-col sm:flex-row items-center gap-4">
                <button 
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-bold text-[13.5px] py-3.5 px-8 rounded-md transition-all duration-300 shadow-sm active:scale-98"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  Check Your Property Eligibility
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>

            {/* Info Note */}
            <div className="bg-[#f0f5fa] border border-[#d6e4f0] rounded-lg p-4 flex gap-3 max-w-[500px]">
              <div className="flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#4a729e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#3b5573] text-[12.5px] font-medium leading-snug">
                Final loan approval is subject to the concerned bank's legal, technical, income and credit assessment.
              </p>
            </div>

          </div>
          
          {/* Right Image Content */}
          <div className="w-full lg:w-[50%] xl:w-[50%] flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[650px] xl:max-w-[800px]">
              <img 
                src="/bank.png" 
                alt="Property Loans" 
                className="w-full h-auto object-contain"
              />
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

export default NonApprovedHero;
