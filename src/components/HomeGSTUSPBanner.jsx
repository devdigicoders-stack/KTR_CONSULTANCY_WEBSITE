import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CAApplyModal from './CAApplyModal';
import CADocumentsModal from './CADocumentsModal';

const HomeGSTUSPBanner = () => {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isDocsModalOpen, setIsDocsModalOpen] = useState(false);

  const gstService = {
    id: "01",
    title: "GST Registration",
    description: "Assistance with new GST registration and related documentation."
  };

  return (
    <>
      <section className="bg-gradient-to-b from-[#fcfcfd] to-white py-10 lg:py-14 font-sans relative">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6 xl:px-12">
          
          <div className="relative bg-gradient-to-r from-[#020d1c] via-[#09182f] to-[#020d1c] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 xl:p-12 overflow-hidden shadow-2xl border border-amber-500/20">
            
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#de9e48]/15 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10">
              
              {/* Left Content */}
              <div className="w-full lg:w-[65%] xl:w-[68%] text-left">
                
                {/* USP Badge */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-amber-500 to-[#de9e48] text-[#020d1c] rounded-full text-xs font-black tracking-wide uppercase mb-4 shadow-md border border-amber-300">
                  <span className="text-sm">⚡</span>
                  <span>OUR CA SPECIALIZATION USP</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#020d1c] animate-ping ml-1"></span>
                </div>

                <h2 className="text-white text-2xl sm:text-3xl md:text-[34px] lg:text-[38px] font-bold font-serif leading-tight mb-3.5">
                  Get Your <span className="text-[#de9e48] underline decoration-[#de9e48]/40 underline-offset-4">Same Day GST Certificate</span> with Zero Hassle
                </h2>

                <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] leading-relaxed max-w-2xl font-medium mb-6">
                  Apply for fresh GST Registration or compliance with KTR Consultants. Complete verification, documentation and filing handled on the same day by our dedicated CA professionals.
                </p>

                {/* Micro Key Points */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 border-t border-gray-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                    <span className="text-gray-300 text-[12px] sm:text-[13px] font-semibold">Same Day Delivery</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                    <span className="text-gray-300 text-[12px] sm:text-[13px] font-semibold">100% Online Process</span>
                  </div>
                  <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">✓</div>
                    <span className="text-gray-300 text-[12px] sm:text-[13px] font-semibold">Dedicated CA Support</span>
                  </div>
                </div>

              </div>

              {/* Right CTA Actions */}
              <div className="w-full lg:w-[35%] xl:w-[32%] flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                
                {/* Apply for GST Now Button */}
                <button
                  type="button"
                  onClick={() => setIsApplyModalOpen(true)}
                  className="w-full inline-flex items-center justify-center bg-[#de9e48] hover:bg-[#c98e41] text-[#020d1c] font-black py-3.5 px-6 rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(222,158,72,0.4)] hover:shadow-xl hover:-translate-y-0.5 text-sm sm:text-[15px] gap-2 cursor-pointer active:scale-98"
                >
                  <span>Apply for GST Registration</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>

                {/* View Documents Button */}
                <button
                  type="button"
                  onClick={() => setIsDocsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold py-3 px-6 rounded-xl transition-all duration-300 text-xs sm:text-sm gap-2 cursor-pointer"
                >
                  <span>📄 GST Documents Required</span>
                </button>

                {/* Link to all CA Services */}
                <Link
                  to="/ca-services"
                  className="text-center text-[#de9e48] hover:text-amber-300 text-xs font-semibold underline underline-offset-4 transition-colors pt-1"
                >
                  Explore All 11 CA & Tax Services →
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Direct Apply Modal */}
      <CAApplyModal
        isOpen={isApplyModalOpen}
        onClose={() => setIsApplyModalOpen(false)}
        service={gstService}
        onViewDocsClick={() => {
          setIsApplyModalOpen(false);
          setIsDocsModalOpen(true);
        }}
      />

      {/* Documents Modal */}
      <CADocumentsModal
        isOpen={isDocsModalOpen}
        onClose={() => setIsDocsModalOpen(false)}
        service={gstService}
        onApplyClick={() => {
          setIsDocsModalOpen(false);
          setIsApplyModalOpen(true);
        }}
      />
    </>
  );
};

export default HomeGSTUSPBanner;
